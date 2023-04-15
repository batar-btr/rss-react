import { expect } from 'vitest';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store';
import App from '../App';

describe('App component', async () => {
  it('renders without crashing', async () => {
    const { container, getByText, getByLabelText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );
    const imgAmount = 10;
    expect(container).toBeDefined();
    expect(getByText(/Enter a keyword!/i)).toBeInTheDocument();
    expect(getByLabelText('rotating-lines-loading')).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getAllByRole('img')).toHaveLength(imgAmount);
      expect(container.getElementsByClassName('img-card-list')[0]).toBeInTheDocument();
    });
    const img = screen.getAllByRole('img');
    fireEvent.click(img[0]);
    await waitFor(async () => {
      expect(screen.getByText(/Resolution/i)).toBeInTheDocument();
    });
  });
});
