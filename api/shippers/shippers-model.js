const db = require('../../data/db-config');

module.exports = {
  get,
  getById,
  create,
  update,
  remove,
}

async function get() {
  const result = await db('shippers')
  return result;
}

async function getById(shipperId) {
  const [shipper] = await db('shippers').where('shipperid', shipperId).first()
  return shipper
}

async function create(shipper) {
  const [shipperId] = await db('shippers').insert(shipper)
  const result = await getById(shipperId)
  return result
}

async function update(shipperId, changes) {
  const stuff = await db('shippers').update(changes).where('shipperId', shipperId)
  const result = await getById(shipperId)
  return result
}

async function remove(shipperId) {
  const toDelete = await getById(shipperId)
  const thing = await db('shippers').del().where('shipperId', shipperId)
  
  return toDelete
}
