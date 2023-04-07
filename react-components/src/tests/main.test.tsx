import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import App from '../App';

describe('App', () => {
  let container: HTMLDivElement | null = null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    if (container) {
      document.body.removeChild(container);
      container = null;
    }
  });

  it('renders without crashing', () => {
    act(() => {
      createRoot(container as Element).render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );
    });
    expect(container?.querySelector('h1')?.textContent).toBe('MAIN PAGE');
  });
});
