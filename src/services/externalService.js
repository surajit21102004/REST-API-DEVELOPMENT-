
const axios = require('axios');

exports.getSomeData = async () => {
  try {
    const resp = await axios.get('https://api.restful-api.dev/objects'); // example public API
    return resp.data;
  } catch (err) {
    
    const e = new Error('External API error');
    e.status = 502;
    e.details = err.message;
    throw e;
  }
};
