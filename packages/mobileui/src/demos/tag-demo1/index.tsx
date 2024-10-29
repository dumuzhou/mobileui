import { View, Button } from '@tarojs/components';
import './index.less';
import { Skeleton, AppPage, DemoBlock, Space, Tag } from '../../ux';

const Index = () => {
  return (
    <AppPage>
      <View className="m-demo">
        <DemoBlock title="基础用法">
          <Space>
            <Tag>123</Tag>
          </Space>
        </DemoBlock>
        <DemoBlock title="线框标签">
          <Space>
            <Tag color="primary" fill="outline">
              Primary
            </Tag>
            <Tag color="success" fill="outline">
              success
            </Tag>
            <Tag color="danger" fill="outline">
              danger
            </Tag>
          </Space>
        </DemoBlock>

        <DemoBlock title="语义标签">
          <Space>
            <Tag color="default">Default</Tag>
            <Tag color="primary">测试</Tag>
            <Tag color="success">success</Tag>
            <Tag color="warning">warning</Tag>
            <Tag color="danger">danger</Tag>
          </Space>
        </DemoBlock>
        <DemoBlock title="圆角标签">
          <Space>
            <Tag round color="primary">
              kongxin
            </Tag>
          </Space>
        </DemoBlock>
      </View>
    </AppPage>
  );
};
export default Index;
