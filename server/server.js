const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// app.get('/', function(req, res) {
//   res.send('Hello World!');
// });

app.use(express.static('public'));

app.listen(port, function() {
  console.log(`App is running on port ${port}`);
});
