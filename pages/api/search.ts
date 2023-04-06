import { proxyRequest } from '@/services';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  let news;
  try {
    news = await proxyRequest(`/everything?language=${req.query.language as string}&q=${req.query.q as string}`);
  } catch (error) {
    return res.status(500).json({ ERROR: 'SEARCH_NEWS_ERROR' });
  }
  return res.status(200).json(news);
}
