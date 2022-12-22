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

    addComponentToPage: async function (req, res) {
        try {

            let pageId = req.body.pageId;
            let component = req.body.component;
            console.log(req);

            if (pageId == null || pageId == undefined || pageId.length == 0) {
                throw new Error("Page ID must be filled out.")
            }

            if (component == null || component == undefined) {
                throw new Error("Component should not be empty.")
            }

            if (component.componentType == "STATS_WIDGET") {

                if (component.componentData != null &&
                    component.componentData != undefined &&
                    Array.isArray(component.componentData) &&
                    component.componentData.length > 0) {

                    for (let i = 0; i < component.componentData.length; i++) {
                        console.log(i);
                        let temp = component.componentData[i];
                        let displayTitle = temp.displayTitle;
                        let displayDataString = temp.displayDataString;
                        let displayFooter = temp.displayFooter;
                        let dataSource = temp.dataSource;
                        let dataSourceType = dataSource.dataSourceType;
                        let dataSourceKey = dataSource.dataSourceKey;

                        if (displayTitle == null || displayTitle == undefined || displayTitle.length == 0) {
                            throw new Error("Display Title error.");
                        }

                        if (displayDataString == null || displayDataString == undefined || displayDataString.length == 0) {
                            throw new Error("Display Data String error.");
                        }

                        if (displayFooter == null || displayFooter == undefined || displayFooter.length == 0) {
                            throw new Error("Display Footer error.");
                        }

                        if (dataSourceType == null || dataSourceType == undefined || dataSourceType != `INTEGRATION`) {
                            throw new Error("Data Source Type error.")
                        }

                        let integrationId = component.integration.integrationId;
                        if (integrationId == null || integrationId == undefined || integrationId.length == 0) {
                            throw new Error("Data Source IntegrationID error.")
                        }

                        if (dataSourceKey == null || dataSourceKey == undefined || dataSourceKey.length == 0) {
                            throw new Error("DataSourceKey Error")
                        }

                    }
                }
                else {

                    throw new Error("Component type is not a STAT_WIDGET.");
                }

            }

            else if (component.componentType == "DATA_TABLE") {

                if (component.componentData != null &&
                    component.componentData != undefined &&
                    Array.isArray(component.componentData.columns) &&
                    component.componentData.columns.length > 0) {

                    for (let i = 0; i < component.componentData.columns.length; i++) {
                        console.log(i);
                        let temp = component.componentData.columns[i];
                        let displayTitle = temp.displayTitle;
                        let displayDataType = temp.displayDataType;
                        let displayDataKey = temp.displayDataKey;
                        let displayDataKeys = temp.displayDataKeys;

                        if (displayDataType == null || displayDataType == undefined || displayDataType.length == 0) {
                            throw new Error("Display Data Type error.");
                        }

                        if (displayTitle == null || displayTitle == undefined || displayTitle.length == 0) {
                            throw new Error("Display Title error.");
                        }

                        if (displayDataType == "TEXT") {
                            if (displayDataKey == null || displayDataKey == undefined || displayDataKey.length == 0) {
                                throw new Error("Display DataType Key error.");
                            }
                        } else if (displayDataType == "IMAGE_TEXT") {

                            if (displayDataKeys == null || displayDataKeys == undefined || !Array.isArray(displayDataKeys.length) != true) {
                                throw new Error("Display DataType Keys error.");
                            }

                        }
                    }

                }

                if (component.componentData != null &&
                    component.componentData != undefined &&
                    component.componentData.dataSource) {
                    let dataSourceType = component.componentData.dataSource.dataSourceType;
                    if (dataSourceType != null && dataSourceType != undefined && dataSourceType == "INTEGRATION") {

                        let integrationId = component.integration.integrationId;
                        if (integrationId == null || integrationId == undefined) {
                            throw new Error("Data Source IntegrationID error.")
                        }

                        let dataType = component.componentData.dataSource.dataType;
                        if (dataType == null || dataType == undefined || dataType.length == 0) {
                            throw new Error("DataType Error.")
                        }

                        let dataSourceKey = component.componentData.dataSource.dataSourceKey;
                        if (dataSourceKey == null || dataSourceKey == undefined || dataSourceKey.length == 0) {
                            throw new Error("Data source Key Error.")
                        }

                    }

                    else {

                        throw new Error("Component Type is not a DATA TABLE");
                    }

                }
            }

            else if (component.componentType == "DATA_CARD_IMAGE_GRID") {

                if (component.componentData != null &&
                    component.componentData != undefined &&
                    component.componentData.cardFields) {

                    let imageUrl = component.componentData.cardFields.imageUrl;
                    if (imageUrl != null && imageUrl != undefined) {
                        if (imageUrl.displayDataKey == null || imageUrl.displayDataKey == undefined) {
                            throw new Error("Display Data Key error")
                        }

                    } else {
                        throw new Error("Image Url Error.")
                    }

                    let cardTitle = component.componentData.cardFields.cardTitle;
                    if (cardTitle != null && cardTitle != undefined) {
                        if (cardTitle.displayDataKey == null || cardTitle.displayDataKey == undefined) {
                            throw new Error("Display Data Key error")
                        }

                    } else {
                        throw new Error("Card Title Error.")
                    }

                    let subText1 = component.componentData.cardFields.subText1;
                    if (subText1 != null && subText1 != undefined) {
                        if (subText1.displayDataKey == null || subText1.displayDataKey == undefined) {
                            throw new Error("Display Data Key error")
                        }

                    } else {
                        throw new Error("Sub Text1 Error.")
                    }

                } else {
                    throw new Error("Data Card image grid error.")
                }

                if (component.componentData != null &&
                    component.componentData != undefined &&
                    component.componentData.dataSource) {
                    let dataSourceType = component.componentData.dataSource.dataSourceType;
                    if (dataSourceType != null && dataSourceType != undefined && dataSourceType == "INTEGRATION") {

                        let integrationId = component.integration.integrationId;
                        if (integrationId == null || integrationId == undefined) {
                            throw new Error("Data Source IntegrationID error.")
                        }

                        let dataType = component.componentData.dataSource.dataType;
                        if (dataType == null || dataType == undefined || dataType.length == 0) {
                            throw new Error("DataType Error.")
                        }

                        let dataSourceKey = component.componentData.dataSource.dataSourceKey;
                        if (dataSourceKey == null || dataSourceKey == undefined || dataSourceKey.length == 0) {
                            throw new Error("Data source Key Error.")
                        }

                    } else {
                        throw new Error("Data Source Type Error.")
                    }
                } else {
                    throw new Error("Data Source Error.")
                }
            }
            else {

                throw new Error("Component Type is not a DATA_CARD_IMAGE_GRID");
            }

            //db updates
            let filter = { pageId: pageId };

            let updateData = { $push: { component: component } };

            let data = await SERVICES.updatePage(filter, updateData);

            let response = {
                success: 1,
                message: "SUCCESS",
                component: data

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
    }
};

module.exports = controllers;