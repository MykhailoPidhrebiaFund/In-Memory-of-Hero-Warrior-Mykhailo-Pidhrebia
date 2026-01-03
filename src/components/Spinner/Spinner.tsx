import type React from 'react';
import './Spinner.scss';

type Props = {
  size: number;
};

export const Spinner: React.FC<Props> = ({ size }) => {
  const calculatedSize = size + 'px';

  return <div className="spinner" style={{ width: calculatedSize, height: calculatedSize }}></div>;
};
