import { View } from '@tarojs/components';
import './index.less';
import { Badge, AppPage, DemoBlock, Space, Button } from '../../ux';

const Index = () => {
  return (
    <AppPage>
      <View className="m-demo">
        <DemoBlock title="基础用法">
          <Space direction="vertical">
            <Badge content="99+">
              <Button color="primary" fill="solid" onClick={() => {}}>
                Solid
              </Button>
            </Badge>
            <Badge content="新">
              <Button color="primary" fill="solid" onClick={() => {}}>
                Solid
              </Button>
            </Badge>

            <Badge content={Badge.dot}>
              <Button color="primary" fill="solid" onClick={() => {}}>
                Solid
              </Button>
            </Badge>
          </Space>
        </DemoBlock>

        <DemoBlock title="独立使用">
          <Space direction="vertical">
            <Badge content="99+"></Badge>
            <Badge content="新消息来了!"></Badge>
          </Space>
        </DemoBlock>
      </View>
    </AppPage>
  );
};
export default Index;
