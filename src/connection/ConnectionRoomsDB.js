const ReadProperties = require('../utils/ReadProperties');
const ConnectionDB = require('./ConnectionDB');

class ConnectionRoomsDB {

  constructor() {
    this.properties = new ReadProperties();
    this.client = new ConnectionDB();
  }

  async getRooms() {
    try {
      return await (await this.client.getInstanceCollection(this.properties.getPropertiesDB().collection_rooms)).find().toArray();
    } catch(err) {
      return err;
    }
  }
}

module.exports = ConnectionRoomsDB;