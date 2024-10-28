import Taro from '@tarojs/taro';
import { View, ScrollView, Text } from '@tarojs/components';
import Provider from '../provider';
import './index.less';

const Index = (props: any) => {
  return (
    <Provider>
      <View className="m-app-page">
        <View
          className="m-app-page-header"
          onClick={() => {
            Taro.navigateBack();
          }}
        >
          <Text>返回</Text>
        </View>
        <ScrollView className="m-app-page-body">
          {!!props.children && props.children}
        </ScrollView>
      </View>
    </Provider>
  );
};
export default Index;
