let express = require('express'),
  path = require('path'),
  mongoose = require('mongoose'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  mongoDb = require('./database/db');
  
mongoose.Promise = global.Promise;
mongoose.connect(mongoDb.db).then(() => {
    console.log('Database successfully connected ')
  },
  error => {
    console.log('Database error: ' + error)
  }
)
  
const postRoute = require('./routes/post.routes')
  /*
on va ici ajouter les routes declarés en backend elekol
exemple

  */
const absenceRoute = require('./routes/absence.routes')
const adminRoute = require('./routes/admin.routes')
const affectiongroupeRoute = require('./routes/affectiongroupe.routes')
const avancementprojetRoute = require('./routes/avancementprojet.routes')
const avancementtacheRoute = require('./routes/avancementtache.routes')
const comptenceRoute = require('./routes/competence.routes')
const congeRoute = require('./routes/conge.routes')
const groupeRoute = require('./routes/groupe.routes')
const messageRoute = require('./routes/message.routes')
const notificationRoute = require('./routes/notification.routes')
const posteRoute = require('./routes/post.routes')
const profilRoute = require('./routes/profil.routes')
const projetRoute = require('./routes/projet.routes')
const tacheRoute = require('./routes/tache.routes')
const userRoute = require('./routes/user.routes')
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors());
  
/* Static directory path */
app.use(express.static(path.join(__dirname, 'dist/angular-mean-crud-tutorial')));
  
/* API root */
app.use('/api', postRoute)
/*
aprés la declaration des ces routes elekol
on fait appel l chaque variable pour lier au API
exemple
absenceRoute
*/
app.use('/apiabsence', absenceRoute)
app.use('/apiadmin', adminRoute)
app.use('/apiaffectiongroupe', affectiongroupeRoute)
app.use('/apiavancementprojet', avancementprojetRoute)
app.use('/apiavancementtache', avancementtacheRoute)
app.use('/apicomptence', comptenceRoute)
app.use('/apiconge', congeRoute)
app.use('/apigroupe', groupeRoute)
app.use('/apiconge', congeRoute)
app.use('/apimessage', messageRoute)
app.use('/apinotification', notificationRoute)
app.use('/apiposte', posteRoute)
app.use('/apiprofil', profilRoute)
app.use('/apiprojet',projetRoute)
app.use('/apitache',tacheRoute)
app.use('/apiuser',userRoute)









// c bon clair cette partie ??? oui
// si on moidife tawa les routes et les apis
// les apis doivenet etre modifié f les services elekol zeda exemple absence eli raka7tha tawa

/* PORT */
const port = process.env.PORT || 4000;
  
app.listen(port, () => {
  console.log('Listening on port ' + port)
})
  
/* 404 Handler */
app.use((req, res, next) => {
  next(createError(404));
});
  
/* Base Route */
app.get('/', (req, res) => {
  res.send('invaild endpoint');
});
  
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/angular-mean-crud-tutorial/index.html'));
});
  
/* error handler */
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});