/*********************** VISUALS ***************************/

function createSelect(location, labelText, selectId) {
  let parent = document.getElementById(location);
  let container = document.getElementById("container");
  let innerDiv = document.createElement("div");
  let label = document.createElement("label");
  let select = document.createElement("select");

  innerDiv.classList.add("innerDiv");
  label.textContent = labelText;
  select.id = selectId;

  parent.appendChild(innerDiv);
  innerDiv.appendChild(label);
  innerDiv.appendChild(select);
}

function createOption(optionName) {
  let option = document.createElement("option");
  option.textContent = optionName;
  return option;
}

function createWeapon(name, type) {
  this.name = name;
  this.type = type;
}

function createTableOption(rowId, option) {
  let row = document.getElementById(rowId);
  let tHeader = document.createElement("th");
  tHeader.textContent = option;
  row.appendChild(tHeader);
}

function createCheckbox(location, labelName, checkboxId) {
  let parent = document.getElementById(location);
  let innerDiv = document.createElement("div");
  let checkbox = document.createElement("input");
  let label = document.createElement("label");

  checkbox.type = "checkbox";
  checkbox.id = checkboxId;
  innerDiv.classList.add("innerDiv");
  label.textContent = labelName;

  parent.appendChild(innerDiv);
  innerDiv.appendChild(checkbox);
  innerDiv.appendChild(label);
}

let ranks = [
  "Civilian",
  "Wanderer",
  "Journeyman",
  "Ranger",
  "Storyteller",
  "Dreamweaver",
  "Hero",
  "Legend"
];

let weapons = [];

let oneHandedWeapons = [
  "Gladius",
  "Mace",
  "Small Axe",
  "Small Dagger",
  "Cutlass",
  "Smithing Hammer",
  "Rapier",
  "Hunting Knife",
  "Shaman's Staff",
  "Apprentice's Staff",
  "Cursed Dagger"
];
for (let i = 0; i < oneHandedWeapons.length; i++) {
  let j = new createWeapon(oneHandedWeapons[i], "Melee one handed");
  weapons.push(j);
}

let twoHandedWeapons = ["Morning Star", "Naginata", "Broadsword", "Scythe"];
for (let i = 0; i < twoHandedWeapons.length; i++) {
  let j = new createWeapon(twoHandedWeapons[i], "Melee two handed");
  weapons.push(j);
}

let rangedWeapons = ["Longbow", "Standard Crossbow"];
for (let i = 0; i < rangedWeapons.length; i++) {
  let j = new createWeapon(rangedWeapons[i], "Ranged");
  weapons.push(j);
}

let status6 = ["Ocean's Razor*"];
for (let i = 0; i < status6.length; i++) {
  let j = new createWeapon(`${status6[i]}*`, "status6");
  weapons.push(j);
}

let status7 = ["Valikal Steamblade*"];
for (let i = 0; i < status7.length; i++) {
  let j = new createWeapon(`${status7[i]}*`, "status7");
  weapons.push(j);
}

let status8 = [
  "Adez K'Orgaz*",
  "Mir'Tyela*",
  "Rain Bow*",
  "Witch Blade*",
  "Ender Bow*",
  "Dual Nephrite Daggers*"
];
for (let i = 0; i < status8.length; i++) {
  let j = new createWeapon(`${status8[i]}`, "status8");
  weapons.push(j);
}

let status9 = ["Eykirris*", "Hellraiser*"];
for (let i = 0; i < status9.length; i++) {
  let j = new createWeapon(`${status9[i]}`, "status9");
  weapons.push(j);
}

let status10 = ["Aspergil*"];
for (let i = 0; i < status10.length; i++) {
  let j = new createWeapon(`${status10[i]}`, "status10");
  weapons.push(j);
}

for (let i = 0; i < weapons.length; i++) {
  if (weapons[i].name == "Cursed Dagger") {
    weapons[i].effect =
      "Curse - Upon each successful hit, the wielder takes +1 damage in exchange.";
  }
  if (weapons[i].name == "Adez K'Orgaz*") {
    weapons[i].effect =
      "For every successful attack, it gains +1 damage. Maximum +10. Resets after every fight.";
  }
  if (weapons[i].name == "Mir'Tyela*") {
    weapons[i].effect =
      "Adds +2 damage increase per round for up to 4 rounds. This damage stacks.";
  }
  if (weapons[i].name == "Eykirris*") {
    weapons[i].effect =
      "Spells get +2 extra damage (Elemental spells get +3 extra damage).";
  }
  if (weapons[i].name == "Valikal Steamblade*") {
    weapons[i].effect =
      "Target gets +4 points of burning damage per round, until they faint or the encounter ends.";
  }
  if (weapons[i].name == "Dual Nephrite Daggers*") {
    weapons[i].effect =
      "Armour protection is nullified. User experiences dread and despair, leading to -2 damage for their next roll.";
  }
  if (weapons[i].name == "Ocean's Razor*") {
    weapons[i].effect = "Weapon gains +2 to all attacks if used underwater.";
  }
  if (weapons[i].name == "Aspergil*") {
    weapons[i].effect =
      "Water based magic attacks gain +2 damage while Aspergil is equipped.";
  }
  if (weapons[i].name == "Rain Bow*") {
    weapons[i].effect =
      "Rains a shower of arrows that attacks multiple targets (maximum 3). Targets must be specified.";
  }
  if (weapons[i].name == "Witch Blade*") {
    weapons[i].effect =
      "Target is poisoned and loses 1hp per round. Target's attacks are 1 point weaker in every subsequent round. This does not stack. The effect ends at the end of the fight.";
  }
  if (weapons[i].name == "Ender Bow*") {
    weapons[i].effect = "Attack twice in the same round.";
  }
  if (weapons[i].name == "Hellraiser*") {
    weapons[i].effect =
      "Hellraiser rolls a 1d100, and if a 100 is rolled, it is an insta-kill.";
  }
}

createSelect("container", "Rank: ", "rank");
let rankSel = document.getElementById("rank");
for (let i = 0; i < ranks.length; i++) {
  rankSel.appendChild(createOption(ranks[i]));
}

createSelect("container", "Weapon: ", "weapon");
let weaponSel = document.getElementById("weapon");
for (let i = 0; i < weapons.length; i++) {
  weaponSel.appendChild(createOption(weapons[i].name));
}

createCheckbox("container", "Archery Mastery", "archery-mastery");

createCheckbox("container", "Melee Combat Mastery", "melee-mastery");

/*let submit = document.createElement("input");
submit.type = "submit";
submit.textContent = "Submit";
let innerDiv = document.createElement("div");
innerDiv.classList.add("innerDiv");
container.appendChild(innerDiv);
innerDiv.appendChild(submit); */

let table = document.createElement("table");
container.appendChild(table);

for (let i = 0; i < 2; i++) {
  let tr = document.createElement("tr");
  tr.id += `tr${i + 1}`;
  table.appendChild(tr);
}

createTableOption("tr1", "Dice Roll: ");

for (let i = 0; i < 6; i++) {
  let th = document.createElement("th");
  th.textContent += i + 1;
  tr1.appendChild(th);
}

createTableOption("tr2", "Damage: ");
let damageHeader = tr2.getElementsByTagName("th")[0];
damageHeader.id = "damage-header";

/************************* FUNCTIONALS *************************/

let roll = [1, 2, 3, 4, 5, 6];
let damage = [];

let rankOptions = document.getElementById("rank");

let weaponOptions = document.getElementById("weapon");

rankOptions.addEventListener("change", (e) => {
  tr2.innerHTML = "";
  createTableOption("tr2", "Damage: ");
  let damageHeader = tr2.getElementsByTagName("th")[0];
  damageHeader.id = "damage-header";
});

weaponOptions.addEventListener("change", (e) => {
  tr2.innerHTML = "";
  createTableOption("tr2", "Damage: ");
  let damageHeader = tr2.getElementsByTagName("th")[0];
  damageHeader.id = "damage-header";

  let p = document.createElement("p");
  p.id = "effect";
  container.appendChild(p);

  let weaponChoice = weaponOptions.value;
  for (let i = 0; i < weapons.length; i++) {
    if (weaponChoice === weapons[i].name) {
      if (weapons[i].hasOwnProperty("effect")) {
        let p = document.getElementById("effect");
        p.textContent = "";
        p.textContent = `Effect: ${weapons[i].effect}`;
      } else {
        let p = document.getElementById("effect");
        p.textContent = "";
      }
    }
  }
});

document.addEventListener("change", (e) => {
  console.log("Clicked");
  let rankChoice = rankOptions.value;
  let weaponChoice = weaponOptions.value;
  switch (rankChoice) {
    case "Civilian":
      for (let i = 0; i < weapons.length; i++) {
        if (weapons[i].name == weaponChoice) {
          console.log(weapons[i].type);
          switch (weapons[i].type) {
            case "Melee one handed":
              damage = [3, 4, 5, 6, 7];
              console.log(damage);
              break;
            case "Melee two handed":
              damage = [5, 6, 7, 8, 9];
              break;
            case "Ranged":
              damage = [4, 5, 6, 7, 8];
              break;
            case "status6":
              damage = [6, 7, 8, 9, 10];
              break;
            case "status7":
              damage = [7, 8, 9, 10, 11];
              break;
            case "status8":
              damage = [8, 9, 10, 11, 12];
              break;
            case "status9":
              damage = [9, 10, 11, 12, 13];
              break;
            case "status10":
              damage = [10, 11, 12, 13, 14];
          }
        }
      }
      break;
    case "Wanderer":
      for (let i = 0; i < weapons.length; i++) {
        if (weapons[i].name == weaponChoice) {
          switch (weapons[i].type) {
            case "Melee one handed":
              damage = [4, 5, 6, 7, 8];
              break;
            case "Melee two handed":
              damage = [6, 7, 8, 9, 10];
              break;
            case "Ranged":
              damage = [5, 6, 7, 8, 9];
              break;
            case "status6":
              damage = [7, 8, 9, 10, 11];
              break;
            case "status7":
              damage = [8, 9, 10, 11, 12];
              break;
            case "status8":
              damage = [9, 10, 11, 12, 13];
              break;
            case "status9":
              damage = [10, 11, 12, 13, 14];
              break;
            case "status10":
              damage = [11, 12, 13, 14, 15];
          }
        }
      }
      break;
    case "Journeyman":
      for (let i = 0; i < weapons.length; i++) {
        if (weapons[i].name == weaponChoice) {
          switch (weapons[i].type) {
            case "Melee one handed":
              damage = [5, 6, 7, 8, 9];
              break;
            case "Melee two handed":
              damage = [7, 8, 9, 10, 11];
              break;
            case "Ranged":
              damage = [6, 7, 8, 9, 10];
              break;
            case "status6":
              damage = [8, 9, 10, 11, 12];
              break;
            case "status7":
              damage = [9, 10, 11, 12, 13];
              break;
            case "status8":
              damage = [10, 11, 12, 13, 14];
              break;
            case "status9":
              damage = [11, 12, 13, 14, 15];
              break;
            case "status10":
              damage = [12, 13, 14, 15, 16];
          }
        }
      }
      break;
    case "Ranger":
      for (let i = 0; i < weapons.length; i++) {
        if (weapons[i].name == weaponChoice) {
          switch (weapons[i].type) {
            case "Melee one handed":
              damage = [6, 7, 8, 9, 10];
              break;
            case "Melee two handed":
              damage = [8, 9, 10, 11, 12];
              break;
            case "Ranged":
              damage = [7, 8, 9, 10, 11];
              break;
            case "status6":
              damage = [9, 10, 11, 12, 13];
              break;
            case "status7":
              damage = [10, 11, 12, 13, 14];
              break;
            case "status8":
              damage = [11, 12, 13, 14, 15];
              break;
            case "status9":
              damage = [12, 13, 14, 15, 16];
              break;
            case "status10":
              damage = [13, 14, 15, 16, 17];
          }
        }
      }
      break;
    case "Storyteller":
      for (let i = 0; i < weapons.length; i++) {
        if (weapons[i].name == weaponChoice) {
          switch (weapons[i].type) {
            case "Melee one handed":
              damage = [7, 8, 9, 10, 11];
              break;
            case "Melee two handed":
              damage = [9, 10, 11, 12, 13];
              break;
            case "Ranged":
              damage = [8, 9, 10, 11, 12];
              break;
            case "status6":
              damage = [10, 11, 12, 13, 14];
              break;
            case "status7":
              damage = [11, 12, 13, 14, 15];
              break;
            case "status8":
              damage = [12, 13, 14, 15, 16];
              break;
            case "status9":
              damage = [13, 14, 15, 16, 17];
              break;
            case "status10":
              damage = [14, 15, 16, 17, 18];
          }
        }
      }
      break;
    case "Dreamweaver":
      for (let i = 0; i < weapons.length; i++) {
        if (weapons[i].name == weaponChoice) {
          switch (weapons[i].type) {
            case "Melee one handed":
              damage = [8, 9, 10, 11, 12];
              break;
            case "Melee two handed":
              damage = [10, 11, 12, 13, 14];
              break;
            case "Ranged":
              damage = [9, 10, 11, 12, 13];
              break;
            case "status6":
              damage = [11, 12, 13, 14, 15];
              break;
            case "status7":
              damage = [12, 13, 14, 15, 16];
              break;
            case "status8":
              damage = [13, 14, 15, 16, 17];
              break;
            case "status9":
              damage = [14, 15, 16, 17, 18];
              break;
            case "status10":
              damage = [15, 16, 17, 18, 19];
          }
        }
      }
      break;
    case "Hero":
      for (let i = 0; i < weapons.length; i++) {
        if (weapons[i].name == weaponChoice) {
          switch (weapons[i].type) {
            case "Melee one handed":
              damage = [9, 10, 11, 12, 13];
              break;
            case "Melee two handed":
              damage = [11, 12, 13, 14, 15];
              break;
            case "Ranged":
              damage = [10, 11, 12, 13, 14];
              break;
            case "status6":
              damage = [12, 13, 14, 15, 16];
              break;
            case "status7":
              damage = [13, 14, 15, 16, 17];
              break;
            case "status8":
              damage = [14, 15, 16, 17, 18];
              break;
            case "status9":
              damage = [15, 16, 17, 18, 19];
              break;
            case "status10":
              damage = [16, 17, 18, 19, 20];
          }
        }
      }
      break;
    case "Legend":
      for (let i = 0; i < weapons.length; i++) {
        if (weapons[i].name == weaponChoice) {
          switch (weapons[i].type) {
            case "Melee one handed":
              damage = [10, 11, 12, 13, 14];
              break;
            case "Melee two handed":
              damage = [12, 13, 14, 15, 16];
              break;
            case "Ranged":
              damage = [11, 12, 13, 14, 15];
              break;
            case "status6":
              damage = [13, 14, 15, 16, 17];
              break;
            case "status7":
              damage = [14, 15, 16, 17, 18];
              break;
            case "status8":
              damage = [15, 16, 17, 18, 19];
              break;
            case "status9":
              damage = [16, 17, 18, 19, 20];
              break;
            case "status10":
              damage = [17, 18, 19, 20, 21];
          }
        }
      }
  }

  let archeryMastery = document.getElementById("archery-mastery");
  let meleeMastery = document.getElementById("melee-mastery");
  if (archeryMastery.checked === true) {
    console.log("Checked");
  }

  for (let i = 0; i < weapons.length; i++) {
    if (weapons[i].name == weaponChoice) {
      console.log("Weapon choice matches");
      if (
        (weapons[i].type === "Ranged" && archeryMastery.checked === true) ||
        (weaponChoice === "Rain Bow*" && archeryMastery.checked === true) ||
        (weaponChoice === "Ender Bow*" && archeryMastery.checked === true) ||
        (weaponChoice === "Mir'Tyela*" && archeryMastery.checked === true)
      ) {
        console.log("Ranged, checked");
        damage.shift();
        let valueOfLastIndex = damage[3];
        console.log(valueOfLastIndex);
        damage.push(valueOfLastIndex + 1);
        console.log(damage);
      }
      if (
        ([
          weapons[i].type === "Melee one handed" ||
            weapons[i].type === "Melee two handed"
        ] &&
          meleeMastery.checked === true) ||
        ([
          weaponChoice === "Adez K'orgaz*" ||
            weaponChoice === "Ocean's Razor*" ||
            weaponChoice === "Valikal Steamblade*" ||
            weaponChoice === "Witch Blade*" ||
            weaponChoice === "Dual Nephrite Daggers*" ||
            weaponChoice === "Eykirris*" ||
            weaponChoice === "Hellraiser*" ||
            weaponChoice === "Aspergil*"
        ] &&
          meleeMastery.checked === true)
      ) {
        console.log("Melee, checked");
        damage.shift();
        let valueOfLastIndex = damage[3];
        console.log(valueOfLastIndex);
        damage.push(valueOfLastIndex + 1);
        console.log(damage);
      }
    }
  }

  tr2.innerHTML = "";

  createTableOption("tr2", "Damage: ");
  let damageHeader = tr2.getElementsByTagName("th")[0];
  damageHeader.id = "damage-header";

  for (let i = 0; i < 6; i++) {
    let td = document.createElement("td");
    if (i === 0) {
      td.textContent = 0;
      td.classList.add("red");
    } else {
      td.textContent = damage[i - 1];
      td.classList.add("green");
    }
    tr2.appendChild(td);
  }
});
