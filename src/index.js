const app = require('./app');
require('dotenv').config();
require('./database');

app.listen(3000, () => {
    console.log('Server on port', 3000);
});
