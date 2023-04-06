/* eslint-disable import/prefer-default-export */
import { API_URL } from '@/constants';

/**
 * Given a locale, fetches news from newapi.org for the given locale
 * @param locale the locale to fetch news for
 * @returns the news response object from newapi.org
 */
export async function proxyRequest(locale: string): Promise<NewsResponse> {
  let data;
  try {
    const response = await fetch(`${API_URL}/top-headlines?country=${locale}&apiKey=${process.env.API_KEY}`, {
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
 * Given a locale, fetches news from the next news api route for the given locale
 * @param locale the locale to fetch news for
 * @returns the news response object from newapi.org
 */
export async function fetchNews(locale: string): Promise<NewsResponse> {
  let data;
  try {
    const response = await fetch(`/api/news?locale=${locale}`, {
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
