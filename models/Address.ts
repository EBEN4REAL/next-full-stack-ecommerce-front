import mongoose, { Model, models, Schema } from "mongoose";

interface IAddress {
  userEmail: string;
  name?: string;
  email?: string;
  city?: string;
  postalCode?: string;
  streetAddress?: string;
  country?: string;
}

const AddressSchema = new Schema<IAddress>({
  userEmail: { type: String, unique: true, required: true },
  name: String,
  email: String,
  city: String,
  postalCode: String,
  streetAddress: String,
  country: String,
});

export const Address: Model<IAddress> = (models?.Address as Model<IAddress>) || mongoose.model<IAddress>('Address', AddressSchema);