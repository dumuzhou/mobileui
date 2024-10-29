import { View, Button } from '@tarojs/components';
import './index.less';
import { Steps, AppPage, DemoBlock, Card } from '../../ux';

const Index = () => {
  const { Step } = Steps;

  return (
    <AppPage>
      <View className="m-demo">
        <DemoBlock title="横向步骤条">
          <Steps current={1}>
            <Step key="1" title="标题1" description="描述" />
            <Step key="2" title="标题2" description="描述" />
            <Step key="3" title="标题3" description="描述" />
          </Steps>
        </DemoBlock>
        <DemoBlock title="横向步骤条失败">
          <Steps current={2}>
            <Step key="1" title="第一步" />
            <Step key="2" title="第二步" />
            <Step key="3" title="第三步" status="error" />
            <Step key="4" title="第四步" />
          </Steps>
        </DemoBlock>
        <DemoBlock title="纵向步骤条">
          <Steps direction="vertical">
            <Step key="1" title="填写机构信息" />
            <Step key="2" title="签约机构" />
            <Step key="3" title="关联服务区" />
          </Steps>
        </DemoBlock>

        <DemoBlock title="纵向步骤条失败">
          <Steps direction="vertical">
            <Step
              title="填写机构信息"
              status="finish"
              key="1"
              description="完成时间：2020-12-01 12:30"
            />
            <Step
              title="签约机构"
              key="2"
              status="finish"
              description="完成时间：2020-12-01 12:30"
            />
            <Step
              title="关联服务区"
              key="3"
              status="finish"
              description="完成时间：2020-12-01 12:30"
            />
            <Step title="审批失败" key="4" status="error" />
          </Steps>
        </DemoBlock>
      </View>
    </AppPage>
  );
};
export default Index;
