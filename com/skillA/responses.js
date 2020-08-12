"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestResponseAction = exports.NotifyResponseAction = exports.ConfirmResponseAction = void 0;
const conversations_1 = require("ask-smapi-model/conversations");
const types_1 = require("./types");
const apis_1 = require("./apis");
class ConfirmResponseAction extends conversations_1.ResponseAction {
    constructor() {
        const templates = new conversations_1.Templates(new conversations_1.PromptTemplate("confirm_GetWeather_apla", "APL-A"));
        const cityNameArgType = new types_1.CityName().name;
        const dateArgType = new types_1.Date().name;
        const responseActionArgs = new Map([[ConfirmResponseAction.argName_cityName, cityNameArgType], [ConfirmResponseAction.argName_date, dateArgType]]);
        const situationArgs = [cityNameArgType, dateArgType];
        const situationDialogAct = new conversations_1.SituationDialogAct("Confirm", new apis_1.GetWeatherAPIAction().name, undefined, undefined, situationArgs, undefined, undefined, undefined);
        const situation = new conversations_1.Situation("", situationDialogAct);
        const situations = [situation];
        super(ConfirmResponseAction.actionName, "com.skillA.responses.ConfirmResponseAction", responseActionArgs, templates, situations);
    }
}
exports.ConfirmResponseAction = ConfirmResponseAction;
ConfirmResponseAction.actionName = new conversations_1.ArtifactName("ConfirmResponseAction");
ConfirmResponseAction.argName_cityName = new conversations_1.ArtifactName("cityName");
ConfirmResponseAction.argName_date = new conversations_1.ArtifactName("date");
class NotifyResponseAction extends conversations_1.ResponseAction {
    constructor() {
        const templates = new conversations_1.Templates(new conversations_1.PromptTemplate("notify_api_response_GetWeather_apla", "APL-A"));
        const weatherResultArgType = new types_1.WeatherResult().name;
        const responseActionArgs = new Map([[NotifyResponseAction.argName_weatherResult, weatherResultArgType]]);
        const situationArgs = [weatherResultArgType];
        const situationDialogAct = new conversations_1.SituationDialogAct("Notify", new apis_1.GetWeatherAPIAction().name, undefined, "SUCCESS", situationArgs, undefined, undefined, undefined);
        const situation = new conversations_1.Situation("", situationDialogAct);
        const situations = [situation];
        super(NotifyResponseAction.actionName, "com.skillA.responses.NotifyResponseAction", responseActionArgs, templates, situations);
    }
}
exports.NotifyResponseAction = NotifyResponseAction;
NotifyResponseAction.actionName = new conversations_1.ArtifactName("NotifyResponseAction");
NotifyResponseAction.argName_weatherResult = new conversations_1.ArtifactName("weatherResult");
class RequestResponseAction extends conversations_1.ResponseAction {
    constructor() {
        const templates = new conversations_1.Templates(new conversations_1.PromptTemplate("request_cityName_CityName_date_AMAZON.DATE_apla", "APL-A"));
        const cityNameArgType = new types_1.CityName().name;
        const dateArgType = new types_1.Date().name;
        const responseActionArgs = new Map([[ConfirmResponseAction.argName_cityName, cityNameArgType], [ConfirmResponseAction.argName_date, dateArgType]]);
        const situationArgs = [cityNameArgType, dateArgType];
        const situationDialogAct = new conversations_1.SituationDialogAct("Request", new apis_1.GetWeatherAPIAction().name, undefined, undefined, situationArgs, undefined, undefined, undefined);
        const situation = new conversations_1.Situation("", situationDialogAct);
        const situations = [situation];
        super(RequestResponseAction.actionName, "com.skillA.responses.RequestResponseAction", responseActionArgs, templates, situations);
    }
}
exports.RequestResponseAction = RequestResponseAction;
RequestResponseAction.actionName = new conversations_1.ArtifactName("RequestResponseAction");
RequestResponseAction.argName_cityName = new conversations_1.ArtifactName("cityName");
RequestResponseAction.argName_date = new conversations_1.ArtifactName("date");
