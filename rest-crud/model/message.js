const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
let Message = new Schema({
    idmessage: {
    type: String
  },
  idenvoie: {
    type: String
  } ,
  idreception: {
    type: String
  } ,
  sujet: {
    type: String
  } ,
  texte: {
    type: String
  } ,
  etat: {
    type: String
  } ,
  datecreationmessage: {
    type: String
  } ,

}, {
  collection: 'message'
})
  
module.exports = mongoose.model('Message', Message)