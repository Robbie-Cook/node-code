import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Interface from '../components/Interface';

export default {
  title: 'Interface',
  component: Interface,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<any> = (args) => <Interface {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Interface',
};
