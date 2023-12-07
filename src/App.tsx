import { QueryClient, QueryClientProvider } from 'react-query';
import { GlobalStyle } from './styles/global';
import { Home } from './pages/Home';
import { CustomThemeProvider } from './contexts'

export function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <CustomThemeProvider>
          <Home />
        <GlobalStyle />
      </CustomThemeProvider>
    </QueryClientProvider>
  );
}
