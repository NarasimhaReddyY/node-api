import bodyParser from 'body-parser';

module.exports = app => {
	app.set('port', 3000);
	app.set('json spaces', 4);
	app.use(bodyParser.urlencoded({
	  extended: true
	}));
	
	app.use(bodyParser.json());
	app.use(app.auth.initialize());
	app.use((req, res, next) => {
		next();
	})
}