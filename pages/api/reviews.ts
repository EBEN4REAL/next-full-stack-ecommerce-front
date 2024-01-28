import {mongooseConnect} from "@/lib/mongoose";
import {Review} from "@/models/Review";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  await mongooseConnect();

  if (req.method === 'POST') {
    const {title,description,stars,product} = req.body;
    res.json(await Review.create({title,description,stars,product}));
  }

  if (req.method === 'GET') {
    const {product} = req.query;
    res.json( await Review.find({product}, null, {sort:{createdAt:-1}}) );
  }
}