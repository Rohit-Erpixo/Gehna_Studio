import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ai.gehnastudio.app',
  appName: 'GehnaStudio AI',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
    cleartext: true,
  },
  android: {
    backgroundColor: '#FAF8F3',
    allowMixedContent: true,
  },
  plugins: {
    StatusBar: {
      backgroundColor: '#FAF8F3',
      style: 'DARK',
    },
    Camera: {
      permissions: ['camera', 'photos'],
    }
  }
};

export default config;
