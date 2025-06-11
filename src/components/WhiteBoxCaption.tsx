import React from 'react';

interface WhiteBoxCaptionProps {
  children: React.ReactNode;
}

export default function WhiteBoxCaption({ children }: WhiteBoxCaptionProps) {
  return (
    <p style={{
      color: 'var(--ifm-color-gray-900)',
      display: 'block',
      fontSize: 'var(--ifm-code-font-size)',
      marginBottom: '0',
      marginTop: 'var(--ifm-leading)'
    }}>
      {children}
    </p>
  );
}
