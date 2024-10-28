import { useMemo, createContext } from 'react';

import defaultTheme, { ThemeProps } from './default';

// 默认主题
export const theme = defaultTheme;
// 共享属性
export const ThemeContext = createContext(theme);

export default function Index(props: any) {
  const { value, children } = props;
  const theme: ThemeProps = useMemo(
    () => ({
      ...theme,
      ...value,
    }),
    [value]
  );
  return (
    <ThemeContext.Provider value={theme}>
      {!!children && children}
    </ThemeContext.Provider>
  );
}
