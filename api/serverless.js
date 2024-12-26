/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
export function GET(request) {
  const key = process.env.API_KEY || 'no key';
  return new Response(key);
}
