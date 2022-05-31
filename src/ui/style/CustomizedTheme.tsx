import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material/styles';
import { FC, ReactNode } from 'react';
import { customTheme } from './themes/customTheme';
export const mainMaterialTheme: ThemeOptions = {};
export const theme: ThemeOptions = createTheme(mainMaterialTheme, customTheme);

interface props {
  children: ReactNode;
};

const CustomizedTheme: FC<props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};

export default CustomizedTheme;