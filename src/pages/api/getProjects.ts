import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { Project } from '../../../typings'
import { sanityClient } from '../../../sanity'

const query = groq`
  *[_type == "project"] {
    ...,
    technologies[] ->
  }
`

type Data = {
  projects: Project[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const projects: Project[] = await sanityClient.fetch(query)

  return res.json({ projects })
}
