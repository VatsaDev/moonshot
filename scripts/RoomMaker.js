//vars for game
var rooms = 1;
var money = 15;
var GameOn = true;
var BossFight = false;

//story
var HenchmanArray = [
  "Demon Bahuamuth",
  "Beast Godzilla",
  "Abbadonian Priest",
  "Alien God",
];
var OccupationArray = ["Wizard", "Knight", "Rogue", "Priest"];
var KingdomArray = ["Avalon", "Deathmania", "rosey lands"];

var Henchman = HenchmanArray[Math.floor(Math.random() * HenchmanArray.length)];
var Occupation =
  OccupationArray[Math.floor(Math.random() * OccupationArray.length)];
var Kingdom = KingdomArray[Math.floor(Math.random() * KingdomArray.length)];

document.getElementById("kingdom").innerHTML = Kingdom;
document.getElementById("occupation").innerHTML = Occupation;
document.getElementById("henchman").innerHTML = Henchman;
document.getElementById("money").innerHTML = money;
document.getElementById("rooms").innerHTML = rooms;

//rooms
function MakeRoom() {
  var BrightnessArray = ["bright", "barely lit", "dark"];
  var BoxArray = ["Chest", "bin", "backpack", "sack", "capsule", "cornicoupia"];
  var MonsterArray = ["The Gate Guardian","An angel","A drill beast","a globoulous monster","a nymph","An ogre","A rogue mage","a sorcerer","A roc","a secretive beast","An army"]

  var Monster = MonsterArray[Math.floor(Math.random() * BoxArray.length)];
  var Box = BoxArray[Math.floor(Math.random() * BoxArray.length)];
  var Brightness =
    BrightnessArray[Math.floor(Math.random() * BrightnessArray.length)];

  document.getElementById("brightness").innerHTML = Brightness;
  document.getElementById("box").innerHTML = Box;
  document.getElementById("money").innerHTML = money;
  document.getElementById("rooms").innerHTML = rooms;
  document.getElementById("monster").innerHTML = Monster;

  rooms = rooms + 1;

  if (rooms == 5) {
    document.getElementById("watch").innerHTML = "he has taken notice";
  }

  if (rooms == 10) {
    document.getElementById("watch").innerHTML =
      "he has taken serious interest";
  }

  if (rooms == 15) {
    document.getElementById("watch").innerHTML = "he will fight you next room";
    BossFight = true;
  }

  if (rooms == 16 && BossFight == true) {
    bossfight();
  }
}

function GetMoney() {
  var MoreMoney = Math.floor(100 * Math.random());
  money = money + MoreMoney;
}

function bossfight() {
  var ChanceToWin = Math.floor(100 * Math.random());
  console.log("The boss fight has begun!!!");

  if (ChanceToWin <= 50) {
    document.getElementById("win/lose").innerHTML =
      "you have lost this eon. Refresh the page and reincarnate yourself, spirit of the good side. Or continue floating through rooms, collecting money as you desire";
  }

  if (ChanceToWin > 50) {
    document.getElementById("win/lose").innerHTML =
      "you have Won this eon. The spirit of evil has left to other lands";
  }
}
