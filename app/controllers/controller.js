'use strict';

const SERVICES = require("../services/services");

var controllers = {

    addPage: async function (req, res) {

        try {
            let pageData = req.body;
            let pageName = req.body.pageName;
            let pageHeader = req.body.pageHeader;
            let pageTitle = req.body.pageTitle;

            if (pageName == null || pageName == undefined || pageName.length == 0) {
                throw new Error("Page Name must be filled out.");
            }

            if (pageHeader == null || pageHeader == undefined || pageHeader.length == 0) {
                throw new Error("Page Header must be filled out.");
            }

            if (pageTitle == null || pageTitle == undefined || pageTitle.length == 0) {
                throw new Error("Page Title must be filled out.");
            }
            let data = await SERVICES.addPage(pageData);
            let response = {
                success: 1,
                data: data
            }
            return res.send(response);

        } catch (e) {
            console.error(e);

            let response = {
                success: 0,
                message: e.message
            }

            return res.send(response);
        }
    },

    // addComponentToPage: async function (req, res){
    //     let pageId = req.body.pageId;
    //     let component = req.body.component;
    //     try{
    //         let filter = {pageId:pageId};
            
    //         if(!component == []){
    //             throw new Error ("Component is not an array.")
    //         } 
    //         let componentObj = {
    //             displayTitle: "Order Placed",
    //             displayDataString: "NA",
    //             displayFooter: "To Date"
    //             }
    //         {
    //             displayTitle: "Seller Confirmd",
    //             displayDataString: "NA",
    //             "displayFooter": "To Date"
    //         },
    //         {
    //             "displayTitle": "Pending Pickups",
    //             "displayDataString": "NA",
    //             "displayFooter": "Action Needed"
    //         },
    //         {
    //             "displayTitle": "Delivered",
    //             "displayDataString": "NA",
    //             "displayFooter": "Action Needed"
    //         },
    //         {
    //             "displayTitle": "Order Placed",
    //             "displayDataString": "NA",
    //             "displayFooter": "To Date"
    //         },
    //         {
    //             "displayTitle": "Seller Confirmd",
    //             "displayDataString": "NA",
    //             "displayFooter": "To Date"
    //         },
    //         {
    //             "displayTitle": "Pending Pickups",
    //             "displayDataString": "NA",
    //             "displayFooter": "Action Needed"
    //         },
    //         {
    //             "displayTitle": "Delivered",
    //             "displayDataString": "NA",
    //             "displayFooter": "Action Needed"
    //         // }
    //         let updateData={$push:{componentObj:componentObj}};
    //         let data = await SERVICES.updatePage(filter, updateData);
    //         let response = {
    //             success: 1,
    //             data: data
    //         }
    //         return res.send(response);

    //     } catch (e) {
    //         console.error(e);

    //         let response = {
    //             success: 0,
    //             message: e.message
    //         }

    //         return res.send(response);

    //     }
    // },

    // addComponentType: async function (req, res){
    //     let pageId = req.body.pageId;
    //     let componentType = req.body.componentType;
    //     try{
    //         let filter = {pageId:pageId};
            
    //         if(componentType == null || componentType == undefined){
    //             throw new Error("Component Type is not found.");
    //         }
    //         let updateData={$set:{componentType:componentType}};
    //         let data = await SERVICES.updatePage(filter, updateData);
    //         let response = {
    //             success: 1,
    //             data: data
    //         }
    //         return res.send(response);

    //     } catch (e) {
    //         console.error(e);

    //         let response = {
    //             success: 0,
    //             message: e.message
    //         }

    //         return res.send(response);

    //     }
    // }
};

module.exports = controllers;