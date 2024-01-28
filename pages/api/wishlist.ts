import {mongooseConnect} from "@/lib/mongoose";
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import {WishedProduct} from "@/models/WishedProduct";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  await mongooseConnect();
  const session = await getServerSession(req, res, authOptions);

  if (req.method === 'POST') {
    const {product} = req.body;
    const wishedDoc = await WishedProduct.findOne({userEmail: session?.user?.email, product});
    if (wishedDoc) {
      await WishedProduct.findByIdAndDelete(wishedDoc._id);
      res.json({wishedDoc});
    } else {
      await WishedProduct.create({userEmail: session?.user?.email, product});
      res.json('created');
    }
  }

  if (req.method === 'GET') {
    res.json(
      await WishedProduct.find({userEmail: session?.user?.email}).populate('product')
    );
  }
}