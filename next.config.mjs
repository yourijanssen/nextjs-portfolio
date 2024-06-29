/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
	output: 'export',
	basePath: isProd ? '/nextjs-portfolio' : '',
	assetPrefix: isProd ? '/nextjs-portfolio/' : '',
};
export default nextConfig;
