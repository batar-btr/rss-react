import { expect } from 'vitest';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store';
import App from '../App';

describe('App component', () => {
  it('renders without crashing', async () => {
    const { container } = render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );
    expect(container).toBeDefined();
  });
});
