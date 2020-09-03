import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Editor from '../components/Editor';

export default {
  title: 'Editor',
  component: Editor,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<any> = (args) => <Editor {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Editor',
};
