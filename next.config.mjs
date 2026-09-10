/** @type {import('next').NextConfig} */
const nextConfig = {
  // Emit a fully static site into ./out so GitHub Pages can serve it.
  output: "export",

  // This repo is a GitHub *user* site (bjornclind.github.io), so it is served
  // from the domain root. basePath/assetPrefix must stay empty -- setting them
  // to "/bjornclind.github.io" is what made every CSS/JS asset 404.
  basePath: "",

  // next/image's optimizer needs a server, which a static export does not have.
  images: { unoptimized: true },

  // Emit /about/index.html style paths, which Pages serves without redirects.
  trailingSlash: true,
};

export default nextConfig;
