import ReactDOM from 'react-dom/client';
import App from './App';
import store from './store/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import CustomizedTheme from './ui/style/CustomizedTheme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <CustomizedTheme>
        <App />
      </CustomizedTheme>
    </BrowserRouter>
  </Provider>
);
