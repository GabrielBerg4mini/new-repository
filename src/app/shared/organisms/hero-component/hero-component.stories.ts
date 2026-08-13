import type { Meta, StoryObj } from '@storybook/angular-vite';
import { applicationConfig } from '@storybook/angular-vite';
import { provideRouter } from '@angular/router';
import { HeroComponent } from './hero-component';

const meta: Meta<HeroComponent> = {
  title: 'Shared/Organisms/HeroComponent',
  component: HeroComponent,
  decorators: [applicationConfig({ providers: [provideRouter([])] })],
};

export default meta;
type Story = StoryObj<HeroComponent>;

export const Default: Story = {};
