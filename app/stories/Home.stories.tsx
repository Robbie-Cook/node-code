import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Provider } from 'react-redux';
import { History } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import Routes from '../Routes';
import { history, configuredStore } from '../store';
import Home from '../components/Home';

const store = configuredStore();

export default {
  title: 'Home',
  component: Home,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<any> = (args) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Home />
    </ConnectedRouter>
  </Provider>
);
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Home',
};
