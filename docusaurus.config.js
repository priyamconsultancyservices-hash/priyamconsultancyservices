// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Digital Transformation and Digital Marketing Agency in India',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/pcs-fav-icon.webp',

  future: {
    v4: true,
  },

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'facebook',
  projectName: 'docusaurus',

  onBrokenLinks: 'ignore',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  headTags: [
    { tagName: 'meta', attributes: { name: 'google-site-verification', content: 'IO1HxUgZHVz1o7825OKmXZQ_8thaMc5cf0rPfMeFApE' } },
    { tagName: 'meta', attributes: { name: 'msvalidate.01', content: '749C3853DFE8CA5697D84B7714BA8D5D' } },
    { tagName: 'script', attributes: {}, innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-W88V6Z4Q');` },
    { tagName: 'script', attributes: { async: 'true', src: 'https://www.googletagmanager.com/gtag/js?id=G-61Z55C6ZRT' } },
    { tagName: 'script', attributes: {}, innerHTML: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-61Z55C6ZRT');` },
    { tagName: 'script', attributes: { type: 'text/javascript' }, innerHTML: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","x051212jzw");` },
  ],
  themeConfig: {
    navbar: { hideOnScroll: false, items: [] },
  },
};

export default config;