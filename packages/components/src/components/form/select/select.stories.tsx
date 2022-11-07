import { Meta, Story } from '@storybook/react';

import { AsyncSelect } from './examples/async';
import { CustomOptionSelect } from './examples/custom-option';
import { MultipleHandled } from './examples/multiple-handled';
import Select, { SelectProps } from './select';

export default {
  title: 'components/Form/Select',
  component: Select,
} as Meta;

const Template: Story<SelectProps> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'example-1',
  label: 'Label',
  defaultValue: { value: 'option-1', label: 'Option 1' },
  options: [
    { value: 'option-1', label: 'Option 1' },
    { value: 'option-2', label: 'Option 2', isDisabled: true },
    { value: 'option-3', label: 'Option 3' },
    { value: 'option-4', label: 'Option 4' },
  ],
};

export const Small = Template.bind({});
Small.args = {
  ...Default.args,
  id: 'example-2',
  size: 'small',
};

export { CustomOptionSelect, AsyncSelect, MultipleHandled };