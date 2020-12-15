import React from 'react';
import CornerButton from './CornerButton';

export default {
  title: 'Buttons',
  component: CornerButton,
};

export const ButtomRight = () => (
  <CornerButton variant="ButtomRight">Bottom Left</CornerButton>
);

export const Brown = () => (
  <CornerButton variant="Brown">Bottom Left</CornerButton>
);

export const Secondary = () => (
  <CornerButton variant="secondary">Secondary</CornerButton>
);
