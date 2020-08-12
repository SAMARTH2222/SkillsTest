import {SuggestedDialog, ArtifactName} from "ask-smapi-model/conversations";

export class GetWeatherDialog extends SuggestedDialog {
    static readonly dialogName = new ArtifactName("GetWeatherDialog");
    
    constructor() {
        super(GetWeatherDialog.dialogName, "com.skillA.dialogs.GetWeatherDialog");
    }
}

