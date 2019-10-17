var { MongoClient } = require('mongodb');

var uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@cluster0-be2vw.mongodb.net/test?retryWrites=true&w=majority`;

var options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

MongoClient.connect(uri, options, (err, client) => {
    if (err) throw err;
    console.log('MongoDB Connected!');
    client.close();
});
