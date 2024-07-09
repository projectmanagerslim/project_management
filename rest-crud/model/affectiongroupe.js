const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
let Affectiongroupe = new Schema({
    idgroup: {
        type: String
      },
    nomgroupe: {
    type: String
  },
  membres: {
    type: Number
  },
  responsablegroupe: {
    type: String
  },
  objectifs: {
    type: String
  }
}, {
  collection: 'affectiongroupe'
})
  
module.exports = mongoose.model('Affectiongroupe', Affectiongroupe)