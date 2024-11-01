import Taro, { useRouter } from '@tarojs/taro';
import { View, ScrollView, Text } from '@tarojs/components';
import Provider from '../provider';
import { NavBar } from '../index';
import './index.less';

const Index = (props: any) => {
  const router = useRouter();
  return (
    <Provider>
      <View className="m-app-page">
        <NavBar
          back="返回"
          onBack={() => {
            Taro.navigateBack();
          }}
        >
          {router.params.title || '返回'}{' '}
        </NavBar>
        <ScrollView className="m-app-page-body">
          {!!props.children && props.children}
        </ScrollView>
      </View>
    </Provider>
  );
};
export default Index;
