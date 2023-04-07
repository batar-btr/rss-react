import { rest } from 'msw';
import { APIBASE } from '../hooks/useSearch';
import { mockResults } from './mockData';

export const handlers = [
  rest.get(`${APIBASE}/search/photos`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        results: [...mockResults],
      })
    );
  }),
  rest.get(`${APIBASE}/photos/:id`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockResults[0]));
  }),
];
