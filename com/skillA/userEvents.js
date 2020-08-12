"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YesEvent = exports.WhatIsTheWeatherEvent = exports.GetWeatherForCityDateEvent = void 0;
const conversations_1 = require("ask-smapi-model/conversations");
const types_1 = require("./types");
class GetWeatherForCityDateEvent extends conversations_1.UserEvent {
    constructor() {
        const samples = [
            "I want to get the weather report for {cityName} {date}",
            "How is the weather in {cityName} {date}"
        ];
        const cityNameType = new types_1.CityName().name;
        const dateType = new types_1.Date().name;
        const types = new Map([[GetWeatherForCityDateEvent.argName_cityName, cityNameType], [GetWeatherForCityDateEvent.argName_date, dateType]]);
        super(GetWeatherForCityDateEvent.eventName, "com.skillA.userEvents.GetWeatherForCityDateEvent", samples, types);
    }
}
exports.GetWeatherForCityDateEvent = GetWeatherForCityDateEvent;
GetWeatherForCityDateEvent.eventName = new conversations_1.ArtifactName("GetWeatherForCityDateEvent");
GetWeatherForCityDateEvent.argName_cityName = new conversations_1.ArtifactName("cityName");
GetWeatherForCityDateEvent.argName_date = new conversations_1.ArtifactName("date");
class WhatIsTheWeatherEvent extends conversations_1.UserEvent {
    constructor() {
        const samples = [
            "what is the weather",
            "what's the weather",
            "how is the weather",
            "tell me the weather"
        ];
        super(WhatIsTheWeatherEvent.eventName, "com.skillA.userEvents.GetWeatherForCityDateEvent", samples, undefined);
    }
}
exports.WhatIsTheWeatherEvent = WhatIsTheWeatherEvent;
WhatIsTheWeatherEvent.eventName = new conversations_1.ArtifactName("WhatIsTheWeatherEvent");
class YesEvent extends conversations_1.UserEvent {
    constructor() {
        const samples = [
            "yes",
            "sure",
            "alright"
        ];
        super(YesEvent.eventName, "com.skillA.userEvents.YesEvent", samples, undefined);
    }
}
exports.YesEvent = YesEvent;
YesEvent.eventName = new conversations_1.ArtifactName("YesEvent");
