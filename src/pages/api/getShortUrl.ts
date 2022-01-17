/* eslint-disable @typescript-eslint/no-var-requires */
import type { NextApiRequest, NextApiResponse } from 'next';
const faunadb = require('faunadb'),
  q = faunadb.query;

const client = new faunadb.Client({
  secret: process.env.NEXT_PUBLIC_FAUNA_KEY,
});

export default async function hello(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      message: `${req.method} requests are not allowed`,
      success: false,
    });
  }
  try {
    const { shortened } = JSON.parse(req.body);
    const resData = await client.query(
      q.Map(
        q.Paginate(q.Match(q.Index('get_short_url'), shortened)),
        q.Lambda('X', q.Get(q.Var('X')))
      )
    );
    res.status(200).json({
      message: 'Success Found Shortened links',
      success: true,
      url: resData.data[0].data.url,
      shortened: resData.data[0].data.shortened,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Url Not Found',
      success: false,
    });
  }
}
