const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
let Groupe = new Schema({
  id: {
    type: String
  },
  nom: {
    type: String
  } ,
  description: {
    type: String
  } ,
  categorie: {
    type: String
  } ,
  datecreation: {
    type: Date
  } ,
  datemodifcation: {
    type: Date
  } 

}, {
  collection: 'groupe'
})
  
module.exports = mongoose.model('Groupe', Groupe)