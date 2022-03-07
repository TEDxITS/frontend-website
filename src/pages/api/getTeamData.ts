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
    const { teamJabatan } = JSON.parse(req.body);
    const resData = await client.query(
      q.Map(
        // q.Paginate(q.Match(q.Index('get_team_data_by_jabatan'), jabatan)),
        //   q.Lambda(
        //     ['teamref'],
        //     q.Get(q.Var('teamref'))
        //   ),

        q.Paginate(q.Match(q.Index('get_team_data_by_jabatan'), teamJabatan))
        // q.Paginate(q.Match(q.Index('get_team_data'))),
        //   q.Lambda(
        //     ['teamref'],
        //     q.Let(
        //       {
        //         user: q.Get(q.Var('teamref')),
        //         locationrefs: q.Select(['data'], q.Paginate(q.Match(q.Index('team_data_by_jabatan'), q.Var('teamref')))),
        //         locations: q.Map(q.Var('jabatanrefs'), q.Lambda(['lr'], q.Select(['data'], q.Get(q.Var('lr'))))),
        //         locationsFound: q.Any(q.Map(
        //           q.Var('jabatan'),
        //           q.Lambda(['l'], q.ContainsStr(q.Select(['jabatan'], q.Var('l')), 'Expert Staff'))
        //         ))
        //       },
        //     q.Var('jabatanFound')
        //     )
        //   ),
        //           q.Paginate(q.Filter(
        //             q.Match(q.Index('get_team_data')),
        //               q.Lambda(
        //                 ['teamref'],
        //                 q.Let(
        //                   {
        //                     team: q.Get(q.Var('teamref')),
        //                     jabatanrefs: q.Select(['data'], q.Paginate(q.Match(q.Index('team_data_by_jabatan'), q.Var('teamref')))),
        //                     jabatans: q.Map(q.Var('jabatanrefs'), q.Lambda(['lr'], q.Select(['data'], q.Get(q.Var('lr'))))),
        //                     jabatansFound: q.Any(q.Map(
        //                       q.Var('jabatans'),
        //                       q.Lambda(['l'], q.ContainsStr(q.Select(['jabatan'], q.Var('l')), 'Expert Staff'))
        //                     ))
        //                   },
        //       q.Var('jabatansFound')
        //     )
        //   )
        // ))
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
