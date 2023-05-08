import { ArgTypes } from '@storybook/blocks';
import cn from 'classnames';
import React from 'react';

import styles from './skeleton.module.scss';

export interface SkeletonProps {
  /**
   * PlaceholderBlocks content
   */
  children?: React.ReactNode | React.ReactNode[];
  /**
   * Additional custom class
   */
  className?: string;
  /**
   * Accessibility label for screen-readers
   */
  label?: string;
}

export const Skeleton = (props: SkeletonProps): JSX.Element => {
  const { children, className, label, ...rest } = props;
  const SkeletonBEM = cn(styles['skeleton'], className);

  return (
    <div
      data-name="skeleton"
      {...rest}
      className={SkeletonBEM}
      aria-label={label}
      aria-busy={true}
      aria-live="polite"
      role="alert"
    >
      {children}
    </div>
  );
};

export default Skeleton;
