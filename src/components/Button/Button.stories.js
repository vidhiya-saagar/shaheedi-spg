import React from 'react';
import Button from './Button';

export default {
  title: 'ButtonGangster',
  component: Button,
};

export const Primary = () => <Button variant="primary">Primary</Button>;
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const Small = () => <Button variant="small">Small</Button>;
export const Medium = () => <Button variant="medium">Medium</Button>;
export const Large = () => <Button variant="large">Large</Button>;
