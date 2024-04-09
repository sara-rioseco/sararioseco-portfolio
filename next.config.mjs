/** @type {import('next').NextConfig} */

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/sass')],
    prependData: `@import "main.sass"`,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'srioseco-pictures.s3.us-east-2.amazonaws.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'srioseco-portfolio.s3.us-east-2.amazonaws.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/sara-rioseco/**',
      },
    ],
  },
};

export default nextConfig;

