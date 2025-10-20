let resources = [];
let nextId = 1;

module.exports = {
  getAll: () => resources,
  getById: id => resources.find(r => r.id === Number(id)),
  create: data => { const item = { id: nextId++, ...data }; resources.push(item); return item; },
  update: (id, data) => {
    const idx = resources.findIndex(r => r.id === Number(id));
    if (idx === -1) return null;
    resources[idx] = { ...resources[idx], ...data };
    return resources[idx];
  },
  remove: id => {
    const idx = resources.findIndex(r => r.id === Number(id));
    if (idx === -1) return false;
    resources.splice(idx, 1);
    return true;
  },
  reset: () => { resources = []; nextId = 1; } 
};
