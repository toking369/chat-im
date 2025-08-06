<template>
  <div id="app">
    <TUIKit :SDKAppID="0" userID="xxx" userSig="xxx" />
    <TUICallKit class="callkit-container" :allowedMinimized="true" :allowedFullScreen="false" />
  </div>
</template>
<script lang="ts" setup>
import { TUIKit } from './TUIKit';
import { TUICallKit } from '@tencentcloud/call-uikit-vue';

const SDKAppID = 20026251;
const userID = '20026251';
const userSig = 'eJyrVgrxCdYrSy1SslIy0jNQ0gHzM1NS80oy0zIhwgYGRmZGpoZQueKU7MSCgswUJSuYBEQ8taIgsyhVycrQ1NQUKGMAES3JzAWJmZuamJgbGxibQs3ITAca7G-m5BQUVpqR7BxpYuAfUhrmVFVpnhPhVBmjn1qR4ZVj5ORn7hZZGhgYlRdqq1QLAOIGMMA_';
</script>
<style lang="scss">
</style>