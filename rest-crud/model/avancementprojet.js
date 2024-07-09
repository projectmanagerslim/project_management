const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
let Avancementprojet = new Schema({
    idprojet: {
    type: String
  },
  Tache: {
    type: String
  },
  responsable: {
    type: String
  },
  Datedébut: {
    type: Date
  },
  Datefinprevue: {
    type: Date
  },
  Datefinreelle: {
    type: Date
  },
  progression: {
    type: String
  },
}, {
  collection: 'avancementprojet'
})
  
module.exports = mongoose.model('Avancementprojet', Avancementprojet)