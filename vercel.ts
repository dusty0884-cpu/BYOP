// This file configures the deployment settings and environment 
// integration for the SockiiisBack logistics tool on the Vercel platform.

export const config = {
  runtime: 'edge',
};

export default async function handler(req: Request) {
  return new Response(JSON.stringify({ status: 'Vercel integration active' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
