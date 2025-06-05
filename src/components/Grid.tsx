import React from 'react';
import { GridContext } from './GridContext';

interface GridProps {
  children: React.ReactNode;
  className?: string;
  columns?: number;
  columnsSmall?: number;
  columnsLarge?: number;
}

export default function Grid({ children, className, columns = 1, columnsSmall, columnsLarge }: GridProps) {
  const childArray = React.Children.toArray(children);
  const defaultColumns = columns || childArray.length;
  const smallColumns = columnsSmall ?? defaultColumns;
  const largeColumns = columnsLarge ?? defaultColumns;
  const gridId = React.useId();
  return (
    <p>
      <style>
        {`
          .grid-${gridId} {
            display: grid;
            grid-template-columns: repeat(${largeColumns}, 1fr);
            gap: var(--ifm-leading);
            align-items: start;
          }
          
          @media (max-width: 1634px) {
            .grid-${gridId} {
              grid-template-columns: repeat(${defaultColumns}, 1fr);
            }
          }
          
          @media (max-width: 996px) {
            .grid-${gridId} {
              grid-template-columns: repeat(${smallColumns}, 1fr);
            }
          }
        `}
      </style>
      <GridContext.Provider value={true}>
        <div className={`grid-${gridId} ${className || ''}`}>
          {children}
        </div>
      </GridContext.Provider>
    </p>
  );
}
