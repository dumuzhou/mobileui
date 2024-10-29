import { View, Button, Text } from '@tarojs/components';
import './index.less';
import { Grid, AppPage, DemoBlock, Space } from '../../ux';

const Index = () => {
  const style = {
    borderWidth: 1,
    borderColor: '#ccc',
    borderStyle: 'solid',
    backgroundColor: '#f4f5f6',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <AppPage>
      <View className="m-demo">
        <DemoBlock title="基础用法">
          <Grid gap={8} columns={3} square={false}>
            <Grid.Item>
              <View style={style}>
                <Text>A</Text>
              </View>
            </Grid.Item>

            <Grid.Item>
              <View style={style}>
                <Text>B</Text>
              </View>
            </Grid.Item>
            <Grid.Item>
              <View style={style}>
                <Text>C</Text>
              </View>
            </Grid.Item>
            <Grid.Item>
              <View style={style}>
                <Text>D</Text>
              </View>
            </Grid.Item>
            <Grid.Item>
              <View style={style}>
                <Text>E</Text>
              </View>
            </Grid.Item>
          </Grid>
        </DemoBlock>

        <DemoBlock title="控制格子的宽度">
          <Grid gap={8} columns={3} square={false}>
            <Grid.Item>
              <View style={style}>
                <Text>A</Text>
              </View>
            </Grid.Item>

            <Grid.Item span={2}>
              <View style={style}>
                <Text>B</Text>
              </View>
            </Grid.Item>
            <Grid.Item span={2}>
              <View style={style}>
                <Text>C</Text>
              </View>
            </Grid.Item>
            <Grid.Item>
              <View style={style}>
                <Text>D</Text>
              </View>
            </Grid.Item>
            <Grid.Item span={3}>
              <View style={style}>
                <Text>E</Text>
              </View>
            </Grid.Item>
          </Grid>
        </DemoBlock>
      </View>
    </AppPage>
  );
};
export default Index;
