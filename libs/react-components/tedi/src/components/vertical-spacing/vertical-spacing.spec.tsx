import { render } from '@testing-library/react';

import { VerticalSpacing } from './vertical-spacing';

import '@testing-library/jest-dom';

describe('VerticalSpacing component', () => {
  it('renders with default props', () => {
    const { container } = render(
      <VerticalSpacing>
        <p>Test content</p>
      </VerticalSpacing>
    );

    const element = container.querySelector('[data-name="vertical-spacing"]');
    expect(element).toBeInTheDocument();
    expect(element).toHaveStyle('--vertical-spacing-internal: 1em');
  });

  it('renders with custom element and size', () => {
    const { container } = render(
      <VerticalSpacing element="section" size={2}>
        <p>Test content</p>
      </VerticalSpacing>
    );

    const element = container.querySelector('section[data-name="vertical-spacing"]');
    expect(element).toBeInTheDocument();
    expect(element).toHaveStyle('--vertical-spacing-internal: 2em');
  });

  it('renders with custom class name', () => {
    const { container } = render(
      <VerticalSpacing className="custom-class">
        <p>Test content</p>
      </VerticalSpacing>
    );

    const element = container.querySelector('[data-name="vertical-spacing"]');
    expect(element).toHaveClass('custom-class');
  });

  it('renders with zero size and no margin-bottom', () => {
    const { container } = render(
      <VerticalSpacing size={0}>
        <p>Test content</p>
      </VerticalSpacing>
    );

    const element = container.querySelector('[data-name="vertical-spacing"]');
    expect(element).toHaveStyle('--vertical-spacing-internal: 0');
  });

  it('renders children content correctly', () => {
    const { getByText } = render(
      <VerticalSpacing>
        <p>Child element</p>
      </VerticalSpacing>
    );

    expect(getByText('Child element')).toBeInTheDocument();
  });
});