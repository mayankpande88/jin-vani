/** @type {import('next').NextConfig} */

// On GitHub Pages, project sites are served at /<repo-name>/.
// GitHub Actions provides GITHUB_REPOSITORY as "owner/repo".
// We derive basePath from the repo name unless the user explicitly sets it.
// For Cloudflare Pages / Vercel / Netlify (root domain), set NEXT_PUBLIC_BASE_PATH=""
// or leave GITHUB_ACTIONS unset.

const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const isUserSite = repo.endsWith('.github.io');
const explicitBasePath = process.env.NEXT_PUBLIC_BASE_PATH;

let basePath = '';
if (typeof explicitBasePath === 'string') {
  basePath = explicitBasePath;
} else if (process.env.GITHUB_ACTIONS && repo && !isUserSite) {
  basePath = '/' + repo;
}

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
