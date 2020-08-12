import {Type, ArtifactName} from "ask-smapi-model/conversations";

export class CityName extends Type {
    static readonly typeName = new ArtifactName("CityName");

    constructor() {
        super(CityName.typeName, "com.skillA.types.CityName", "AMAZON.US_CITY", undefined!);
    }
}

export class Date extends Type {
    static readonly typeName = new ArtifactName("Date");

    constructor() {
        super(Date.typeName, "com.skillA.types.Date", "AMAZON.DATE", undefined!);
    }
}

export class Temperature extends Type {
    static readonly typeName = new ArtifactName("Temperature");

    constructor() {
        super(Temperature.typeName, "com.skillA.types.Temperature", "AMAZON.NUMBER", undefined!);
    }
}

export class WeatherResult extends Type {
    static readonly typeName = new ArtifactName("WeatherResult");
    static readonly propertyName_cityName = new ArtifactName("cityName");
    static readonly propertyName_highTemperature = new ArtifactName("highTemperature");
    static readonly propertyName_lowTemperature = new ArtifactName("lowTemperature");

    constructor() {
        const cityNameProperty = new CityName().name;
        const temperatureProperty = new Temperature().name;
        const properties = new Map([ [WeatherResult.propertyName_cityName, cityNameProperty], [WeatherResult.propertyName_highTemperature, temperatureProperty], [WeatherResult.propertyName_lowTemperature, temperatureProperty] ]);

        super(WeatherResult.typeName, "com.skillA.types.WeatherResult", undefined!, properties);
    }
}
