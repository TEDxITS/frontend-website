/* eslint-disable @typescript-eslint/no-var-requires */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';
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
    const { url, shortened } = JSON.parse(req.body);
    if (url !== undefined && shortened !== undefined) {
      await client.query(
        q.Create(q.Collection('urls'), {
          data: {
            url: url,
            shortened: shortened,
          },
        })
      );
      res.status(200).json({
        message: 'Success Created Shortened Links',
        success: true,
        url: url,
        shortened: shortened,
      });
    } else {
      res.status(500).json({
        message: 'Field Cannot Be Empty',
        success: false,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error,
      success: false,
    });
  }
}
