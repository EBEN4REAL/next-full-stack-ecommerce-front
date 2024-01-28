import {mongooseConnect} from "@/lib/mongoose";
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import {Order} from "@/models/Order";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  await mongooseConnect();
  const session = await getServerSession(req, res, authOptions);
  res.json(
    await Order.find({userEmail: session?.user?.email})
  );
}