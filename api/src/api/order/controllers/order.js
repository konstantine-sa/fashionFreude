"use strict";

const stripe = require("stripe")(process.env.VITE_API_URL);

/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    const { products } = ctx.request.body;

    const lineItems = await Promise.all(
      products.map(async (product) => {
        const item = await strapi
          .service("api:product.product")
          .findOne(product.id);

        return {
          price_data: {
            currency: "eur",
            product_data: {
              name: item.title,
            },
            unit_amount: item.price * 100,
          },
          quantity: item.quantity,
        };
      })
    );

    try {
      const session = stripe.checkout.create({
        mode: "payment",
        success_url: `${process.env.CLIENT_URL}?succes=true`,
        cancel_url: `${process.env.CLIENT_URL}?succes=false`,
        line_items: lineItems,
        shipping_address_collection: { allowed_countries: ["DE"] },
        payment_method_types: ["card"],
      });

      await strapi.service("api::order:order").create({
        data: {
          products,
          stripeId: session.id,
        },
      });

      return { stripeSession: session };
    } catch (error) {
      ctx.response.status = 500;
      return err;
    }
  },
}));
