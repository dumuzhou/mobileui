import { View } from '@tarojs/components';
import './index.less';
import { Button, AppPage, DemoBlock, Space } from '../../ux';

const Index = () => {
  return (
    <AppPage>
      <View className="m-demo">
        <DemoBlock title="填充模式">
          <Space wrap>
            <Button color="primary" fill="solid" onClick={() => {}}>
              Solid
            </Button>
            <Button color="primary" fill="outline">
              Outline
            </Button>

            <Button color="primary" fill="none">
              None
            </Button>
          </Space>
        </DemoBlock>
        <DemoBlock title="块级按钮">
          <Button color="primary">Block Button</Button>
        </DemoBlock>

        <DemoBlock title="按钮尺寸">
          <Space align="center">
            <Button color="primary" size="mini">
              Mini
            </Button>
            <Button color="primary" size="small">
              Small
            </Button>
            <Button color="primary">Middle</Button>
            <Button color="primary" size="large">
              Large
            </Button>
          </Space>
        </DemoBlock>
        <DemoBlock title="语义按钮">
          <Space wrap>
            <Button>Default</Button>
            <Button color="primary">Primary</Button>
            <Button color="success">success</Button>
            <Button color="danger">danger</Button>
            <Button color="warning">warning</Button>
          </Space>
        </DemoBlock>
        <DemoBlock title="自定义图标">
          <Space>
            <Button shape="default">搜索</Button>
          </Space>
        </DemoBlock>

        <DemoBlock title="形状">
          <Space wrap>
            <Button shape="default" color="primary">
              Default Button
            </Button>
            <Button shape="rounded" color="primary">
              Rounded Button
            </Button>
            <Button shape="rectangular" color="primary">
              Rectangular Button
            </Button>
          </Space>
        </DemoBlock>
        <DemoBlock title="加载状态">
          <Space wrap align="center">
            <Button shape="default" color="primary" loading>
              正在加载
            </Button>
            <Button shape="default" color="primary" loading></Button>
            <Button shape="default" color="primary" onClick={() => {}}>
              Auto Loading
            </Button>
            <Button
              shape="default"
              size="mini"
              color="primary"
              loading
            ></Button>

            <Button
              shape="default"
              size="small"
              color="primary"
              loading
            ></Button>

            <Button
              shape="default"
              size="large"
              color="primary"
              loading
            ></Button>
          </Space>
        </DemoBlock>

        <DemoBlock title="禁用状态">
          <Space>
            <Button disabled>Default</Button>
            <Button shape="default" color="primary" disabled>
              Default Button
            </Button>
          </Space>
        </DemoBlock>
      </View>
    </AppPage>
  );
};
export default Index;
