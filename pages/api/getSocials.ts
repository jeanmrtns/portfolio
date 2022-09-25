import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { Social } from '../../../typings'
import { sanityClient } from '../../lib/sanity'

const query = groq`
  *[_type == "social"]
`

type Data = {
  socials: Social[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const socials: Social[] = await sanityClient.fetch(query)

  return res.json({ socials })
}
