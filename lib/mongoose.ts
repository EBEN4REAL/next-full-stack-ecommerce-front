import mongoose, { Connection } from "mongoose";

export function mongooseConnect(): Promise<typeof mongoose> | Promise<Connection> {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
  } else {
    const uri = process.env.MONGODB_URI as string;
    return mongoose.connect(uri);
  }
}