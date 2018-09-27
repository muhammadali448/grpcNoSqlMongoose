const todoModel = require("../models/todos");

class Todo {

  constructor(payload) {
    this.payload = payload;
  }

  static list(cb) {
    const criteria = {};
    const projections = {
      _id: 0,
      __v: 0
    };
    const options = {
      lean: true
    };
    todoModel.find(criteria, projections, options, cb)
  }

  add(cb) {
    new todoModel(this.payload).save(cb);
  }

  fetch(cb) {
    const criteria = { id: this.payload };
    const projections = {
      _id: 0,
      __v: 0
    };
    const options = {
      lean: true
    };
    todoModel.find(criteria, projections, options, cb)
  }

  remove(cb) {
    todoModel.remove({ id: this.payload }, cb);
  }
  update(cb) {
    console.log(this.payload);
    const options = {
      lean: true
    };
    // Model.findOneAndUpdate(query, { $set: { name: 'jason bourne' }}, options, callback)
    todoModel.findOneAndUpdate({ id: this.payload.id }, {
      $set: {
      title: this.payload.title,
      description: this.payload.description
    }}, options, cb)
  }
}

module.exports = Todo;