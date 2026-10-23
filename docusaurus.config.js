// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Priyam Consultancy Services | Digital Marketing,HR & Web Dev',
  tagline: 'Priyam Consultancy Services | Digital Marketing,HR & Web Dev',
  favicon: 'img/fav-icon.png',

  future: {
    v4: true,
  },

  url: 'https://www.priyamconsultancy.com',
  baseUrl: '/',

  organizationName: 'priyamconsultancy',
  projectName: 'website',

  onBrokenLinks: 'ignore',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: false,
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: false, // Docusaurus sitemap generation disable, static/sitemap.xml mattum serve aagum
      }),
    ],
  ],

  headTags: [
    { tagName: 'meta', attributes: { name: 'google-site-verification', content: 'IO1HxUgZHVz1o7825OKmXZQ_8thaMc5cf0rPfMeFApE' } },
    { tagName: 'meta', attributes: { name: 'msvalidate.01', content: '749C3853DFE8CA5697D84B7714BA8D5D' } },

    // Google Tag Manager
    { tagName: 'script', attributes: {}, innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-W88V6Z4Q');` },

    // Google Analytics (GA4)
    { tagName: 'script', attributes: { async: 'true', src: 'https://www.googletagmanager.com/gtag/js?id=G-61Z55C6ZRT' } },
    { tagName: 'script', attributes: {}, innerHTML: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-61Z55C6ZRT');` },

    // Google Ads (AW-17944370796)
    { tagName: 'script', attributes: { async: 'true', src: 'https://www.googletagmanager.com/gtag/js?id=AW-17944370796' } },
    { tagName: 'script', attributes: {}, innerHTML: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','AW-17944370796');` },

    // Microsoft Clarity
    { tagName: 'script', attributes: { type: 'text/javascript' }, innerHTML: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","x051212jzw");` },

        // Leadfeeder (Dealfront) tracker
    {
      tagName: 'script',
      attributes: {},
      innerHTML: `(function(ss,ex){window.ldfdr=window.ldfdr||function(){(ldfdr._q=ldfdr._q||[]).push([].slice.call(arguments));};(function(d,s){var fs=d.getElementsByTagName(s)[0];function ce(src){var cs=d.createElement(s);cs.src=src;cs.async=1;fs.parentNode.insertBefore(cs,fs);}ce('https://sc.lfeeder.com/lftracker_v1_'+ss+(ex?'_'+ex:'')+'.js');})(document,'script');})('JMvZ8gvBAAEa2pOd');`,
    },
    
    // OpenAI Pixel
    {
      tagName: 'script',
      attributes: {},
      innerHTML: `!function(w,d,s,u){if(w.oaiq)return;var q=function(){q.q.push(arguments)};q.q=[];w.oaiq=q;var j=d.createElement(s);j.async=1;j.src=u;var f=d.getElementsByTagName(s)[0];f.parentNode.insertBefore(j,f)}(window,document,"script","https://bzrcdn.openai.com/sdk/oaiq.min.js");oaiq("init",{pixelId:"XMtNyPgxjF2CW7VTrDdxFn",debug:true});`,
    },

    // OpenAI Pixel - lead_created (fires on any form submit)
    {
      tagName: 'script',
      attributes: {},
      innerHTML: `document.addEventListener('submit',function(e){if(e.target&&e.target.tagName==='FORM'&&window.oaiq){oaiq("measure","lead_created",{type:"customer_action"});}},true);`,
    },

    // Facebook Pixel
    {
      tagName: 'script', attributes: {}, innerHTML: `!function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '1262483772747763');
      fbq('track', 'PageView');` },
    { tagName: 'noscript', attributes: {}, innerHTML: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1262483772747763&ev=PageView&noscript=1" />` },
  ],

  themeConfig: {
    navbar: { hideOnScroll: false, items: [] },
  },
};

export default config;