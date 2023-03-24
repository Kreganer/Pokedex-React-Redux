import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { store } from './store/store';
import { Global, theme } from './style';

const container = document.getElementById('root') as Element;
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Global />
        <App />
      </Provider>
    </ThemeProvider>
  </BrowserRouter>
);
