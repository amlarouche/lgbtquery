// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function searchContributorsHandler(req: NextApiRequest, res: NextApiResponse) {
  const owner = 'VickiLanger'
  const repo = 'LGBTQ-of-the-day-bot'
  try {
    // Send GET request to GitHub API
    const url = `https://api.github.com/repos/${owner}/${repo}/contributors`;
    const response = await axios.get(url);

    // Process the response
    const data = response.data;
    // console.log(data)
    const contributors = data.map((item: any) => ({
      login: item.login,
      avatar: item.avatar_url,
      contributions: item.contributions,
      html_url: item.html_url
    }));
   
    res.status(200).json(contributors);
  } catch (error) {
    console.error('Request failed:', error);
    res.status(500).json({ error: 'An error occurred while processing the request.' });
  }
}