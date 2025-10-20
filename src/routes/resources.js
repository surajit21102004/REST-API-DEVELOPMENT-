
const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/resourcesController');

router.get('/', ctrl.getAll);            // GET Api endpoint /api/resources
router.get('/external', ctrl.fetchExternal); // GET Api endpoint /api/resources/external
router.get('/:id', ctrl.getById);        // GET Api endpoint /api/resources/:id
router.post('/', ctrl.create);           // POST Api endpoint /api/resources
router.put('/:id', ctrl.update);         // PUT  Api endpoint /api/resources/:id
router.delete('/:id', ctrl.remove);      // DELETE Api endpoint  /api/resources/:id

module.exports = router;
