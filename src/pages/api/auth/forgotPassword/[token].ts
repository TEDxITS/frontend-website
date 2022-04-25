/* eslint-disable @typescript-eslint/no-var-requires */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

type QueryType = {
  query: {
    token: string;
  };
};

import { NextApiResponse } from 'next';

export default async function verification(
  { query: { token } }: QueryType,
  res: NextApiResponse
) {
  res.status(200).redirect(307, `/auth/forgot-password/${token}`);
}
