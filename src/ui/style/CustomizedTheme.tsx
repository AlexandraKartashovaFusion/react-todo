import { ThemeProvider } from '@mui/material/styles';
import { FC, ReactNode } from 'react';
import { ThemeOptions, createTheme } from '@mui/material/styles';

export const theme: ThemeOptions = createTheme({});

export interface ITheme {
  colors: {},
  fonts: string[],
  fontSizes: {},
}

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