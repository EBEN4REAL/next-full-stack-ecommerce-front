import {mongooseConnect} from "@/lib/mongoose";
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import {Address} from "@/models/Address";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  await mongooseConnect();
  const session = await getServerSession(req, res, authOptions);

  if (req.method === 'PUT') {
    const address = await Address.findOne({userEmail: session?.user.email});
    if (address) {
      res.json(await Address.findByIdAndUpdate(address._id, req.body));
    } else {
      res.json(await Address.create({userEmail: session?.user.email, ...req.body}));
    }
  }
  if (req.method === 'GET') {
    const address = await Address.findOne({userEmail: session?.user.email});
    res.json(address);
  }
}