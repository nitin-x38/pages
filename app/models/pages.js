'use strict';

var mongoose = require('mongoose');

var pages = mongoose.Schema({
    pageId: {
        type: 'String',
        required: true,
        unique: true
    },
    pageName: {
        type: 'String',
        required: true
    },
    pageTitle: {
        type: 'String',
        required: true
    },
    pageHeader: {
        type: 'String',
        required: true
    },
    component: {
        type: "Array",
        items: {
            type: "String"
        },
        default: []
    },
    status: {
        type: 'String',
        required: true,
        default:"ACTIVE"
    },
    accountId: {
        type: 'String',
        required: true,
        default:"NA"
    },
    projectId: {
        type: 'String',
        required: true,
        default:"NA"
    },
    dashboardId: {
        type: 'String',
        required: true,
        default:"NA"
    },
    created_at: { 
        type: 'Date', 
        required: true, 
        default: Date.now }
});

var connection = mongoose.createConnection('mongodb://localhost:27017/pages', { 
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

module.exports = connection.model('pages', pages, 'pages');