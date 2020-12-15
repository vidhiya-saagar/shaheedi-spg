import React from 'react';
import styles from './CornerButtonStyles.module.css';

const CornerButton = props => {
  const { variant = 'primary', children, ...rest } = props;
  console.log('rest', props);
  return (
    <button className={`${styles[variant]}`} {...rest}>
      {children}
    </button>
  );
};

export default CornerButton;
