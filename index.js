const express = require('express');
const path = require('path');
const firebase = require("firebase/app");
const compression = require('compression')
const sgMail = require('@sendgrid/mail');
const cors = require('cors');
require("firebase/firestore");
require('dotenv').config()

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const app = express();
app.use(compression())
app.use(express.json())

var allowedOrigins = ['http://localhost:5000',
                      'https://www.howardsommerfeld.com'];
app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin 
    // (like mobile apps or curl requests)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// A dummy api endpoint that returns a short list of items
app.get('/api/getList', (req,res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});

app.get('/api/:collectionId/:documentId', (req,res) => {
    let data = {};
    const documentRef = firebase.firestore().collection(req.params.collectionId).doc(req.params.documentId);
    documentRef.get()
    .then( snapshot => {
        if(snapshot.exists){
            data = snapshot.data();
        }
    })
    .catch(error => {data=error;})
    .finally(()=>{console.log(data);res.json(data)})
    console.log('Sent list of items');
});

app.get('/api/:collectionId', (req,res) => {
    let data = [];
    const collectionRef = firebase.firestore().collection(req.params.collectionId);
    collectionRef.get()
    .then( querySnapshot => {
       querySnapshot.docs.forEach(doc => {
           let obj = {}
           obj[doc.id]=doc.data().entries
           data.push(obj)
       })
       console.log(data)
    })
    .catch(error => {data=error;})
    .finally(()=>{res.json(data)})
    console.log('Sent list of items');
});

app.post('/api/contact', (req,res)=>{
  const emailText = `Message:${req.body.message}\nFrom: ${req.body.email}\nName: ${req.body.name}`
  const msg = {
    to: process.env.TO_EMAIL, 
    from: process.env.FROM_EMAIL,
    subject: 'Website Contact Form Message Received',
    text: emailText,
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
      res.sendStatus(200)
    })
    .catch((error) => {
      console.error(error)
      res.sendStatus(503)
    })
})

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);