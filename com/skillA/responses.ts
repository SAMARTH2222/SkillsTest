import {
    ResponseAction,
    PromptTemplate,
    Templates,
    Situation,
    SituationDialogAct,
    ArtifactName
} from "ask-smapi-model/conversations";
import {CityName, Date, WeatherResult} from "./types";
import {GetWeatherAPIAction} from "./apis";

export class ConfirmResponseAction extends ResponseAction {
    static actionName = new ArtifactName("ConfirmResponseAction");
    static argName_cityName = new ArtifactName("cityName");
    static argName_date = new ArtifactName("date");
    
    constructor() {
        const templates = new Templates(new PromptTemplate("confirm_GetWeather_apla", "APL-A"));

        const cityNameArgType = new CityName().name;
        const dateArgType = new Date().name;
        const responseActionArgs = new Map([ [ConfirmResponseAction.argName_cityName, cityNameArgType], [ConfirmResponseAction.argName_date, dateArgType] ]);

        const situationArgs = [cityNameArgType, dateArgType];
        const situationDialogAct = new SituationDialogAct("Confirm", new GetWeatherAPIAction().name, undefined!, undefined!, situationArgs, undefined!, undefined!, undefined!);
        const situation = new Situation("", situationDialogAct);
        const situations = [situation];

        super(ConfirmResponseAction.actionName, "com.skillA.responses.ConfirmResponseAction", responseActionArgs, templates, situations);
    }
}

export class NotifyResponseAction extends ResponseAction {
    static actionName = new ArtifactName("NotifyResponseAction");
    static argName_weatherResult = new ArtifactName("weatherResult");

    constructor() {
        const templates = new Templates(new PromptTemplate("notify_api_response_GetWeather_apla", "APL-A"));

        const weatherResultArgType= new WeatherResult().name;
        const responseActionArgs = new Map([ [NotifyResponseAction.argName_weatherResult, weatherResultArgType] ]);

        const situationArgs = [weatherResultArgType];
        const situationDialogAct = new SituationDialogAct("Notify", new GetWeatherAPIAction().name, undefined!, "SUCCESS", situationArgs, undefined!, undefined!, undefined!);
        const situation = new Situation("", situationDialogAct);
        const situations = [situation];

        super(NotifyResponseAction.actionName, "com.skillA.responses.NotifyResponseAction", responseActionArgs, templates, situations);
    }
}

export class RequestResponseAction extends ResponseAction {
    static actionName = new ArtifactName("RequestResponseAction");
    static argName_cityName = new ArtifactName("cityName");
    static argName_date = new ArtifactName("date");
    
    constructor() {
        const templates = new Templates(new PromptTemplate("request_cityName_CityName_date_AMAZON.DATE_apla", "APL-A"));

        const cityNameArgType = new CityName().name;
        const dateArgType = new Date().name;
        const responseActionArgs = new Map([ [ConfirmResponseAction.argName_cityName, cityNameArgType], [ConfirmResponseAction.argName_date, dateArgType] ]);

        const situationArgs = [cityNameArgType, dateArgType];
        const situationDialogAct = new SituationDialogAct("Request", new GetWeatherAPIAction().name, undefined!, undefined!, situationArgs, undefined!, undefined!, undefined!);
        const situation = new Situation("", situationDialogAct);
        const situations = [situation];

        super(RequestResponseAction.actionName, "com.skillA.responses.RequestResponseAction", responseActionArgs, templates, situations);
    }
}

