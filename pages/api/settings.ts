import {mongooseConnect} from "@/lib/mongoose";
import {Setting} from "@/models/Setting";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  await mongooseConnect();

  if (req.method === 'GET') {
    const {name} = req.query;
    res.json( await Setting.findOne({name}) );
  }
}