const models = require('../models');
const db = require('../config/connection');

// This exports an asynchronous function that takes two parameters:
// modelName: The name of the Mongoose model you want to check.
// collectionName: The name of the collection in the database. 

module.exports = async (Skill, User) => {
    console.log(Skill, User)
  try {
    let modelExists = await models[Skill].db.db.listCollections({
      name: User
    }).toArray()

    if (modelExists.length) {
      await db.dropCollection(User);
    }
  } catch (err) {
    throw err;
  }
}
