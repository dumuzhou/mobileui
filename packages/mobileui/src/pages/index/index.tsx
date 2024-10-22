import { Component } from 'react';
import Taro from '@tarojs/taro';
import { View, Text, Image, Input } from '@tarojs/components';
import './index.scss';
import menu from './menu';

export default class Index extends Component<any, any> {
  linkingListener: any;

  constructor(props: any) {
    super(props);
    this.state = {
      text: '哈哈哈',
    };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <View className="m-page">
        {menu.map((item, index) => {
          return (
            <View className="m-menu" key={index}>
              <Text>{item.title}</Text>
              {item.children.map((ite, ind) => {
                return (
                  <View
                    className="m-item"
                    key={ind}
                    onClick={() => {
                      Taro.navigateTo({
                        url: ite.path,
                      });
                    }}
                  >
                    <Text>{ite.title}</Text>
                  </View>
                );
              })}
            </View>
          );
        })}
      </View>
    );
  }
}
