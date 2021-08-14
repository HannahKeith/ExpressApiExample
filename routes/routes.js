//wires up the route for users
const userRoutes = require('./users');

const appRouter = (app, fs) => {

    app.get('/', (req, res) => {
      res.send('Welcome to the Development API Server');
    });
    userRoutes(app, fs);
};











module.exports = appRouter;
