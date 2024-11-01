import { View } from '@tarojs/components';
import './index.less';
import { Icon, AppPage, Space, DemoBlock } from '../../ux';

const Index = () => {
  return (
    <AppPage>
      <View className="m-demo">
        <DemoBlock>
          <Space>
            <Icon />
          </Space>
        </DemoBlock>
      </View>
    </AppPage>
  );
};
export default Index;
