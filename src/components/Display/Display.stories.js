import React from 'react';
import Display from './Display';

export default  {
  title: 'Components/Display',
  component: Display,
};

export const Small = () => <Display size="small" text="Small Display" />;
export const Medium = () => <Display size="medium" text="Medium Display" />;
export const Large = () => <Display size="large" text="Large Display" />;
