import { FC, PropsWithChildren } from 'react';

export const DarkLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      style={{
        border: '1px solid purple',
        borderRadius: '5px',
        padding: '10px',
      }}
    >
      <h3>Dark Layout</h3>
      <div>{children}</div>
    </div>
  );
};
