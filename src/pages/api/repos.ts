// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function searchReposHandler(req: NextApiRequest, res: NextApiResponse) {
  const language = 'javascript'
  try {
    // Send GET request to GitHub API
    const url = `https://api.github.com/search/repositories?q=queer OR LGBTQ OR LGBT+in:readme&language=${language}`;
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


// import { NextApiRequest, NextApiResponse } from 'next';
// import axios from 'axios';

// export default async function searchProfilesHandler(req: NextApiRequest, res: NextApiResponse) {

//   let allUsers:string[] = []; // Array to store all profiles
//   let counter = 0; // Counter for the number of profiles found

//   try {
//     // Set your GitHub access token here
//     const accessToken = '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';

//     // Send initial GET request to GitHub API with authentication
//     let url = `https://api.github.com/search/users?q=queer OR LGBTQ OR LGBT+in:readme&sort=random`;
//     let response = await axios.get(url, {
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//       },
//     });

//     // Process the initial response
//     let data = response.data;
//     let profiles = data.items.map((item: any) => ({
//       login: item.login,
//       html_url: item.html_url,
//     }));
//     console.log(profiles.length)
//     allUsers = allUsers.concat(profiles);
//     counter += profiles.length;

//     // Pagination logic
//     while (response.headers.link && response.headers.link.includes('rel="next"') && counter < 100) {
//       const linkHeader = response.headers.link;
//       const nextPageUrl = extractNextPageUrl(linkHeader);

//       if (nextPageUrl) {
//         response = await axios.get(nextPageUrl, {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//           },
//         });
//         data = response.data;
//         profiles = data.items.map((item: any) => ({
//           login: item.login,
//           html_url: item.html_url,
//         }));
//         allUsers = allUsers.concat(profiles);
//         counter += profiles.length;
//       } else {
//         break;
//       }
//     }

//     // Trim the results if more than 100 profiles were found
//     if (allUsers.length > 100) {
//       allUsers = allUsers.slice(0, 100);
//     }

//     res.status(200).json(allUsers);
//   } catch (error) {
//     console.error('Request failed:', error);
//     res.status(500).json({ error: 'An error occurred while processing the request.' });
//   }
// }

// // Helper function to extract the URL for the next page from the Link header
// function extractNextPageUrl(linkHeader: string): string | null {
//   const links = linkHeader.split(', ');
//   const nextPageLink = links.find(link => link.includes('rel="next"'));
//   if (nextPageLink) {
//     const nextPageUrl = nextPageLink.match(/<(.+)>/);
//     return nextPageUrl ? nextPageUrl[1] : null;
//   }
//   return null;
// }