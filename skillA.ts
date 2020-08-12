import { SkillABuilder } from "./skillABuilder";
import { GetWeatherDialog } from "./com/skillA/dialogs";
import { SMAPIClient } from "ask-smapi-model/conversations";

const skillABuilder = new SkillABuilder();
const artifacts = skillABuilder.buildArtifacts();
const getWeatherDialog = artifacts.suggestedDialogs.get(GetWeatherDialog.dialogName)!;

console.log("\n\nDialog:" + JSON.stringify(getWeatherDialog));
console.log("\n\nArtifacts: " + artifacts.stringify(artifacts));
getWeatherDialog.convertToGoldenConversations(artifacts, getWeatherDialog);
getWeatherDialog.convertToACDL(artifacts, getWeatherDialog);

// Initialize SMAPI client.
const smapiClient = new SMAPIClient();

smapiClient.generateSkillPackage(artifacts);
smapiClient.saveSkillPackage(artifacts);
