"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillABuilder = void 0;
const types_1 = require("./com/skillA/types");
const userEvents_1 = require("./com/skillA/userEvents");
const apis_1 = require("./com/skillA/apis");
const responses_1 = require("./com/skillA/responses");
const dialogs_1 = require("./com/skillA/dialogs");
const conversations_1 = require("ask-smapi-model/conversations");
class SkillABuilder {
    buildArtifacts() {
        // Create Types.
        const cityName = new types_1.CityName();
        const date = new types_1.Date();
        const temperature = new types_1.Temperature();
        const weatherResult = new types_1.WeatherResult();
        // Create Events.
        const whatIsTheWeatherEvent = new userEvents_1.WhatIsTheWeatherEvent();
        const getWeatherForCityDateEvent = new userEvents_1.GetWeatherForCityDateEvent();
        const yesEvent = new userEvents_1.YesEvent();
        // Create Actions.
        const requestResponseAction = new responses_1.RequestResponseAction();
        const confirmResponseAction = new responses_1.ConfirmResponseAction();
        const notifyResponseAction = new responses_1.NotifyResponseAction();
        const getWeatherAPIAction = new apis_1.GetWeatherAPIAction();
        const getWeatherDialog = new dialogs_1.GetWeatherDialog();
        const actionMap = new Map();
        actionMap.set(requestResponseAction.name, requestResponseAction);
        actionMap.set(confirmResponseAction.name, confirmResponseAction);
        actionMap.set(notifyResponseAction.name, notifyResponseAction);
        actionMap.set(getWeatherAPIAction.name, getWeatherAPIAction);
        // Create Artifacts.
        const artifacts = new conversations_1.Artifacts(new Map([[cityName.name, cityName], [date.name, date], [temperature.name, temperature], [weatherResult.name, weatherResult]]), new Map([[whatIsTheWeatherEvent.name, whatIsTheWeatherEvent], [getWeatherForCityDateEvent.name, getWeatherForCityDateEvent], [yesEvent.name, yesEvent]]), actionMap, new Map([[getWeatherDialog.name, getWeatherDialog]]));
        // Create Dialog.
        // Turn 1
        const x = getWeatherDialog.receive(whatIsTheWeatherEvent, "x", artifacts);
        getWeatherDialog.respond(requestResponseAction, undefined, undefined);
        // Turn 2
        const y = getWeatherDialog.receive(getWeatherForCityDateEvent, "y", artifacts);
        getWeatherDialog.respond(confirmResponseAction, new Map([
            [responses_1.ConfirmResponseAction.argName_cityName, y.getValue(userEvents_1.GetWeatherForCityDateEvent.argName_cityName)],
            [responses_1.ConfirmResponseAction.argName_date, y.getValue(userEvents_1.GetWeatherForCityDateEvent.argName_date)]
        ]), undefined);
        // Turn 3
        const z = getWeatherDialog.receive(yesEvent, "z", artifacts);
        const weatherResult0 = getWeatherDialog.executeApi(getWeatherAPIAction, new Map([
            [apis_1.GetWeatherAPIAction.argName_cityName, y.getValue(responses_1.NotifyResponseAction.actionName)],
            [apis_1.GetWeatherAPIAction.argName_date, y.getValue(userEvents_1.GetWeatherForCityDateEvent.argName_date)]
        ]), "weatherResult0", undefined, artifacts);
        getWeatherDialog.respond(notifyResponseAction, new Map([
            [responses_1.NotifyResponseAction.argName_weatherResult, weatherResult0.getValue(types_1.WeatherResult.propertyName_cityName)]
        ]), conversations_1.Condition.valueEquals(weatherResult0.getValue(types_1.WeatherResult.propertyName_cityName), "Seattle"));
        return artifacts;
    }
}
exports.SkillABuilder = SkillABuilder;
