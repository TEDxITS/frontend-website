/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
import { Collection, Documents } from 'faunadb';
import type { NextApiRequest, NextApiResponse } from 'next';
const faunadb = require('faunadb'),
  q = faunadb.query;

const client = new faunadb.Client({
  secret: process.env.NEXT_PUBLIC_FAUNA_KEY,
});

export default async function hello(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({
      message: `${req.method} requests are not allowed`,
      success: false,
    });
  }
  try {
    const resData = await client.query(
      q.Map(
        q.Paginate(Documents(Collection('team'))),
        q.Lambda((x: any) => q.Get(x))
      )
    );
    const result = resData.data.map((item: { data: any }) => item.data);
    res.status(200).json({
      message: 'Success Get Team Data',
      success: true,
      content: result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error',
      success: false,
    });
  }
}
