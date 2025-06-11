import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import type { ReactNode } from 'react';

type FeatureItem = {
  title: string;
  description: ReactNode;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Cryptomator',
    link: '/desktop/setup',
    description: (
      <>
        Documentation for Cryptomator on Windows, macOS, and Linux. 
        Create vaults, manage encrypted files, and configure settings.
      </>
    ),
  },
  {
    title: 'Cryptomator for Android',
    link: '/android/setup',
    description: (
      <>
        Documentation for Cryptomator on Android devices. 
        Access your encrypted files on the go with our mobile application.
      </>
    ),
  },
  {
    title: 'Cryptomator for iOS',
    link: '/ios/setup',
    description: (
      <>
        Documentation for Cryptomator on iPhone and iPad. 
        Secure access to your encrypted files from your iOS device.
      </>
    ),
  },
  {
    title: 'Cryptomator Hub',
    link: '/hub/introduction',
    description: (
      <>
        Team and organization solutions with Cryptomator Hub. 
        Manage user access, deploy for your organization, and handle vault recovery.
      </>
    ),
  },
  {
    title: 'Security',
    link: '/security/security-target',
    description: (
      <>
        Deep dive into Cryptomator&apos;s security architecture, encryption methods, 
        and best practices for keeping your data safe.
      </>
    ),
  },
  {
    title: 'Misc',
    link: '/misc/contribute',
    description: (
      <>
        Additional resources and supplementary information. 
        Learn how to contribute to the project and find supported cloud services.
      </>
    ),
  },
];

function Feature({title, description, link}: FeatureItem) {
  return (
    <div className="card" style={{height: '100%'}}>
      <div className="card__header">
        <Heading as="h3">
          <Link to={link} className="text--no-decoration">
            {title}
          </Link>
        </Heading>
      </div>
      <div className="card__body">
        <p>{description}</p>
      </div>
      <div className="card__footer">
        <Link
          className="button button--secondary button--block"
          to={link}>
          Learn More
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className="container padding-vert--lg">
      <div className="row">
        {FeatureList.map((props, idx) => (
          <div key={idx} className="col col--4 margin-bottom--lg">
            <Feature {...props} />
          </div>
        ))}
      </div>
    </section>
  );
}
