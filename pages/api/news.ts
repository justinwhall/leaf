import { proxyRequest } from '@/services';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  let news;
  try {
    news = await proxyRequest(req.query.locale as string);
  } catch (error) {
    return res.status(500).json({ ERROR: 'NEWS_FETCH_ERROR' });
  }
  return res.status(200).json(news);
}
