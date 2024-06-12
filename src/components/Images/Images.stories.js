import React from 'react';
import Image from './Images';

export default {
  title: 'Components/Image',
  component: Image,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    width: { control: 'text' },
    height: { control: 'text' },
    borderRadius: { control: 'text' },
  },
};

const Template = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Placeholder Image',
  width: '150px',
  height: '150px',
  borderRadius: '8px',
};

export const Rounded = Template.bind({});
Rounded.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Rounded Image',
  width: '150px',
  height: '150px',
  borderRadius: '50%',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  src: 'https://via.placeholder.com/600x400',
  alt: 'Full Width Image',
  width: '100%',
  height: 'auto',
  borderRadius: '0px',
};
