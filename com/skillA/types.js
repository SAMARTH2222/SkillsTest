"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherResult = exports.Temperature = exports.Date = exports.CityName = void 0;
const conversations_1 = require("ask-smapi-model/conversations");
class CityName extends conversations_1.Type {
    constructor() {
        super(CityName.typeName, "com.skillA.types.CityName", "AMAZON.US_CITY", undefined);
    }
}
exports.CityName = CityName;
CityName.typeName = new conversations_1.ArtifactName("CityName");
class Date extends conversations_1.Type {
    constructor() {
        super(Date.typeName, "com.skillA.types.Date", "AMAZON.DATE", undefined);
    }
}
exports.Date = Date;
Date.typeName = new conversations_1.ArtifactName("Date");
class Temperature extends conversations_1.Type {
    constructor() {
        super(Temperature.typeName, "com.skillA.types.Temperature", "AMAZON.NUMBER", undefined);
    }
}
exports.Temperature = Temperature;
Temperature.typeName = new conversations_1.ArtifactName("Temperature");
class WeatherResult extends conversations_1.Type {
    constructor() {
        const cityNameProperty = new CityName().name;
        const temperatureProperty = new Temperature().name;
        const properties = new Map([[WeatherResult.propertyName_cityName, cityNameProperty], [WeatherResult.propertyName_highTemperature, temperatureProperty], [WeatherResult.propertyName_lowTemperature, temperatureProperty]]);
        super(WeatherResult.typeName, "com.skillA.types.WeatherResult", undefined, properties);
    }
}
exports.WeatherResult = WeatherResult;
WeatherResult.typeName = new conversations_1.ArtifactName("WeatherResult");
WeatherResult.propertyName_cityName = new conversations_1.ArtifactName("cityName");
WeatherResult.propertyName_highTemperature = new conversations_1.ArtifactName("highTemperature");
WeatherResult.propertyName_lowTemperature = new conversations_1.ArtifactName("lowTemperature");
