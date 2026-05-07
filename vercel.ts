
import { type VercelConfig } from '@vercel/config/v1';

// Example: Programmatic Config
export const config: VercelConfig = {
  // Use Vercel to build your app
  buildCommand: 'npm run build',
  
  // Custom headers
  headers: [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
      ],
    },
  ],

  // Rewrites for API or Single Page Apps
  rewrites: [
    { source: '/api/:match*', destination: '/api/:match*' },
    { source: '/(.*)', destination: '/index.html' },
  ],
};
