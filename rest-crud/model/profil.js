const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
let Profil = new Schema({
  id: {
    type: String
  },
  description: {
    type: String
  } ,
  etat: {
    type: String
  } ,

}, {
  collection: 'profil'
})
  
module.exports = mongoose.model('Profil', Profil)