/* eslint-disable @typescript-eslint/no-explicit-any */
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
    const { jabatan, divisi } = JSON.parse(req.body);
    const resData = await client.query(
      q.Map(
        q.Paginate(q.Match(q.Index('get_team_data_filter'), [jabatan, divisi])),
        q.Lambda('X', q.Get(q.Var('X')))
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
