const express = require('express');
const path = require('path');
const firebase = require("firebase/app");
require("firebase/firestore");

const firebaseConfig = require('./firebase.config');
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

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

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);