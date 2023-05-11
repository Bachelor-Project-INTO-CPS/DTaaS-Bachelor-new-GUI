import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme, Theme } from '@mui/material/styles';
import * as React from 'react';
import { Provider } from 'react-redux';
import { setupStore } from 'store/Redux/store';

const mdTheme: Theme = createTheme({
  palette: {
    mode: 'light',
  },
});

export function AppProvider({ children }: { children: React.ReactNode }) {
  const store = setupStore();

  return (
    <Provider store={store}>
      <RelayEnvironmentProvider environment={RelayEnvironment}>
        <ThemeProvider theme={mdTheme}>
          <AuthProvider>
            <React.Suspense fallback={<div>Loading...</div>}>
              <CssBaseline />
              {children}
            </React.Suspense>
          </AuthProvider>
        </ThemeProvider>
      </RelayEnvironmentProvider>
    </Provider>
  );
}

export default AppProvider;
