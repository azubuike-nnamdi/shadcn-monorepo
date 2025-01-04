import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../**/*.mdx', '../**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-onboarding', '@storybook/addon-essentials', '@chromatic-com/storybook', '@storybook/addon-interactions'],
  staticDirs: [{ from: '../assets/fonts/mtn-sans', to: '/static/media' }],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
};
export default config;
