const request = require('supertest');
const app = require('../server'); 
const { expect } = require('chai');

describe('Resources API', () => {
  let createdResourceId;

  //  POST /api/resources
  it('should create a new resource', async () => {
    const res = await request(app)
      .post('/api/resources')
      .send({ name: 'Test Resource' });

    expect(res.status).to.equal(201);
    expect(res.body).to.have.property('success', true);
    expect(res.body.data).to.have.property('id');
    expect(res.body.data).to.have.property('name', 'Test Resource');

    createdResourceId = res.body.data.id; // save ID for later tests
  });

  //  GET /api/resources
  it('should return all resources', async () => {
    const res = await request(app).get('/api/resources');

    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('success', true);
    expect(res.body.data).to.be.an('array');
    expect(res.body.data.length).to.be.greaterThan(0);
  });

  //  GET /api/resources/:id
  it('should return one resource by ID', async () => {
    const res = await request(app).get(`/api/resources/${createdResourceId}`);

    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('success', true);
    expect(res.body.data).to.have.property('id', createdResourceId);
    expect(res.body.data).to.have.property('name', 'Test Resource');
  });

  //  PUT /api/resources/:id
  it('should update a resource', async () => {
    const res = await request(app)
      .put(`/api/resources/${createdResourceId}`)
      .send({ name: 'Updated Resource' });

    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('success', true);
    expect(res.body.data).to.have.property('id', createdResourceId);
    expect(res.body.data).to.have.property('name', 'Updated Resource');
  });

  //  DELETE /api/resources/:id
  it('should delete a resource', async () => {
    const res = await request(app).delete(`/api/resources/${createdResourceId}`);

    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('success', true);
    expect(res.body).to.have.property('message');
  });

// GET /api/resources/external
  it('should fetch data from external API', async () => {
    const res = await request(app).get('/api/resources/external');

    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('success', true);
    expect(res.body.data).to.be.an('object'); // external API response
  });
});


