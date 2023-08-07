const mongoose = require('mongoose');




// db.on('error', console.error.bind(console, 'Error connecting to DB'));
// db.once('open', function(){
//     console.log('Successfully connected to Database');
// });

const uri = 'mongodb+srv://akashroynet:akashroy69@cluster0.nbgik9s.mongodb.net/contact_list';

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
let db = mongoose.connection;