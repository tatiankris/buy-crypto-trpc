import type { Meta, StoryObj } from '@storybook/react';
import PageButton from './PageButton';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof PageButton> = {
  title: 'App/PageButton',
  component: PageButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PageButton>;

export const Primary: Story = {
  render: () => <PageButton onClick={action('clicked')}>1</PageButton>,
};

export const Active: Story = {
  render: () => (
    <PageButton active={true} onClick={action('clicked')}>
      1
    </PageButton>
  ),
};

export const Disabled: Story = {
  render: () => (
    <PageButton disabled={true} onClick={action('clicked')}>
      1
    </PageButton>
  ),
};
