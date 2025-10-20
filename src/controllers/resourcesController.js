const Resource = require('../models/resourceModel');
const ExternalService = require('../services/externalService');

const wrapAsync = fn => (req, res, next) => Promise.resolve(fn(req,res,next)).catch(next);

exports.getAll = wrapAsync(async (req, res) => {
  
  const items = await Promise.resolve(Resource.getAll());
  res.json({ success: true, data: items });
});

exports.getById = wrapAsync(async (req, res) => {
  const item = await Promise.resolve(Resource.getById(req.params.id));
  if (!item) return res.status(404).json({ success:false, error:'Not found' });
  res.json({ success:true, data: item });
});

exports.create = wrapAsync(async (req, res) => {
  const payload = req.body;
  const item = await Promise.resolve(Resource.create(payload));
  res.status(201).json({ success:true, data: item });
});

exports.update = wrapAsync(async (req, res) => {
  const item = await Promise.resolve(Resource.update(req.params.id, req.body));
  if (!item) return res.status(404).json({ success:false, error:'Not found' });
  res.json({ success:true, data: item });
});

exports.remove = wrapAsync(async (req, res) => {
  const ok = await Promise.resolve(Resource.remove(req.params.id));
  if (!ok) return res.status(404).json({ success:false, error:'Not found' });
  res.json({ success:true, message: 'Deleted' });
});

// route that calls external API
exports.fetchExternal = wrapAsync(async (req, res) => {
  const externalData = await ExternalService.getSomeData(); 
  res.json({ success:true, data: externalData });
});
