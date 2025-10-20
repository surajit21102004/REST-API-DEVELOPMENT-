
const request = require('supertest');
const app = require('../server'); // export app instead of app.listen for tests
const { expect } = require('chai');

describe('Resources API', () => {
  it('creates resource', async () => {
    const res = await request(app).post('/api/resources').send({ name: 'Test' });
    expect(res.status).to.equal(201);
    expect(res.body.data).to.have.property('id');
  });
});
