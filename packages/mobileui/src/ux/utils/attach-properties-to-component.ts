// 将关联的子组件添加到组件属性上
export function attachPropertiesToComponent<C, P extends Record<string, any>>(
  component: C,
  properties: P
): C & P {
  const ret = component as any;
  for (const key in properties) {
    if (properties.hasOwnProperty(key)) {
      ret[key] = properties[key];
    }
  }
  return ret;
}
