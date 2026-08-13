import type { Meta, StoryObj } from '@storybook/angular-vite';
import { applicationConfig } from '@storybook/angular-vite';
import { provideRouter } from '@angular/router';
import { HeaderComponent } from './header-component';

const meta: Meta<HeaderComponent> = {
  title: 'Shared/Organisms/HeaderComponent',
  component: HeaderComponent,
  decorators: [applicationConfig({ providers: [provideRouter([])] })],
};

export default meta;
type Story = StoryObj<HeaderComponent>;

export const Default: Story = {};
