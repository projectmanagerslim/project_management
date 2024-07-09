const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
let Projet = new Schema({
  id: {
    type: String
  },
  nom: {
    type: String
  } ,
  budget: {
    type: Number
  } ,
  priorite: {
    type: String
  } ,
  datedebut: {
    type: Date
  } ,
  datefin: {
    type: Date
  } ,
  datecreation: {
    type: Date
  } ,
}, {
  collection: 'Projet'
})
  
module.exports = mongoose.model('Projet', Projet)