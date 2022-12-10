'use strict';

const Controller = require('./controllers/controller');

module.exports = function (app) {

    app.route('/page/addPage').post(Controller.addPage);
    // app.route('/page/addComponentToPage').post(Controller.addComponentToPage);

}