const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
let Tache = new Schema({
  id: {
    type: String
  },
  idprojet: {
    type: String
  } ,
  description: {
    type: String
  } ,
  actions: {
    type: String
  } ,
  datedebut: {
    type: Date
  } ,
  datefin: {
    type: Date
  } ,
}, {
  collection: 'tache'
})
  
module.exports = mongoose.model('Tache', Tache)