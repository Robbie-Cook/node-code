import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Pane from '../components/Pane';

export default {
  title: 'Pane',
  component: Pane,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<any> = (args) => <Pane {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Pane',
};
