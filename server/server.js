const devMode = env => env === 'development';
if (devMode) {
	require('dotenv').config({ path: './config/config.env' });
}
const
	express = require('express'),
	handler = () => {},
	PORT		= process.env.PORT || 5000,
	app 		= express();

app.use(express.static('public'));

app.get('/', () => {});

app.listen(PORT, () => {
	if (devMode) {
		const debug = require('debug')('server.js');
		debug(`Server is up and running on port: ${PORT}`);
	}
});