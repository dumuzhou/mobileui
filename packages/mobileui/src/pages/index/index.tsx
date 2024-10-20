import { Component } from 'react';
import Taro from '@tarojs/taro';
import { View, Text, Image, Input } from '@tarojs/components';
import './index.scss';

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
      <View className="index">
        <Text>11{this.state.text}</Text>
      </View>
    );
  }
}
