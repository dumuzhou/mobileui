import { View, Button } from '@tarojs/components';
import Taro from '@tarojs/taro';
import './index.less';
import { NavBar, AppPage, DemoBlock, Space } from '../../ux';

const Index = () => {
  return (
    <AppPage>
      <View className="m-demo">
        <DemoBlock title="基础用法" padding={0}>
          <NavBar
            onBack={() => {
              Taro.showToast({
                title: '点击了返回',
                icon: 'none',
                mask: true,
              });
            }}
          >
            标题
          </NavBar>
        </DemoBlock>

        <DemoBlock title="返回按钮显示文字" padding={0}>
          <NavBar
            back={'返回'}
            onBack={() => {
              Taro.showToast({
                title: '点击了返回',
                icon: 'none',
                mask: true,
              });
            }}
          >
            标题
          </NavBar>
        </DemoBlock>

        <DemoBlock title="返回按钮不显示图标" padding={0}>
          <NavBar
            backArrow={false}
            back="返回"
            onBack={() => {
              Taro.showToast({
                title: '点击了返回',
                icon: 'none',
                mask: true,
              });
            }}
          >
            标题
          </NavBar>
        </DemoBlock>
        <DemoBlock title="自定义返回图标" padding={0}>
          <NavBar
            back="返回"
            onBack={() => {
              Taro.showToast({
                title: '点击了返回',
                icon: 'none',
                mask: true,
              });
            }}
          >
            标题
          </NavBar>
        </DemoBlock>

        <DemoBlock title="自定义左侧区域" padding={0}>
          <NavBar
            left="关闭"
            back="返回"
            onBack={() => {
              Taro.showToast({
                title: '点击了返回',
                icon: 'none',
                mask: true,
              });
            }}
          >
            标题
          </NavBar>
        </DemoBlock>
        <DemoBlock title="自定义右侧区域" padding={0}>
          <NavBar
            onBack={() => {
              Taro.showToast({
                title: '点击了返回',
                icon: 'none',
                mask: true,
              });
            }}
            right={<Space gap={16}></Space>}
          >
            标题
          </NavBar>
        </DemoBlock>
        <DemoBlock title="自定义高度及边框" padding={0}>
          <NavBar
            style={{
              height: 36,
              borderWidth: 0,
              borderBottomWidth: 1,
              borderStyle: 'solid',
              borderColor: '#eee',
            }}
            onBack={() => {
              Taro.showToast({
                title: '点击了返回',
                icon: 'none',
                mask: true,
              });
            }}
          >
            标题
          </NavBar>
        </DemoBlock>
        <DemoBlock title="标题超长" padding={0}>
          <NavBar
            onBack={() => {
              Taro.showToast({
                title: '点击了返回',
                icon: 'none',
                mask: true,
              });
            }}
          >
            这是一条很长很长很长很长很长很长很长很长很长的标题
          </NavBar>
        </DemoBlock>

        <DemoBlock title="显示副标题" padding={0}>
          <NavBar
            back="返回"
            onBack={() => {
              Taro.showToast({
                title: '点击了返回',
                icon: 'none',
                mask: true,
              });
            }}
            subTitle="副标题"
          >
            标题
          </NavBar>
        </DemoBlock>
      </View>
    </AppPage>
  );
};
export default Index;
