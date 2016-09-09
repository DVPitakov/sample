let express = require('express');
let technologger = require('technologger');
let parser = require('body-parser');
let app = express();
if (myArr === undefined) var myArr = {};
app.use('/', express.static('public'));

app.use(parser.json());
app.use(technologger);

app.post('/users', (req, res, body) => {
    console.log(req.body);
    let	mail = req.body.email;
    if (myArr[mail]) {
		myArr[mail] += 1;
	}
	else {
		myArr[mail] = 1;
	}
    res.send(myArr[mail].toString());
});

app.listen(process.env.PORT || 3000, () => {
	console.log(`App started on port ${process.env.PORT || 3000}`);
});
