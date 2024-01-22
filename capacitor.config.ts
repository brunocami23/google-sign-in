import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.googleauth',
  appName: 'google-sign-in',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
