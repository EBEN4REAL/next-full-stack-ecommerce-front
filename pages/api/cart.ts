import {mongooseConnect} from "@/lib/mongoose";
import {Product} from "@/models/Product";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handle(req: NextApiRequest,res: NextApiResponse) {
  await mongooseConnect();
  const ids = req.body.ids;
  res.json(await Product.find({_id:ids}));
}