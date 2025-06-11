import React from 'react';
import Grid from './Grid';

interface MobileGridProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * A specialized Grid component optimized for mobile screenshots.
 * Uses columns={3} columnsSmall={2} columnsLarge={4} configuration
 * that's commonly used throughout the mobile documentation.
 */
export default function MobileGrid({ children, className }: MobileGridProps) {
  return (
    <Grid columns={3} columnsSmall={2} columnsLarge={4} className={className}>
      {children}
    </Grid>
  );
}
