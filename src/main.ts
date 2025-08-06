import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { TUIComponents, TUIChatKit } from './TUIKit';
import {
  TUIStore,
  StoreName,
  TUITranslateService,
} from '@tencentcloud/chat-uikit-engine';
import TUINotification from './TUIKit/components/TUINotification/index';
import { locales } from './locales';
// ------ The following is the introduction of TUIRoom related dependencies. If you do not need to use TUIRoom, please delete the following code ------
// import { createPinia } from 'pinia';
// ----------------------------------------------------------------------------

const app = createApp(App);
app.use(router);
// ------ The following is the introduction of TUIRoom related dependencies. If you do not need to use TUIRoom, please delete the following code ------
// app.use(createPinia());
// ----------------------------------------------------------------------------
app.mount('#app');

const SDKAppID = 20026251; // Your SDKAppID
const secretKey = "e26d500f2a97713953c6904fdfd46a9266c0323994afa647557eb544a82992cd"; // Your secretKey

TUIChatKit.components(TUIComponents, app);
TUIChatKit.init();

TUITranslateService.provideLanguages(locales);
TUITranslateService.useI18n();

/**
 * Init TUINotification configuration.
 */
TUINotification.setNotificationConfiguration({
  showPreviews: true,
  allowNotifications: true,
  notificationTitle: 'Tencent Cloud Chat',
  notificationIcon: 'https://web.sdk.qcloud.com/im/demo/latest/faviconnew.png',
});

/**
 * Listen for new messages and use notification components.
 * This capability is only available in the web environment.
 */
TUIStore.watch(StoreName.CHAT, {
  newMessageList: (newMessageList: unknown) => {
    if (Array.isArray(newMessageList)) {
      newMessageList.forEach(message => TUINotification.notify(message));
    }
  },
});

export { SDKAppID, secretKey };
