import ModalContainer from './ModalContainer';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof ModalContainer> = {
  title: 'App/ModalContainer',
  component: ModalContainer,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ModalContainer>;

export const FirstModal: Story = {
  render: () => (
    <ModalContainer nameText={'First Modal Name'} handleClose={action('clicked')}>
      <div>Modal Children</div>
      <div>Lorem ipsum dolor sit amet</div>
      <div>consectetur adipisicing elit</div>
      <div>Assumenda at eius error eveniet</div>
    </ModalContainer>
  ),
};

export const SecondModal: Story = {
  render: () => (
    <ModalContainer nameText={'Second Modal Name'} handleClose={action('clicked')}>
      <div> Second Modal Children</div>
      <input />
      <div>Add</div>
      <button>ADD</button>
    </ModalContainer>
  ),
};
