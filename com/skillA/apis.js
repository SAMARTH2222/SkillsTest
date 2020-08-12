"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetWeatherAPIAction = void 0;
const conversations_1 = require("ask-smapi-model/conversations");
const types_1 = require("./types");
class GetWeatherAPIAction extends conversations_1.APIAction {
    constructor() {
        const cityNameArgType = new types_1.CityName().name;
        const dateArgType = new types_1.Date().name;
        const weatherResultReturnType = new types_1.WeatherResult().name;
        const args = new Map([[GetWeatherAPIAction.argName_cityName, cityNameArgType], [GetWeatherAPIAction.argName_date, dateArgType]]);
        super(GetWeatherAPIAction.actionName, "com.skillA.apis.GetWeatherAPIAction", args, weatherResultReturnType);
    }
}
exports.GetWeatherAPIAction = GetWeatherAPIAction;
GetWeatherAPIAction.actionName = new conversations_1.ArtifactName("GetWeatherAPIAction");
GetWeatherAPIAction.argName_cityName = new conversations_1.ArtifactName("cityName");
GetWeatherAPIAction.argName_date = new conversations_1.ArtifactName("date");
