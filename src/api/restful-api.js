const baseLink = 'https://api.restful-api.dev/objects';
const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export default async function api(url, options) {
  try {
    const response = await fetch(baseLink + (url ?? ''), {
      method: 'GET',
      headers,
      ...options,
    });

    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, received ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
}
