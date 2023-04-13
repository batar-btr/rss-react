import { rest } from 'msw';
import { APIBASE } from '../hooks/useSearch';
import { mockResults } from './mockData';

export const handlers = [
  rest.get(`${APIBASE}search/photos`, (req, res, ctx) => {
    const query = req.url.searchParams.get('query');
    return res(
      ctx.json([
        {
          results: [...mockResults],
          description: `Mock photo result for query: ${query}`,
        },
      ])
    );
  }),
  rest.get(`${APIBASE}/photos/:id`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockResults[0]));
  }),
];
