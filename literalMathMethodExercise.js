let warmHugs = "Hi, I'm Olaf and I like warm hugs.";
warmHugs.toUpperCase
console.log(warmHugs.toUpperCase);
console.log(warmHugs.replace("ik", "ov"));


let beenImpaled = "Oh, look at that. I've been impaled"
console.log(beenImpaled);
console.log(beenImpaled.slice(-18));
console.log(beenImpaled.slice(18));
console.log(beenImpaled.slice(18, 36));
 
var skullBones = `I don't have a skull${"..."}or bones.`;
var dotDotDot = "...";
skullBones = `I don't have a skull${dotDotDot}or bones.`
console.log(skullBones);

console.log(Math.PI);
let randomNumber = Math.random();
randomNumber *= 3;
randomNumber++;
randomNumber = Math.floor (randomNumber);
console.log(randomNumber);