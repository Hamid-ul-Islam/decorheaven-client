import { model, models, Schema } from "mongoose";

const OrderSchema = new Schema(
  {
    line_items: Object,
    name: String,
    email: String,
    phone: String,
    total: Number,
    city: String,
    postalCode: String,
    streetAddress: String,
    paid: Boolean,
    retruned: Boolean,
  },
  {
    timestamps: true,
  }
);

export const Order = models?.Order || model("Order", OrderSchema);
