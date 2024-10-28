import { View, Text } from '@tarojs/components';
import { useState, useEffect } from 'react';
//import { useLoad } from '@tarojs/taro';
import { theme, ThemeContext } from '../theme';
//import { locale, LocaleContext } from '../local-provider';
//import { bodyRef, renderToBody } from '../utils/renderToBody';
const Index = (props: any) => {
  const themeData = { ...theme, ...(props.theme ? props.theme : {}) };
  //const localeData = { ...locale, ...props.locale };
  //const [el, setEl] = useState<any>();
  useEffect(() => {
    //bodyRef.current = setEl;
  }, []);
  useEffect(() => {
    setTimeout(() => {
      return;
    }, 3000);
  }, []);
  return (
    <ThemeContext.Provider value={themeData}>
      <View style={{ flex: 1 }}>
        {
          // !!el && el
        }
        {props.children}
      </View>
    </ThemeContext.Provider>
  );
};
export default Index;
