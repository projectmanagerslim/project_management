const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
let Avancementtache = new Schema({
    idAtache: {
    type: String
  },
  description: {
    type: String
  } ,
  qualité: {
    type: String
  } ,
  etat: {
    type: String
  } ,

}, {
  collection: 'avancementtache'
})
  
module.exports = mongoose.model('Avancementtache', Avancementtache)