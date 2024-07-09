const express = require('express');
const Affectiongroupe = require('../model/affectiongroupe');
const affectiongroupeRoute = express.Router();
  
/* Add Affectiongroupe */
affectiongroupeRoute.post('/affectiongroupes/create', async (req, res, next) => {
  try {
    const affectiongroupe = await Affectiongroupe.create(req.body);
    res.json(affectiongroupe);
  } catch (error) {
    next(error);
  }
});
  
/* Get all Affectiongroupes*/
affectiongroupeRoute.get('/affectiongroupes', async (req, res, next) => {
  try {
    const affectiongroupes = await Affectiongroupe.find();
    res.json(affectiongroupes);
  } catch (error) {
    next(error);
  }
});
  
/* Get Affectiongroupe by ID */
affectiongroupeRoute.get('/affectiongroupes/:id', async (req, res, next) => {
  try {
    const affectiongroupe = await Affectiongroupe.findById(req.params.id);
    res.json(affectiongroupe);
  } catch (error) {
    next(error);
  }
});
  
/* Update Affectiongroupe */
affectiongroupeRoute.put('/affectiongroupes/:id', async (req, res, next) => {
  try {
    const updatedAffectiongroupe = await Affectiongroupe.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.json(updatedAffectiongroupe);
  } catch (error) {
    next(error);
  }
});
  
/* Delete Affectiongroupe */
affectiongroupeRoute.delete('/affectiongroupes/:id', async (req, res, next) => {
  try {
    const deletedAffectiongroupe = await Affectiongroupe.findOneAndDelete({ _id: req.params.id });
    res.status(200).json({ msg: 'Affectiongroupe deleted successfully' });
  } catch (error) {
    next(error);
  }
});
  
module.exports = affectiongroupeRoute;