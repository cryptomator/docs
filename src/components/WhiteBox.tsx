import React from 'react';
import { WhiteBoxContext } from './WhiteBoxContext';

interface WhiteBoxProps {
  children: React.ReactNode;
}

export default function WhiteBox({ children }: WhiteBoxProps) {
  return (
    <WhiteBoxContext.Provider value={true}>
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: 'var(--ifm-global-radius)',
        boxShadow: 'var(--ifm-global-shadow-lw',
        display: 'inline-block',
        marginBottom: 'var(--ifm-leading)',
        padding: 'var(--ifm-pre-padding)',
      }}>
        {children}
      </div>
    </WhiteBoxContext.Provider>
  );
}
