import { Meta } from '@storybook/angular';
import { FormlibComponent } from './formlib.component';

export default {
  title: 'FormlibComponent',
  component: FormlibComponent,
} as Meta<FormlibComponent>;

export const Primary = {
  render: (args: FormlibComponent) => ({
    props: args,
  }),
  args: {},
};
