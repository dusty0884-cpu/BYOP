import type { VercelConfig } from '@vercel/config';

export const config: VercelConfig = {
  // 1. Build & Install Settings
  buildCommand: 'npm run build',
  installCommand: 'npm install',
  
  // 2. Output and Routing
  outputDirectory: '.next', // or 'dist', 'public', etc.
  trailingSlash: false,
  cleanUrls: true,

  // 3. Dynamic Routes & Redirects
  routes: [
    { src: '/api/(.*)', dest: '/api/index.js' },
    { handle: 'filesystem' },
    { src: '/(.*)', dest: '/index.html' },
  ],

  // 4. Serverless Function Settings
  functions: {
    'api/*.ts': {
      maxDuration: 10,
      runtime: 'nodejs18.x'
    }
  }
};
