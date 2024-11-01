import { View, Button } from '@tarojs/components';
import './index.less';
import { Selector, AppPage, DemoBlock, Card } from '../../ux';

const Index = () => {
  return (
    <AppPage>
      <View className="m-demo">
        <DemoBlock title="单选">
          <Selector
            value={['0']}
            options={[
              {
                label: '选项一',
                value: '0',
              },
              {
                label: '选项二',
                value: '1',
                disabled: true,
              },
              {
                label: '选项三',
                value: '2',
              },
            ]}
          ></Selector>
        </DemoBlock>

        <DemoBlock title="多选">
          <Selector
            multiple
            value={['0', '1']}
            options={[
              {
                label: '选项一',
                value: '0',
              },
              {
                label: '选项二',
                value: '1',
                disabled: true,
              },
              {
                label: '选项三',
                value: '2',
              },
            ]}
          ></Selector>
        </DemoBlock>

        <DemoBlock title="不显示图标">
          <Selector
            value={['0']}
            options={[
              {
                label: '选项一',
                value: '0',
              },
              {
                label: '选项二',
                value: '1',
                disabled: true,
              },
              {
                label: '选项三',
                value: '2',
              },
            ]}
          ></Selector>
        </DemoBlock>
      </View>
    </AppPage>
  );
};
export default Index;
