"use strict";

const PAGES_MODEL = require("../models/pages");
const UUID = require("uuid");

var pageServices = {

    addPage: async function(pageData) {
        try {

            let pageId = await UUID.v4();
            pageData.pageId = pageId;
            let pageObj = new PAGES_MODEL(pageData);
            let newPage = await pageObj.save();
            return newPage;

        } catch (error) {
            console.log(error);
            throw error;
        }
    },

    updatePage: async function(filter,updateData) {
        try{
            console.log(filter,updateData);
            var data = await PAGES_MODEL.update(filter, updateData,{multi:false});
            console.log(updateData);
            return data;
        }catch(e){
            console.log(e);
            return 0;
        }
    },
};

module.exports = pageServices;
