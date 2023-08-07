const express = require('express');
const path = require('path');
const port = 8000;

const db = require('./config/mongoose');
const Contact = require('./models/contact');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));


var contactList = [
    {
        name: "Akash",
        phone: "1111111111"
    },
    {
        name: "Kunal",
        phone: "1234567890"
    },
    {
        name: "Shreeya",
        phone: "0987654321"
    },
    {
        name: "Rohan",
        phone: "9876543210"
    }
];


app.get('/', async function(req, res){
    const contacts = await Contact.find();
    // console.log(contacts);
    res.render('home', { 
        title: "Contact List",
        contact_list: contacts
    });
    // return res.render('home', {
    //     title: "Contact List",
    //     contact_list : contacts
    // });
});

app.get('/practice', function(req, res){
    return res.render('practice', {
        title: "Practice ejs",
    });
});

app.post('/add_contact', async function(req, res){
    // contactList.push(req.body);
    Contact.create({
        name: req.body.name,
        phone: req.body.phone
    });
    return res.redirect('/');
});

app.get('/delete-contact', async function(req, res){
    let id = req.query.id;

    await Contact.findByIdAndRemove(id);

    // let contactIndex = contactList.findIndex(contact => contact.phone == phone);

    // if(contactIndex != -1)
    //     contactList.splice(contactIndex, 1);
    
    return res.redirect('back');
});

// app.get('/profile', function(req, res){
//     res.send('<h2>Hey, Welcome to Profile Page</h2>');
// });

// app.get('/contact', function(req, res){
//     res.send('This is Contact page!');
// })


app.listen(port, function(err){
    if(err)
        console.log("Error in running the Server", err);
    console.log("Express Server running at port : ", port);
});