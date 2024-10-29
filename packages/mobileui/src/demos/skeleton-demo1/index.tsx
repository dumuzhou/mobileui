import { View, Button } from '@tarojs/components';
import './index.less';
import { Skeleton, AppPage, DemoBlock, Card } from '../../ux';

const Index = () => {
  return (
    <AppPage>
      <View className="m-demo">
        <DemoBlock title="基础用法">
          <Skeleton.Title />
          <Skeleton.Paragraph lineCount={4} />
        </DemoBlock>
      </View>
    </AppPage>
  );
};
export default Index;
