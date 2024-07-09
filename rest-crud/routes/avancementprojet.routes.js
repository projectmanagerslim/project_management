const express = require('express');
const Avancementprojet = require('../model/avancementprojet');
const avancementprojetRoute = express.Router();
  
/* Add Avancementprojet */
avancementprojetRoute.post('/avancementprojets/create', async (req, res, next) => {
  try {
    const avancementprojet = await Avancementprojet.create(req.body);
    res.json(avancementprojet);
  } catch (error) {
    next(error);
  }
});
  
/* Get all Avancementprojets*/
avancementprojetRoute.get('/avancementprojets', async (req, res, next) => {
  try {
    const avancementprojets = await Avancementprojet.find();
    res.json(avancementprojets);
  } catch (error) {
    next(error);
  }
});
  
/* Get Avancementprojet by ID */
avancementprojetRoute.get('/avancementprojets/:id', async (req, res, next) => {
  try {
    const avancementprojet = await Avancementprojet.findById(req.params.id);
    res.json(avancementprojet);
  } catch (error) {
    next(error);
  }
});
  
/* Update Avancementprojet */
avancementprojetRoute.put('/avancementprojets/:id', async (req, res, next) => {
  try {
    const updatedAvancementprojet = await Avancementprojet.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.json(updatedAvancementprojet);
  } catch (error) {
    next(error);
  }
});
  
/* Delete Avancementprojet */
avancementprojetRoute.delete('/avancementprojets/:id', async (req, res, next) => {
  try {
    const deletedAvancementprojet = await Avancementprojet.findOneAndDelete({ _id: req.params.id });
    res.status(200).json({ msg: 'Avancementprojet deleted successfully' });
  } catch (error) {
    next(error);
  }
});
  
module.exports = avancementprojetRoute;