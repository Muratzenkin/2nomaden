process.env.NODE_ENV = 'test';
import request from 'supertest';
import app from '../app.js';
import Blog from '../src/models/Blog.js';

describe('Blog routes', () => {
  beforeAll(() => {
    jest.spyOn(Blog, 'find').mockResolvedValue([]);
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  test('GET /api/blogs returns 200', async () => {
    const res = await request(app).get('/api/blogs');
    expect(res.statusCode).toBe(200);
  });
});
