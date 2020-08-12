import { CityName, Date, Temperature, WeatherResult } from "./com/skillA/types";
import { GetWeatherForCityDateEvent, WhatIsTheWeatherEvent, YesEvent } from "./com/skillA/userEvents";
import { GetWeatherAPIAction } from "./com/skillA/apis";
import { RequestResponseAction, ConfirmResponseAction, NotifyResponseAction } from "./com/skillA/responses";
import { GetWeatherDialog } from "./com/skillA/dialogs";
import {
    Artifacts,
    Condition,
    ArtifactName,
    Action,
    TypeReference
} from "ask-smapi-model/conversations";

export class SkillABuilder {
    buildArtifacts(): Artifacts {
        // Create Types.
        const cityName = new CityName();
        const date = new Date();
        const temperature = new Temperature();
        const weatherResult = new WeatherResult();

        // Create Events.
        const whatIsTheWeatherEvent = new WhatIsTheWeatherEvent();
        const getWeatherForCityDateEvent = new GetWeatherForCityDateEvent();
        const yesEvent = new YesEvent();

        // Create Actions.
        const requestResponseAction1 = new RequestResponseAction();
        const confirmResponseAction = new ConfirmResponseAction();
        const notifyResponseAction = new NotifyResponseAction();
        const getWeatherAPIAction = new GetWeatherAPIAction();

        const getWeatherDialog = new GetWeatherDialog();

        const actionMap = new Map<ArtifactName, Action>();
        actionMap.set(requestResponseAction1.name, requestResponseAction1);
        actionMap.set(confirmResponseAction.name, confirmResponseAction);
        actionMap.set(notifyResponseAction.name, notifyResponseAction);
        actionMap.set(getWeatherAPIAction.name, getWeatherAPIAction);

        // Create Artifacts.
        const artifacts = new Artifacts(
            new Map([[cityName.name, cityName], [date.name, date], [temperature.name, temperature], [weatherResult.name, weatherResult]]),
            new Map([[whatIsTheWeatherEvent.name, whatIsTheWeatherEvent], [getWeatherForCityDateEvent.name, getWeatherForCityDateEvent], [yesEvent.name, yesEvent]]),
            actionMap,
            new Map([[getWeatherDialog.name, getWeatherDialog]]));

        // Create Dialog.
        
        // Turn 1
        const x = getWeatherDialog.receive(whatIsTheWeatherEvent, "x", artifacts);
        getWeatherDialog.respond(requestResponseAction1, undefined!, undefined!);

        // Turn 2
        const y = getWeatherDialog.receive(getWeatherForCityDateEvent, "y", artifacts);
        getWeatherDialog.respond(
            confirmResponseAction,
            new Map<ArtifactName, TypeReference>([
                [ConfirmResponseAction.argName_cityName, y.getValue(GetWeatherForCityDateEvent.argName_cityName)],
                [ConfirmResponseAction.argName_date, y.getValue(GetWeatherForCityDateEvent.argName_date)]
            ]),
            undefined!);

        // Turn 3
        const z = getWeatherDialog.receive(yesEvent, "z", artifacts);
        const weatherResult0 = getWeatherDialog.executeApi(
            getWeatherAPIAction,
            new Map<ArtifactName, TypeReference>([
                [GetWeatherAPIAction.argName_cityName, y.getValue(GetWeatherForCityDateEvent.argName_cityName)],
                [GetWeatherAPIAction.argName_date, y.getValue(GetWeatherForCityDateEvent.argName_date)]
            ]),
            "weatherResult0",
            undefined!,
            artifacts);
        getWeatherDialog.respond(
            notifyResponseAction,
            new Map<ArtifactName, TypeReference>([
                [NotifyResponseAction.argName_weatherResult, weatherResult0.getValue(WeatherResult.propertyName_cityName)]
            ]),
            Condition.valueEquals(weatherResult0.getValue(WeatherResult.propertyName_cityName), "Seattle"));

        return artifacts;
    }
}
