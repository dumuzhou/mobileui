// 使用
// const [elId, rnCallBack, size] = useSize([texts]);

// <View
// @ts-ignore
// id={elId}
// @ts-ignore
// onLayout={rnCallBack}
// >
import Taro from '@tarojs/taro';
import { useEffect, useState, useRef } from 'react';

export default function MyComponent(arr?: any) {
  const [elId] = useState(`el-size-${(Math.random() * 100000).toFixed(0)}`);
  const [size, setSize] = useState({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
  });
  const getSize = () => {
    console.log('环境');
    // @ts-ignore
    console.log(process.env.TARO_ENV);
    // @ts-ignore
    if (process.env.TARO_ENV !== 'rn') {
      Taro.createSelectorQuery()
        .select(`#${elId}`)
        .boundingClientRect((rect: any) => {
          if (rect) {
            setSize(rect);
            console.log('元素信息：', rect);
            console.log('元素宽度：', rect.width);
            console.log('元素高度：', rect.height);
          }
        })
        .exec();
    }
  };
  const rnCallBack = (res: any) => {
    console.log('rn元素信息：', res.nativeEvent);
    if (res.nativeEvent && res.nativeEvent.layout) {
      const tmp = res.nativeEvent.layout;
      tmp.left = tmp.x;
      tmp.top = tmp.y;
      setSize(tmp);
    }
  };

  useEffect(() => {
    getSize();
  }, arr);

  return [elId, rnCallBack, size];
}
