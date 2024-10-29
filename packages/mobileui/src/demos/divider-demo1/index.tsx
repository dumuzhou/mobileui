import { View, Button } from '@tarojs/components';
import './index.less';
import { Divider, AppPage, DemoBlock, Space } from '../../ux';

const Index = () => {
  return (
    <AppPage>
      <View className="m-demo">
        <DemoBlock title="基础分割线">
          <Divider></Divider>
        </DemoBlock>
        <DemoBlock title="带内容的分割线">
          <Divider>默认内容在中间</Divider>
          <Divider contentPosition="left">左侧内容</Divider>
          <Divider contentPosition="right">右侧内容</Divider>
        </DemoBlock>
        <DemoBlock title="自定义样式">
          <Divider
            style={{
              color: '#1677ff',
              borderColor: '#1677ff',
              borderStyle: 'dashed',
            }}
          >
            自定义样式
          </Divider>
        </DemoBlock>
        <DemoBlock title="竖向分割线">
          <Space align="center">
            <Button size="mini">按钮</Button>
            <Divider direction="vertical"></Divider>
            <Button size="mini">按钮</Button>
          </Space>
        </DemoBlock>
      </View>
    </AppPage>
  );
};
export default Index;
