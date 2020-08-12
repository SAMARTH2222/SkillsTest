import {APIAction, ArtifactName} from "ask-smapi-model/conversations";
import {CityName, Date, WeatherResult} from "./types";

export class GetWeatherAPIAction extends APIAction {
    static readonly actionName = new ArtifactName("GetWeatherAPIAction");
    static readonly argName_cityName = new ArtifactName("cityName");
    static readonly argName_date = new ArtifactName("date");
    
    constructor() {
        const cityNameArgType = new CityName().name;
        const dateArgType = new Date().name;
        const weatherResultReturnType = new WeatherResult().name;
        const args = new Map([ [GetWeatherAPIAction.argName_cityName, cityNameArgType], [GetWeatherAPIAction.argName_date, dateArgType] ]);
        
        super(GetWeatherAPIAction.actionName, "com.skillA.apis.GetWeatherAPIAction", args, weatherResultReturnType);
    }
}

