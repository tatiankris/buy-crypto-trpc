import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TopCurrencyButton from './TopCurrencyButton';

const meta: Meta<typeof TopCurrencyButton> = {
  title: 'App/TopCurrencyButton',
  component: TopCurrencyButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TopCurrencyButton>;

export const First: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <TopCurrencyButton onClick={action('clicked')} name={'Bitcoin'} priceUsd={'30188'} item={0} />
    </div>
  ),
};

export const Second: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <TopCurrencyButton onClick={action('clicked')} name={'Ethereum'} priceUsd={'1848'} item={1} />
    </div>
  ),
};

export const Third: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <TopCurrencyButton
        onClick={action('clicked')}
        name={'Tether'}
        priceUsd={'1.00234'}
        item={2}
      />
    </div>
  ),
};
