// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function searchReposHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(403).json({ error: 'Unauthorized method' })
  }

  const { searchTerm, language } = req.body

  try {
    // Send GET request to GitHub API
    const url = `https://api.github.com/search/repositories?q=(queer OR LGBTQ OR LGBT AND ${searchTerm})+in:readme&language=${language}`;
    const response = await axios.get(url);

    // Process the response
    const data = response.data;
    const repos = data.items.map((item: any) => ({
      name: item.name,
      html_url: item.html_url,
      description: item.description,
      contributors_url: item.contributors_url,
      owner: item.owner.login
    }));

    res.status(200).json(repos);
  } catch (error) {
    console.error('Request failed:', error);
    res.status(500).json({ error: 'An error occurred while processing the request.' });
  }
}