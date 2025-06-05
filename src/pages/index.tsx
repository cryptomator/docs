import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import type { ReactNode } from 'react';

import styles from './index.module.css';

const Logo = require('@site/static/img/logo.svg').default;

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary text--center', styles.heroBanner)}>
      <div className="container">
        <Logo 
          className={styles.heroLogo}
          role="img"
          aria-label="Cryptomator Logo"
        />
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <Link
          className="button button--secondary button--lg"
          to="/desktop/setup">
          Get Started with Cryptomator 🚀
        </Link>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Official Cryptomator documentation. Learn how to secure your cloud data with step-by-step guides and advanced configuration tips for all platforms.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
