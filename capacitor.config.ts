import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'AppUetsTorunaments',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"],
    },
    LocalNotifications: {
      smallIcon: "ic_stat_icon_config_sample",//Icono de la app solo para Android
      iconColor: "#488AFF",//Color de Icono
      sound: "beep.wav",//Sonido de la notificacion solo para Android
    },
  },
  
};

export default config;
