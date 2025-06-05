import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Cryptomator Documentation',
  tagline: 'Protect your privacy in any cloud',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: 'https://docs.cryptomator.org',
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'cryptomator',
  projectName: 'docs',
  trailingSlash: true,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/cryptomator/docs/tree/develop/',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  clientModules: [
    require.resolve('./src/clientModules/utmRemover.ts'),
  ],

  headTags: [
    {
      tagName: 'script',
      attributes: {
        src: 'https://umami.skymatic.de/script.js',
        'data-website-id': process.env.NODE_ENV === 'development' 
          ? 'cdd42f46-583d-4463-9ab2-8adcfe989c21' // Local development
          : '2df416f9-7a9c-4e58-9a45-7106f7e0a139', // Production
        integrity: 'sha384-kbIYaQlPE+duTh4aldOzluMjki9u/A/GSd+W7YzI7MOTW+hxRpQaijHfeMPiM1RX',
        crossorigin: 'anonymous',
        defer: 'defer',
      },
    },
  ],

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            from: '/hub/setup/requirements',
            to: '/hub/deployment/#hardware-requirements',
          },
          {
            from: '/hub/setup/billing',
            to: '/hub/admin/#license',
          },
          {
            from: '/hub/setup/keycloak-administration',
            to: '/hub/user-group-management',
          },
          {
            from: '/hub/setup',
            to: '/hub/deployment',
          },
          {
            from: '/hub/access-vault/unlocking-a-vault/4.-vault-unlocked',
            to: '/hub/access-vault/#vault-unlocked',
          },
          {
            from: '/hub/access-vault/unlocking-a-vault/3.-add-device',
            to: '/hub/access-vault/#register-device',
          },
          {
            from: '/hub/access-vault/unlocking-a-vault/2.-authenticate',
            to: '/hub/access-vault/#authenticate',
          },
          {
            from: '/hub/access-vault/unlocking-a-vault/1.-click-unlock',
            to: '/hub/access-vault/#click-unlock',
          },
          {
            from: '/hub/license',
            to: '/hub/admin/#license',
          },
          {
            from: '/desktop/vault-mounting',
            to: '/desktop/volume-type',
          },
          {
            from: '/help/manual-migration',
            to: '/misc/manual-migration',
          },
        ],
      },
    ],
  ],

  themeConfig: {
    image: 'img/og-image.png',
    navbar: {
      title: 'CRYPTOMATOR',
      logo: {
        alt: 'Cryptomator Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          label: 'Desktop',
          to: 'desktop/setup',
          activeBasePath: 'desktop/',
          position: 'left',
        },
        {
          label: 'Android',
          to: 'android/setup',
          activeBasePath: 'android/',
          position: 'left',
        },
        {
          label: 'iOS',
          to: 'ios/setup',
          activeBasePath: 'ios/',
          position: 'left',
        },
        {
          label: 'Hub',
          to: 'hub/introduction',
          activeBasePath: 'hub/',
          position: 'left',
        },
        {
          label: 'Security',
          to: 'security/security-target',
          activeBasePath: 'security/',
          position: 'left',
        },
        {
          label: 'Misc',
          to: 'misc/contribute',
          activeBasePath: 'misc/',
          position: 'left',
        },
        {
          href: 'https://github.com/cryptomator',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Cryptomator',
          items: [
            {
              label: 'Website',
              href: 'https://cryptomator.org/',
            },
            {
              label: 'Community',
              href: 'https://community.cryptomator.org/',
            },
          ],
        },
        {
          title: 'Contribute',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/cryptomator',
            },
            {
              label: 'Donate',
              href: 'https://cryptomator.org/donate/',
            },
            {
              label: 'Translate',
              href: 'https://translate.cryptomator.org/',
            },
          ],
        },
        {
          title: 'Follow Us',
          items: [
            {
              label: 'Blog',
              href: 'https://cryptomator.org/blog/',
            },
            {
              label: 'Mastodon',
              href: 'https://mastodon.online/@cryptomator',
            },
            {
              label: 'LinkedIn',
              href: 'https://linkedin.com/company/skymatic',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Impressum',
              href: 'https://cryptomator.org/impressum/',
            },
            {
              label: 'Privacy Policy',
              href: 'https://cryptomator.org/privacy/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} cryptomator.org. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'diff', 'ini'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
