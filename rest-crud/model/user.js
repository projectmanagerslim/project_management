const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
let User = new Schema({
  id: {
    type: String
  },
  nom: {
    type: String
  } ,
  prenom: {
    type: String
  } ,
  mdp: {
    type: String
  } ,
  datecreation: {
    type: Date
  } ,
  statut: {
    type: String
  } 
}, {
  collection: 'user'
})
  
module.exports = mongoose.model('User', User)