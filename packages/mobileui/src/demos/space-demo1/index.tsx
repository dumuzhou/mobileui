import Taro from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import './index.less';
import { AppPage, DemoBlock, Space } from '../../ux';

const Index = () => {
  return (
    <AppPage>
      <View className="m-demo">
        <DemoBlock title="水平方向的间距">
          <Space>
            <Button>按钮1</Button>
            <Button>按钮2</Button>
            <Button>按钮3</Button>
          </Space>
        </DemoBlock>
        <DemoBlock title="换行">
          <Space wrap>
            <Button>按钮1</Button>
            <Button>按钮2</Button>
            <Button>按钮3</Button>
            <Button>按钮4</Button>
            <Button>按钮5</Button>
            <Button>按钮6</Button>
            <Button>按钮7</Button>
            <Button>按钮8</Button>
            <Button>按钮9</Button>
            <Button>按钮10</Button>
            <Button>按钮11</Button>
          </Space>
        </DemoBlock>
        <DemoBlock title="垂直方向的间距">
          <Space direction="vertical">
            <Button>按钮1</Button>
            <Button>按钮2</Button>
            <Button>按钮3</Button>
          </Space>
        </DemoBlock>
        <DemoBlock title="自定义间距大小">
          <Space gap={24}>
            <Button>按钮1</Button>
            <Button>按钮2</Button>
            <Button>按钮3</Button>
          </Space>
        </DemoBlock>

        <DemoBlock title="主轴对齐方式">
          <Space justify="center">
            <Button>按钮1</Button>
            <View>
              <Button>按钮2</Button>
              <Button>按钮3</Button>
            </View>
          </Space>
        </DemoBlock>
        <DemoBlock title="交叉轴对齐方式">
          <Space align="end">
            <Button>按钮1</Button>
            <View>
              <Button>按钮2</Button>
              <Button>按钮3</Button>
            </View>
          </Space>
        </DemoBlock>
      </View>
    </AppPage>
  );
};
export default Index;
