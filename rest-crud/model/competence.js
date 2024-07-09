const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
let Competence = new Schema({
  id: {
    type: String
  },
  nom: {
    type: String
  } ,
  description: {
    type: String
  } ,
  datecreation: {
    type: Date
  } ,
  etat: {
    type: String
  } 
}, {
  collection: 'competence'
})
  
module.exports = mongoose.model('Competence', Competence)