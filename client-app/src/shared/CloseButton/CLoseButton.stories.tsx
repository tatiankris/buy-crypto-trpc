import type { Meta, StoryObj } from '@storybook/react';
import CLoseButton from './CLoseButton';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof CLoseButton> = {
  title: 'App/CloseButton',
  component: CLoseButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CLoseButton>;

export const Primary: Story = {
  render: () => (
    <div style={{ position: 'relative', width: '30px', height: '60px' }}>
      <CLoseButton handleClose={action('clicked')} />
    </div>
  ),
};
