"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skillABuilder_1 = require("./skillABuilder");
const dialogs_1 = require("./com/skillA/dialogs");
const conversations_1 = require("ask-smapi-model/conversations");
const skillABuilder = new skillABuilder_1.SkillABuilder();
const artifacts = skillABuilder.buildArtifacts();
const getWeatherDialog = artifacts.suggestedDialogs.get(dialogs_1.GetWeatherDialog.dialogName);
console.log("\n\nDialog:" + JSON.stringify(getWeatherDialog));
console.log("\n\nArtifacts: " + artifacts.stringify(artifacts));
getWeatherDialog.convertToGoldenConversations(artifacts, getWeatherDialog);
getWeatherDialog.convertToACDL(artifacts, getWeatherDialog);
// Initialize SMAPI client.
const smapiClient = new conversations_1.SMAPIClient();
smapiClient.generateSkillPackage(artifacts);
smapiClient.saveSkillPackage(artifacts);
