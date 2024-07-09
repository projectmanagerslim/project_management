const express = require('express');
const Avancementtache = require('../model/avancementtache');
const avancementtacheRoute = express.Router();
  
/* Add Avancementtache */
avancementtacheRoute.post('/avancementtaches/create', async (req, res, next) => {
  try {
    const avancementtache = await Avancementtache.create(req.body);
    res.json(avancementtache);
  } catch (error) {
    next(error);
  }
});
  
/* Get all Avancementtaches*/
avancementtacheRoute.get('/avancementtaches', async (req, res, next) => {
  try {
    const avancementtaches = await Avancementtache.find();
    res.json(avancementtaches);
  } catch (error) {
    next(error);
  }
});
  
/* Get Avancementtache by ID */
avancementtacheRoute.get('/avancementtaches/:id', async (req, res, next) => {
  try {
    const avancementtache = await Avancementtache.findById(req.params.id);
    res.json(avancementtache);
  } catch (error) {
    next(error);
  }
});
  
/* Update Avancementtache */
avancementtacheRoute.put('/avancementtaches/:id', async (req, res, next) => {
  try {
    const updatedAvancementtache = await Avancementtache.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.json(updatedAvancementtache);
  } catch (error) {
    next(error);
  }
});
  
/* Delete Avancementtache */
avancementtacheRoute.delete('/avancementtaches/:id', async (req, res, next) => {
  try {
    const deletedAvancementtache = await Avancementtache.findOneAndDelete({ _id: req.params.id });
    res.status(200).json({ msg: 'Avancementtache deleted successfully' });
  } catch (error) {
    next(error);
  }
});
  
module.exports = avancementtacheRoute;