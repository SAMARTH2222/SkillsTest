echo "!!! Building Skill A !!!";
cd /Users/dsamarth/alexa-skills-kit-nodejs/SkillA/node_modules/ask-smapi-model
tsc
cd /Users/dsamarth/alexa-skills-kit-nodejs/SkillA/com/skillA
tsc
cd /Users/dsamarth/alexa-skills-kit-nodejs/SkillA
tsc
node skillA.js


