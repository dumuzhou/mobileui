/*
 * @Author: iChengbo
 * @Date: 2021-07-19 14:37:08
 * @LastEditors: iChengbo
 * @LastEditTime: 2021-08-03 18:57:38
 * @FilePath: /taro-react-native/src/app.config.ts
 */

export default {
  // entryPagePath: 'pages/home/index',
  pages: ['pages/index/index'],
  subpackages: [],
  window: {
    backgroundColor: '#efefef',
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    color: '#333333',
    selectedColor: '#6190E8', // 主题色
    list: [],
  },
  rn: {
    useNativeStack: true, // 使用 @react-navigation/native-stack
  },
};