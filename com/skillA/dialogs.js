"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetWeatherDialog = void 0;
const conversations_1 = require("ask-smapi-model/conversations");
class GetWeatherDialog extends conversations_1.SuggestedDialog {
    constructor() {
        super(GetWeatherDialog.dialogName, "com.skillA.dialogs.GetWeatherDialog");
    }
}
exports.GetWeatherDialog = GetWeatherDialog;
GetWeatherDialog.dialogName = new conversations_1.ArtifactName("GetWeatherDialog");
