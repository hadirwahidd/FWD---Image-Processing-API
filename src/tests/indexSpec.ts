import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Test endpoint responses', () => {
  it('Tests main route (http://localhost:3000/) response', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });

  it('Tests main api route (http://localhost:3000/api) response', async (): Promise<void> => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
  });
});
