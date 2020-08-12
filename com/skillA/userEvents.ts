import {UserEvent, ArtifactName} from "ask-smapi-model/conversations";
import {CityName, Date} from "./types";

export class GetWeatherForCityDateEvent extends UserEvent {
    static readonly eventName = new ArtifactName("GetWeatherForCityDateEvent");
    static readonly argName_cityName = new ArtifactName("cityName");
    static readonly argName_date = new ArtifactName("date");

    constructor() {
        const samples = [
            "I want to get the weather report for {cityName} {date}",
            "How is the weather in {cityName} {date}"
        ];
        
        const cityNameType = new CityName().name;
        const dateType = new Date().name;
        const types = new Map([ [GetWeatherForCityDateEvent.argName_cityName, cityNameType], [GetWeatherForCityDateEvent.argName_date, dateType] ]);
        
        super(GetWeatherForCityDateEvent.eventName, "com.skillA.userEvents.GetWeatherForCityDateEvent", samples, types);
    }
}

export class WhatIsTheWeatherEvent extends UserEvent {
    static readonly eventName = new ArtifactName("WhatIsTheWeatherEvent");
    
    constructor() {
        const samples = [
            "what is the weather",
            "what's the weather",
            "how is the weather",
            "tell me the weather"
        ];
        
        super(WhatIsTheWeatherEvent.eventName, "com.skillA.userEvents.GetWeatherForCityDateEvent", samples, undefined!);
    }
}

export class YesEvent extends UserEvent {
    static readonly eventName = new ArtifactName("YesEvent");
    
    constructor() {
        const samples = [
            "yes",
            "sure",
            "alright"
        ];
        
        super(YesEvent.eventName, "com.skillA.userEvents.YesEvent", samples, undefined!);
    }
}

