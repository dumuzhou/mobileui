import { View, Button } from '@tarojs/components';
import './index.less';
import { List, AppPage, DemoBlock, Space } from '../../ux';

const Index = () => {
  return (
    <AppPage>
      <View className="m-demo">
        <List header="基础用法">
          <List.Item>1</List.Item>
          <List.Item>2</List.Item>
          <List.Item>3</List.Item>
        </List>
        <List mode="card" header="卡片列表">
          <List.Item>1</List.Item>
          <List.Item>2</List.Item>
          <List.Item>3</List.Item>
        </List>
      </View>
    </AppPage>
  );
};
export default Index;
