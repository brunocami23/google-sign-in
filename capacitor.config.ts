import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.magneticash',
  appName: 'google-sign-in',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
