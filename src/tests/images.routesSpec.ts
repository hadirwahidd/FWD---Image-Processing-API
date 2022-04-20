import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Test Images Route responses', () => {
  it('If the name was not provided', async (): Promise<void> => {
    const response = await request.get('/api/imageresize/?width=10&height=11');
    expect(response.status).toBe(400);
  });
  it('If the width/height are not provided', async (): Promise<void> => {
    const response = await request.get('/api/imageresize/?name=santamonica&height=11');
    expect(response.status).toBe(401);
  });
  it('If the width/height are not numbers', async (): Promise<void> => {
    const response = await request.get('/api/imageresize/?name=santamonica&width=aa&height=11');
    expect(response.status).toBe(401);
  });
  it('If the width or the height are not valid', async (): Promise<void> => {
    const response = await request.get('/api/imageresize/?name=encenadaport&width=-10&height=11');
    expect(response.status).toBe(402);
  });
  it('If the name was invalid (Image does not exist)', async (): Promise<void> => {
    const response = await request.get('/api/imageresize/?name=name&width=10&height=11');
    expect(response.status).toBe(403);
  });
  it('If the image exists and has been resized before', async (): Promise<void> => {
    const response = await request.get('/api/imageresize/?name=fjord&width=1920&height=1280');
    expect(response.status).toBe(200);
  });
  it('If the image exists and has not been resized before', async (): Promise<void> => {
    const response = await request.get('/api/imageresize/?name=palmtunnel&width=1920&height=1280');
    expect(response.status).toBe(200);
  });
});
