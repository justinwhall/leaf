/* eslint-disable import/prefer-default-export */
import { API_URL } from '@/constants';

/**
 * Given a uri, fetches news from newapi.org for the given locale
 * @param uri the url to fetch news for
 * @returns the news response object from newapi.org
 */
export async function proxyRequest(uri: string): Promise<NewsResponse> {
  console.log(`${API_URL}${uri}&apiKey=${process.env.API_KEY}`);
  let data;
  try {
    const response = await fetch(`${API_URL}${uri}&apiKey=${process.env.API_KEY}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    data = await response.json();
  } catch (error) {
    // log error
  }
  return data;
}

/**
 * Given a uri, fetches news from the NEXTJS news api route
 * @param uri the uri to fetch news for
 * @returns the news response object from newsapi.org
 */
export async function fetchNews(uri: string): Promise<NewsResponse> {
  let data;
  try {
    const response = await fetch(uri, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    data = await response.json();
  } catch (error) {
    // log error
  }
  return data;
}
