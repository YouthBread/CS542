﻿(function () {

    angular
        .module('app')
        .controller('itemController', itemController);

    itemController.$inject = ['ItemService', '$location', '$window', '$rootScope', 'AuthenticationService'];
    function itemController(ItemService, $location, $window, $rootScope, AuthenticationService) {
        var vm = this;
        vm.isAdmin = AuthenticationService.isAdmin;
        vm.hidden = true;
        vm.list1 = ["Legacy", "Hardcore Legacy", "Standard", "Hardcore"];
        vm.list2 = ["any", "Bow", "Claw", "Dagger", "One Hand Axe", "One Hand Mace", "One Hand Sword"
            , "Sceptre", "Staff", "Two Hand Axe", "Two Hand Mace", "Two Hand Sword", "Wand", "Body Armour", "Boots", "Gloves", "Helmet", "Shield", "Amulet", "Belt"
            , "Breach", "Currency", "Divination Card", "Essence", "Fishing Rods", "Flask", "Gem", "Jewel", "Leaguestone", "Map", "Prophecy", "Quiver", "Ring", "Map Fragments"];
        vm.list3 = ["any"];
        vm.list4 = ["Select", "Blessed Orb", "Cartographer's Chisel", "Chaos Orb", "Chromatic Orb", "Divine Orb", "Exalted Orb", "Gemcutter's Prism", "Jeweller's Orb",
            "Orb of Alchemy", "Orb of Alteration", "Orb of Chance", "Orb of Fusing", "Orb of Regret", "Orb of Scouring", "Regal Orb", "Vaal Orb", "Perandus Coin", "Silver Coin"];
        vm.list5 = ["any", "Normal", "Magic", "Rare", "Unique", "Relic"];
        vm.list6 = ["either", "Yes", "No"];
        vm.list7 = ["either", "Yes", "No"];
        vm.list8 = ['+X Accuracy Rating per X Intelligence', '+X Armour per active Totem', '+X Armour while stationary', '+X Energy Shield gained for each Enemy hit by your Attacks', '+X Energy Shield gained on Kill', '+X Energy Shield gained on Kill per Level', '+X Energy Shield gained on Killing a Shocked Enemy', '+X Intelligence Requirement', '+X Life and Mana gained for each Enemy hit', '+X Life gained for each Enemy hit by Attacks', '+X Life gained for each Enemy hit by your Attacks', '+X Life gained for each Enemy hit by your Spells', '+X Life gained for each Ignited Enemy hit by your Attacks', '+X Life gained for each enemy hit by Supported Attack', '+X Life gained on Kill', '+X Life gained on Kill per Frenzy Charge', '+X Life gained on Kill per Level', '+X Life gained on Killing Ignited Enemies', '+X Life gained when you Block', '+X Life per X Dexterity', '+X Mana gained for each Enemy hit by Attacks', '+X Mana gained for each Enemy hit by your Attacks', '+X Mana gained on Kill', '+X Mana gained on Kill per Level', '+X Mana gained on Killing a Frozen Enemy', '+X Mana gained when you Block', '+X Mana per X Strength', '+X Strength Requirement', '+X maximum Energy Shield per X Strength', '+X to Accuracy Rating', '+X to Armour', '+X to Armour and Evasion Rating', '+X to Armour while Frozen', '+X to Dexterity', '+X to Dexterity and Intelligence', '+X to Evasion Rating', '+X to Explosion Radius per Fuse Charge', '+X to Intelligence', '+X to Level of Active Socketed Skill Gems', '+X to Level of Socketed Aura Gems', '+X to Level of Socketed Bow Gems', '+X to Level of Socketed Chaos Gems', '+X to Level of Socketed Cold Gems', '+X to Level of Socketed Curse Gems', '+X to Level of Socketed Dexterity Gems', '+X to Level of Socketed Elemental Gems', '+X to Level of Socketed Fire Gems', '+X to Level of Socketed Gems', '+X to Level of Socketed Golem Gems', '+X to Level of Socketed Lightning Gems', '+X to Level of Socketed Melee Gems', '+X to Level of Socketed Minion Gems', '+X to Level of Socketed Movement Gems', '+X to Level of Socketed Spell Gems', '+X to Level of Socketed Strength Gems', '+X to Level of Socketed Support Gems', '+X to Level of Socketed Vaal Gems', '+X to Level of Socketed Warcry Gems', '+X to Level of Supported Active Skill Gems', '+X to Maximum Charges', '+X to Maximum Endurance Charges', '+X to Maximum Energy Shield per Blue Socket', '+X to Maximum Frenzy Charges', '+X to Maximum Life per Red Socket', '+X to Maximum Mana per Green Socket', '+X to Maximum Power Charges', '+X to Melee Weapon Range', '+X to Melee Weapon Range per White Socket', '+X to Melee Weapon and Unarmed range', '+X to Strength', '+X to Strength and Dexterity', '+X to Strength and Intelligence', '+X to Weapon range', '+X to Zombie maximum Life', '+X to all Attributes', '+X to maximum Energy Shield', '+X to maximum Life', '+X to maximum Mana', '+X to maximum number of Skeletons', '+X to maximum number of Spectres', '+X to maximum number of Zombies', '+X to radius', '+X% Chance to Block', '+X% Chance to Block with Shields', '+X% Chaos Resistance when on Low Life', '+X% Monster Chaos Resistance', '+X% Monster Cold Resistance', '+X% Monster Elemental Resistance', '+X% Monster Fire Resistance', '+X% Monster Lightning Resistance', '+X% Monster Physical Damage Reduction', '+X% Unarmed Critical Strike Chance', '+X% additional Block Chance against Projectiles', '+X% chance to be Ignited', '+X% chance to be Pierced by Projectiles', '+X% chance to be Shocked', '+X% to Chaos Resistance', '+X% to Chaos Resistance while using a Flask', '+X% to Cold Resistance', '+X% to Cold Resistance when Socketed with a Green Gem', '+X% to Cold and Lightning Resistances', '+X% to Critical Strike Chance', '+X% to Critical Strike Multiplier for Spells', '+X% to Critical Strike Multiplier', '+X% to Critical Strike Multiplier while Dual Wielding', '+X% to Critical Strike Multiplier with Cold Skills', '+X% to Critical Strike Multiplier with Elemental Skills', '+X% to Critical Strike Multiplier with Fire Skills', '+X% to Critical Strike Multiplier with Lightning Skills', '+X% to Critical Strike Multiplier with One Handed Melee Weapons', '+X% to Critical Strike Multiplier with Two Handed Melee Weapons', '+X% to Fire Resistance', '+X% to Fire Resistance when Socketed with a Red Gem', '+X% to Fire Resistance while on Low Life', '+X% to Fire and Cold Resistances', '+X% to Fire and Lightning Resistances', '+X% to Global Critical Strike Multiplier', '+X% to Global Critical Strike Multiplier per Green Socket', '+X% to Lightning Resistance', '+X% to Lightning Resistance when Socketed with a Blue Gem', '+X% to Melee Critical Strike Multiplier', '+X% to Monster Critical Strike Multiplier', '+X% to Quality of Socketed Support Gems', '+X% to Quality of Supported Active Skill Gems', '+X% to all Elemental Resistances', '+X% to all Elemental Resistances while on Low Life', '+X% to all maximum Elemental Resistances during Flask effect', '+X% to all maximum Resistances', '+X% to maximum Block Chance', '+X% to maximum Cold Resistance', '+X% to maximum Fire Resistance', '+X% to maximum Lightning Resistance', '-X Chaos Damage taken', '-X Fire Damage taken when Hit', '-X Physical Damage taken from Attacks', '-X Physical Damage taken from Projectile Attacks', '-X Physical Damage taken when Hit by Animals', '-X to Accuracy Rating', '-X to Mana Cost of Skills', '-X to Maximum Endurance Charges', '-X to Maximum Frenzy Charges', '-X to Maximum Power Charges', '-X% Chance to Block', '-X% maximum Player Resistances', '-X% to Cold Resistance', '-X% to Fire Resistance', '-X% to Global Critical Strike Multiplier', '-X% to Lightning Resistance', '-X% to all Elemental', 'A stack of unknown divination cards', 'Acrobatics', 'Additional Debuff stages add X% of Damage', 'Additional X seconds Base Duration per extra Corpse consumed', 'Additional X% Shield Block Chance', 'Adds Knockback during Flask effect', 'Adds Knockback to Melee Attacks during Flask effect', 'Adds X maximum Lightning Damage to Attacks per X Dexterity Allocated in Radius', 'Adds X to Maximum Life per X Intelligence Allocated in Radius', 'Adds X to X Chaos Damage', 'Adds X to X Chaos Damage in Off Hand', 'Adds X to X Chaos Damage to Attacks', 'Adds X to X Chaos Damage to Spells', 'Adds X to X Cold Damage', 'Adds X to X Cold Damage in Off Hand', 'Adds X to X Cold Damage to Attacks', 'Adds X to X Cold Damage to Counterattacks', 'Adds X to X Cold Damage to Spells', 'Adds X to X Cold Damage to Spells and Attacks', 'Adds X to X Cold Damage to Spells per Power Charge', 'Adds X to X Fire Attack Damage per Buff on You', 'Adds X to X Fire Damage', 'Adds X to X Fire Damage in Main Hand', 'Adds X to X Fire Damage to Attacks', 'Adds X to X Fire Damage to Attacks against Ignited Enemies', 'Adds X to X Fire Damage to Attacks with Bows', 'Adds X to X Fire Damage to Spells', 'Adds X to X Fire Spell Damage per Buff on You', 'Adds X to X Lightning Damage', 'Adds X to X Lightning Damage to Attacks', 'Adds X to X Lightning Damage to Attacks during Flask effect', 'Adds X to X Lightning Damage to Attacks while Unarmed', 'Adds X to X Lightning Damage to Spells', 'Adds X to X Lightning Damage to Spells and Attacks', 'Adds X to X Lightning Damage to Spells during Flask effect', 'Adds X to X Lightning Damage to Spells while Unarmed', 'Adds X to X Physical Damage', 'Adds X to X Physical Damage to Attacks', 'Adds X to X Physical Damage to Attacks against Frozen Enemies', 'Adds X to X Physical Damage to Attacks per X Dexterity', 'Adds X to X Physical Damage to Attacks with Bows', 'Adds X-X Fire Damage to Spells and Attacks', 'Aura Buffs do not affect you', 'Always Freezes enemies', 'Always Poison on Hit', 'Amulet: (X-X)% increased Armour', 'Amulet: (X-X)% increased Evasion Rating', 'Amulet: (X-X)% increased Global Critical Strike Chance', 'Amulet: (X-X)% increased maximum Energy Shield', 'Amulet: (X-X)% to Global Critical Strike Multiplier', 'Amulet: Adds (X-X) to (X-X) Physical Damage to Attacks', 'Amulet: X% chance to Recover X% of Maximum Mana when you use a Skill', 'Amulet: X% increased Life Leeched per second', 'Amulet: X% increased effect of Fortify on You', 'Amulet: X% of Chaos Damage Leeched as Life', 'Applies level X Elemental Weakness on Blocking a Spell', 'Applies level X Punishment on Blocking a Melee Attack', 'Applies level X Temporal Chains on Blocking a Projectile Attack', 'Area becomes fatal after some time', 'Area contains a Large Chest', 'Area contains many Totems', 'Area contains no monsters', 'Area contains two Unique Bosses', 'Area has X seconds between monster waves', 'Area has X waves of monsters', 'Area has increased monster variety', 'Area has patches of burning ground', 'Area has patches of chilled ground', 'Area has patches of desecrated ground', 'Area has patches of shocking ground', 'Area is a Maze', 'Area is a large Maze', 'Area is inhabited by Abominations', 'Area is inhabited by Animals', 'Area is inhabited by Demons', 'Area is inhabited by Goatmen', 'Area is inhabited by Humanoids', 'Area is inhabited by Sea Witches and their Spawn', 'Area is inhabited by Skeletons', 'Area is inhabited by Undead', 'Area is inhabited by X additional Rogue Exiles', 'Area is inhabited by ranged monsters', 'Armour is increased by Uncapped Fire Resistance', 'Armour: (X-X) to maximum Energy Shield', 'Armour: (X-X) to maximum Life', 'Armour: (X-X)% to Chaos Resistance', 'Armour: (X-X)% to Cold Resistance', 'Armour: (X-X)% to Fire Resistance', 'Armour: (X-X)% to Lightning Resistance', 'Armour: Minions have (X-X)% increased maximum Life', 'Arrows always Pierce', 'Arrows always Pierce after Chaining', 'Arrows that Pierce cause Bleeding', 'Attack Projectiles Return to You after hitting targets', 'Attack skills can have X additional Totem Summoned at a time', 'Attack with level X Bone Nova when you Kill a Bleeding Enemy', 'Attacks Cause Bleeding when Hitting Cursed Enemies', 'Attacks Chain an additional time when in Main Hand', 'Attacks have Blood Magic', 'Attacks have an additional Projectile when in Off Hand', 'Attacks used by Totem have X% less Attack Speed', 'Attacks with +X to Melee range', 'Attacks with this Weapon Maim on hit', 'Attacks with this Weapon Penetrate X% Elemental Resistances', 'Attacks with this Weapon deal double Damage to Chilled Enemies', 'Attacks with this Weapon have X% increased Elemental Damage', 'Avatar of Fire', 'Base duration is X seconds', 'Base secondary duration is X seconds', 'Beams Split to hit X extra targets', 'Belt: (X-X) to Armour', 'Belt: (X-X) to maximum Energy Shield', 'Belt: (X-X)% chance to Avoid being Frozen', 'Belt: (X-X)% chance to Avoid being Ignited', 'Belt: (X-X)% chance to Avoid being Shocked', 'Belt: (X-X)% increased Flask Life Recovery rate', 'Belt: (X-X)% increased Flask Mana Recovery rate', 'Belt: (X-X)% increased Stun Duration on Enemies', 'Belt: (X-X)% increased Stun and Block Recovery', 'Belt: (X-X)% reduced Enemy Stun Threshold', 'Belt: (X-X)% to Chaos Resistance', 'Belt: (X-X)% to Cold Resistance', 'Belt: (X-X)% to Fire Resistance', 'Belt: (X-X)% to Lightning Resistance', 'Belt: +X% to Chaos Resistance while using a Flask', 'Belt: Damage Penetrates X% Elemental Resistances while using a Flask', 'Belt: Minions have (X-X)% increased maximum Life', 'Belt: Reflects (X-X) Physical Damage to Melee Attackers', 'Belt: X% additional Physical Damage Reduction while using a Flask', 'Belt: X% increased Movement Speed while using a Flask', 'Bleeding targets take X% of the Physical Damage Dealt per second', 'Bleeding targets take an additional X% of the Physical Damage Dealt per second while moving', 'Blind Chilled Enemies on Hit', 'Blood Magic', 'Body Armour: (X-X) to Armour', 'Body Armour: (X-X) to Evasion Rating', 'Body Armour: (X-X) to maximum Energy Shield', 'Body Armour: (X-X) to maximum Life', 'Body Armour: (X-X)% chance to Avoid Cold Damage when Hit', 'Body Armour: (X-X)% chance to Avoid Fire Damage when Hit', 'Body Armour: (X-X)% chance to Avoid Lightning Damage when Hit', 'Body Armour: Gain Onslaught for X seconds when Hit', 'Body Armour: X% increased Area of Effect of Area Skills', 'Body Armour: X% of Physical Damage taken as Cold Damage', 'Body Armour: X% reduced Chaos Damage taken over time', 'Boots: (X-X) to Evasion Rating', 'Boots: (X-X) to maximum Energy Shield', 'Boots: (X-X) to maximum Life', 'Boots: Cannot be Poisoned', 'Boots: Drops Burning Ground while moving, dealing X Fire Damage per second', 'Boots: X% increased Movement Speed', 'Boots: X% increased Movement speed while on Burning, Chilled or Shocked ground', 'Boots: X% reduced Elemental Damage Taken while stationary', 'Bow Knockback at Close Range', 'Bow: +X to Level of Socketed Bow Gems', 'Buff is applied for a Base Duration of X seconds', 'Burning Debuff can have a maximum of X stages', 'Burning Hoofprints', 'Can Summon up to X Golem at a time', 'Can Summon up to X additional Golem at a time', 'Can deal X to X base Cold Damage', 'Can deal X to X base Fire Damage', 'Can deal X to X base Lightning Damage', 'Can have X additional Siege Ballista Totem per X Dexterity', 'Can have multiple Crafted Mods', 'Can have up to X active spinning blades', 'Can have up to X additional Remote Mines placed at a time', 'Can have up to X additional Totem summoned at a time', 'Can have up to X additional Trap placed at a time', 'Can have up to X additional Traps placed at a time', 'Can raise up to X Spectre at a time', 'Can raise up to X Zombies at a time', 'Can summon up to X Animated Weapons at a time', 'Can summon up to X Raging Spirits at a time', 'Can summon up to X Skeletons at a time', 'Can use Items requiring up to level X', 'Cannot Ignite', 'Cannot Knock Enemies Back', 'Cannot Leech', 'Cannot Leech Life from Critical Strikes', 'Cannot Leech Life from Monsters', 'Cannot Leech Mana', 'Cannot Leech Mana from Monsters', 'Cannot Leech when on Low Life', 'Cannot apply Shock', 'Cannot be Blinded', 'Cannot be Chilled', 'Cannot be Chilled while you have Onslaught', 'Cannot be Frozen', 'Cannot be Frozen, Chilled or Ignited with Her Blessing', 'Cannot be Ignited', 'Cannot be Ignited while on Low Life', 'Cannot be Knocked Back', 'Cannot be Poisoned', 'Cannot be Shocked', 'Cannot be Stunned', 'Cannot be Stunned when on Low Life', 'Cannot be inflicted with Bleeding', 'Cannot be used with Chaos Inoculation', 'Cannot cause Bleeding', 'Cannot gain Power Charges', 'Cannot roll Attack Mods', 'Cannot roll Caster Mods', 'Cast Socketed Minion Spells on Kill with this Weapon',
            , 'Casts level X Spectral Spirits when equipped', 'Causes Bleeding on Hit', 'Causes Bleeding on Hit for X seconds', 'Causes Bleeding on Melee Critical Strike', 'Causes X Explosions', 'Causes smaller novas up to X times on enemies hit', 'Celestial Footprints', 'Chain +X Times', 'Chaos Damage does not bypass Energy Shield', 'Chaos Damage does not bypass Energy Shield during effect', 'Chaos Damage does not bypass Energy Shield while not on Low Life or Low Mana', 'Chests have X% increased Item Rarity', 'Chill Enemy for X second when Hit', 'Chill Enemy for X seconds when Hit', 'Chill and Freeze duration on you is based on X% of Energy Shield', 'Conduit', 'Consumes Frenzy Charges on use', 'Contains the Immortalised Grandmasters'
            , 'Corrupts an item, modifying it unpredictably', 'Corrupts the Essences trapping a monster, modifying them unpredictably', 'Counterattack with this Skill when you Block', 'Counts as Dual Wielding', 'Counts as all One Handed Melee Weapon Types', 'Cover Enemies in Ash when they Hit you', 'Create Consecrated Ground when you Shatter an Enemy', 'Creates Chilled Ground on Use', 'Creates Consecrated Ground on Critical Strike', 'Creates Consecrated Ground on Use', 'Creates Corpses up to Level X', 'Creates X Corpses', 'Creates X explosions', 'Creates a Smoke Cloud on Rampage', 'Creates a Smoke Cloud on Use', 'Creates a mirrored copy of an item', 'Creates a portal to town', 'Creates an imprint of an item for later restoration', 'Critical Strike Chance is increased by Uncapped Lightning Resistance', 'Critical Strikes deal X% increased Lightning Damage', 'Critical Strikes deal no Damage', 'Critical Strikes do not always Freeze', 'Critical Strikes have Culling Strike', 'Culling Strike', 'Culling Strike against Burning Enemies', 'Curse Enemies with Flammability on Hit', 'Curse Enemies with Temporal Chains on Hit', 'Curse Enemies with level X Elemental Weakness on Hit', 'Curse Enemies with level X Temporal Chains on Hit', 'Curse Enemies with level X Vulnerability on Block', 'Curse Enemies with level X Vulnerability on Hit', 'Curse Reflection', 'Cursed enemies are X% slower', 'Cursed enemies deal X% less Damage', 'Cursed enemies grant X Life when Hit by Attacks', 'Cursed enemies grant X Life when Killed', 'Cursed enemies grant X Mana when Hit by Attacks', 'Cursed enemies grant X Mana when Killed', 'Cursed enemies grant X% Life Leech when Hit', 'Cursed enemies grant X% Mana Leech when Hit', 'Cursed enemies grant X% increased Attack Speed on Melee hit', 'Cursed enemies grant X% increased Flask Charges', 'Cursed enemies grant X% more Physical Melee Damage on Melee hit', 'Cursed enemies have +X% chance to be Frozen by Cold Damage', 'Cursed enemies have +X% chance to be Ignited by Fire Damage', 'Cursed enemies have +X% chance to be Shocked by Lightning Damage', 'Cursed enemies have -X% to Cold Resistance', 'Cursed enemies have -X% to Critical Strike Multiplier', 'Cursed enemies have -X% to Elemental Resistances', 'Cursed enemies have -X% to Fire Resistance', 'Cursed enemies have -X% to Lightning Resistance', 'Cursed enemies have X% less Evasion', 'Cursed enemies have X% reduced Accuracy Rating', 'Cursed enemies have X% reduced Critical Strike Chance', 'Cursed enemies have X% reduced Stun and Block Recovery', 'Cursed enemies have a X% chance to grant a Frenzy Charge when slain', 'Cursed enemies have a X% chance to grant a Power Charge when slain', 'Cursed enemies have a X% chance to grant an Endurance Charge when slain', 'Cursed enemies have an additional X% chance to be Stunned', 'Cursed enemies have an additional X% chance to receive a Critical Strike', 'Cursed enemies take X% increased Damage from Projectiles', 'Cursed enemies take X% increased Physical damage', 'Cursed enemies take X% increased damage from Damage Over Time effects', 'Cursed enemies take X% increased extra damage from Critical Strikes', 'Curses have X% reduced effect on Monsters', 'Curses in this item are reflected back to you', 'Curses on Slain Enemies are transferred to a nearby Enemy', 'Damage Penetrates X% Cold Resistance', 'Damage Penetrates X% Cold Resistance against Chilled Enemies', 'Damage Penetrates X% Elemental Resistances', 'Damage Penetrates X% Elemental Resistances while using a Flask', 'Damage Penetrates X% Fire Resistance', 'Damage Penetrates X% Lightning Resistance', 'Damage Penetrates X% Lightning Resistance during Flask effect', 'Damage cannot be Reflected', 'Deal no Elemental Damage', 'Deal no Physical Damage', 'Deals X Base Chaos Damage per second', 'Deals X Base Cold Damage per second', 'Deals X Chaos Damage per second to nearby Enemies', 'Deals X Fire Damage per second', 'Deals X to X Chaos Damage', 'Deals X to X Cold Damage', 'Deals X to X Fire Damage', 'Deals X to X Lightning Damage', 'Deals X to X Physical Damage', 'Deals X to X base Cold Damage per Frenzy Charge', 'Deals X to X base Fire Damage per Endurance Charge', 'Deals X to X base Lightning Damage per Power Charge', 'Deals X% of Base Attack Damage', 'Deals X% of Base Damage', 'Debuff applies -X% Fire Resistance per stage', 'Debuff can have up to X layers of Damage', 'Dexterity and Intelligence from passives in Radius count towards Strength Melee Damage bonus', 'Dexterity from Passives in Radius is Transformed to Intelligence', 'Dexterity from Passives in Radius is Transformed to Strength', 'Dispels Elemental Status Ailments on Rampage', 'Downgrades a map on the Atlas', 'Drops Burning Ground while moving, dealing X Fire Damage per second', 'Elemental Resistances are Zero', 'Elemental Status Effects caused by Supported Skills spread to other enemies', 'Enchants a magic item with a new random property', 'Enchants a rare item with a new random property', 'Enemies Burn for X% of your maximum Energy Shield per second as Fire Damage', 'Enemies Burn for X% of your maximum Life per second as Fire Damage', 'Enemies Cannot Leech Life From You', 'Enemies Cannot Leech Mana From You', 'Enemies Chilled by you take X% increased Burning Damage', 'Enemies Frozen by you take X% increased Damage', 'Enemies Ignited by an Attack Burn X% faster', 'Enemies can have X additional Curse', 'Enemies killed by Zombies explode dealing Fire Damage', 'Enemies killed explode dealing X% of their Life as Fire Damage', 'Enemies lose X% Cold Resistance while Frozen', 'Enemies you Attack Reflect X Physical Damage to you', 'Enemies you Kill have a X% chance to Explode, dealing a quarter of their maximum Life as Chaos Damage', 'Enemies you Shock have X% reduced Cast Speed', 'Enemies you Shock have X% reduced Movement Speed', 'Enemies you hit are destroyed on Kill', 'Eternal Iron Hook', 'Evasion Rating is increased by Uncapped Cold Resistance', 'Explosion deals X % less Damage', 'Extra gore', 'Ezomite Shell Hook', 'Final Boss drops higher Level Items', 'Fires Projectiles at all nearby Enemies', 'First Hit deals X% less Damage', 'Flasks apply to your Zombies and Spectres', 'Flasks do not apply to You', 'Found Magic Items drop Identified', 'Freezes enemies as though dealing X% more Damage', 'Freezes on Cursed enemies have X% increased Duration', 'Gain +X Life when you Taunt an Enemy', 'Gain +X Mana when you hit a Taunted Enemy', 'Gain Her Blessing for X seconds when you Ignite an Enemy', 'Gain Immunity to Physical Damage for X seconds on Rampage', 'Gain Onslaught for X second per Frenzy Charge on use', 'Gain Onslaught for X seconds on Killing a Shocked Enemy', 'Gain Onslaught for X seconds when Hit', 'Gain Rampage while at Maximum Endurance Charges', 'Gain Soul Eater while using a Flask', 'Gain Unholy Might during Flask Effect', 'Gain Unholy Might for X seconds on Critical Strike', 'Gain Unholy Might for X seconds on Rampage', 'Gain X Armour per Grand Spectrum', 'Gain X Life when an Endurance Charge expires or is consumed', 'Gain X Mana per Grand Spectrum', 'Gain X Souls for Vaal Skills on Rampage', 'Gain X% of Bow Physical Damage as Extra Damage of an Element', 'Gain X% of Bow Physical Damage as Extra Damage of each Element', 'Gain X% of Cold Damage as Extra Chaos Damage', 'Gain X% of Cold Damage as Extra Fire Damage', 'Gain X% of Elemental Damage as Extra Chaos Damage', 'Gain X% of Elemental Damage as Extra Chaos Damage during effect', 'Gain X% of Fire Damage as Extra Chaos Damage', 'Gain X% of Lightning Damage as Extra Chaos Damage', 'Gain X% of Physical Damage as Extra Chaos Damage', 'Gain X% of Physical Damage as Extra Chaos Damage during effect', 'Gain X% of Physical Damage as Extra Cold Damage', 'Gain X% of Physical Damage as Extra Cold Damage during effect', 'Gain X% of Physical Damage as Extra Damage of a random Element', 'Gain X% of Physical Damage as Extra Fire Damage', 'Gain X% of Physical Damage as Extra Lightning Damage', 'Gain X% of your Physical Damage as Extra Chaos Damage', 'Gain X% of your Physical Damage as Extra Fire Damage', 'Gain a Flask Charge when you deal a Critical Strike', 'Gain a Frenzy Charge if an Attack Ignites an Enemy', 'Gain a Frenzy Charge on Critical Strike', 'Gain a Frenzy Charge on Hit while Bleeding', 'Gain a Frenzy Charge on reaching Maximum Power Charges', 'Gain a Power Charge for each Enemy you hit with a Critical Strike', 'Gain a Power Charge on non-Critical Strike', 'Gain an Endurance Charge if you Stun an Enemy with Melee Damage', 'Gain an Endurance Charge when a Power Charge expires or is consumed', 'Gain an Endurance Charge when you take a Critical Strike', 'Gains no Charges during Effect of any Overflowing Chalice Flask', 'Ghost Reaver', 'Gloves: (X-X) to Evasion Rating', 'Gloves: (X-X) to maximum Energy Shield', 'Gloves: (X-X) to maximum Life', 'Gloves: (X-X)% chance to Avoid being Stunned', 'Gloves: (X-X)% increased Attack Speed', 'Gloves: (X-X)% increased Global Critical Strike Chance', 'Gloves: Adds (X-X) to (X-X) Cold Damage to Attacks', 'Gloves: Adds (X-X) to (X-X) Fire Damage to Attacks', 'Gloves: Adds (X-X) to (X-X) Lightning Damage to Attacks', 'Gloves: Adds (X-X) to (X-X) Physical Damage to Attacks', 'Gloves: Adds X to (X-X) Lightning Damage to Attacks', 'Gloves: Adds X to X Physical Damage to Attacks', 'Gloves: Socketed Gems deal X to X additional Fire Damage', 'Gloves: Socketed Gems deal X% more Damage over Time', 'Gloves: Socketed Gems have +X% Critical Strike Chance', 'Gloves: Socketed Gems have X% more Attack and Cast Speed', 'Glows while in an Area containing a Unique Fish', 'Golem Skills have X% increased Cooldown Recovery Speed', 'Golems Grant X% increased Accuracy', 'Golems Grant X% increased Critical Strike Chance', 'Golems Grant X% increased Damage', 'Golems Summoned in the past X seconds deal X% increased Damage', 'Golems grant X Life Regenerated per second', 'Golems grant X% additional Physical Damage Reduction', 'Golems grant X% increased Attack and Cast Speed', 'Golems have +X to Armour', 'Golems have X% increased Attack and Cast Speed', 'Golems have X% increased Cooldown Recovery Speed', 'Golems have X% increased Maximum Life', 'Golems regenerate X% of their Maximum Life per second', 'Gore Footprints', 'Grants Fortify on Melee hit', 'Grants Minions +X% Chance to Block Attacks', 'Grants Minions +X% Chance to Block Spells', 'Grants Minions X% increased Attack Speed', 'Grants Minions X% increased Cast Speed', 'Grants Minions X% increased Movement Speed', 'Grants X% of Life Recovery to Minions', 'Grants a passive skill refund point', 'Grants level X Anger Skill', 'Grants level X Assassin', 'Grants level X Bear Trap Skill', 'Grants level X Clarity Skill', 'Grants level X Conductivity Skill', 'Grants level X Determination Skill', 'Grants level X Discipline Skill', 'Grants level X Elemental Weakness Skill', 'Grants level X Envy Skill', 'Grants level X Flammability Skill', 'Grants level X Frostbite Skill', 'Grants level X Gluttony of Elements Skill', 'Grants level X Grace Skill', 'Grants level X Haste Skill', 'Grants level X Hatred Skill', 'Grants level X Icestorm Skill', 'Grants level X Illusory Warp Skill', 'Grants level X Lightning Warp Skill', 'Grants level X Projectile Weakness Skill', 'Grants level X Purity of Elements Skill', 'Grants level X Purity of Fire Skill', 'Grants level X Purity of Ice Skill', 'Grants level X Purity of Lightning Skill', 'Grants level X Reckoning Skill', 'Grants level X Summon Stone Golem', 'Grants level X Temporal Chains Skill', 'Grants level X Vitality Skill', 'Grants level X Vulnerability Curse Aura during Flask Effect', 'Grants level X Vulnerability Skill', 'Grants level X Wrath Skill', 'Has X Socket', 'Has no Sockets', 'Helmet: (X-X) to Armour', 'Helmet: (X-X) to Evasion Rating', 'Helmet: (X-X) to maximum Energy Shield', 'Helmet: (X-X) to maximum Life', 'Helmet: (X-X)% chance to Avoid being Stunned', 'Helmet: +X to Level of Socketed Aura Gems', 'Helmet: Socketed Gems deal X% more Elemental Damage', 'Helmet: Socketed Gems gain X% of Physical Damage as extra Lightning Damage', 'Helmet: Socketed Gems have X% chance to Ignite', 'Helmet: X% reduced Mana Reserved', 'Hits Enemies every X Seconds', 'Hits on Cursed Enemies have an additional X% chance to Knockback', 'Hits up to X additional enemies near the target', 'Identifies an item', 'If X Notables are Allocated in Radius, When you Kill a Rare monster, you gain X of its mods for X seconds', 'If you have X Primordial Jewels, can Summon up to X additional Golem at a time', 'Ignite on Cursed enemies has X% increased Duration', 'Ignited Enemies Burn X% faster', 'Ignited Enemies you hit are destroyed on Kill', 'Ignites for X% of Overkill Damage', 'Ignites your Skills cause spread to other Enemies within a Radius of X', 'Immune to Curses during Flask effect',
            'Immune to Poison during Flask Effect', 'Removes Shock on use', 'Implicit Modifier magnitudes are doubled', 'Improves the quality of a flask', 'Improves the quality of a gem', 'Improves the quality of a map', 'Improves the quality of a weapon', 'Improves the quality of an armour', 'Increases and Reductions to Cold Damage in Radius are Transformed to apply to Physical Damage', 'Increases and Reductions to Energy Shield in Radius are Transformed to apply to Armour at X % of their value', 'Increases and Reductions to Life in Radius are Transformed to apply to Energy Shield', 'Increases and Reductions to Life in Radius are Transformed to apply to Mana at X % of their value', 'Increases and Reductions to Minion Damage also affect you', 'Increases and Reductions to Physical Damage in Radius are Transformed to apply to Cold Damage', 'Increases and Reductions to Spell Damage also apply to Attacks', 'Increases and Reductions to other Damage Types in Radius are Transformed to apply to Fire Damage', 'Inflicts a random level X Curse on you when your Totems die', 'Instant Recovery', 'Instant Recovery when on Low Life', 'Intelligence from Passives in Radius is Transformed to Dexterity', 'Intelligence from Passives in Radius is Transformed to Strength', 'Iron Will', 'Item drops on Death if equipped by an Animated Guardian', 'Items and Gems have X% reduced Attribute Requirements', 'Karui Stone Hook', 'Kill Enemies that have X% Life or lower when Hit by Supported Skills', 'Knockback direction is reversed', 'Knocks Back Enemies in an Area on Flask use', 'Knocks Enemies Back on Hit', 'Leech applies instantly during Flask effect', 'Leech applies instantly on Critical Strike', 'Leeches X Life to you for each corpse consumed', 'Leeches X Mana to you for each corpse consumed', 'Left ring slot: X% increased Mana Regeneration Rate', 'Left ring slot: X% reduced Reflected Elemental Damage taken', 'Left ring slot: You cannot Recharge or Regenerate Energy Shield', 'Life Leech from Hits with this Weapon applies instantly', 'Light Radius is based on Energy Shield instead of Life', 'Locks enemy in place', 'Lose Souls gained from Soul Eater on Flask Use', 'Lose all Endurance Charges when Rampage ends', 'Lose all Power Charges on Critical Strike', 'Lose all Power Charges on reaching Maximum Power Charges', 'Magic Monster Packs each have a Bloodline Mod', 'Manifested Dancing Dervish dies when Rampage ends', 'Manifested Dancing Dervish disables both weapon slots', 'Melee Attacks Poison on Hit', 'Melee Attacks cause Bleeding', 'Melee Attacks have X% chance to Poison on Hit', 'Melee Attacks have X% chance to cause Bleeding', 'Melee Critical Strikes cause Bleeding', 'Melee Critical Strikes have X% chance to Poison the Enemy', 'Melee Critical Strikes have X% chance to cause Bleeding', 'Melee Weapon: (X-X)% increased Attack Speed', 'Melee Weapon: +X to Weapon range', 'Melee and Melee Weapon Type modifiers in Radius are Transformed to Bow Modifiers', 'Mercury Footprints', 'Mind Over Matter', 'Mine lasts X seconds', 'Mines can be Detonated an additional time', 'Minion Movement Speed is Capped', 'Minions Leech X% of Damage as Life against Poisoned Enemies', 'Minions Poison Enemies on Hit', 'Minions Recover X% of Maximum Life on Killing a Poisoned Enemy', 'Minions Recover X% of their Maximum Life when they Block', 'Minions Regenerate X% Life per second', 'Minions cannot be Blinded', 'Minions deal X% increased Damage', 'Minions deal X% increased Damage per X Dexterity', 'Minions deal X% increased Physical Damage with Melee Attacks', 'Minions deal X% less Damage', 'Minions deal X% more Damage', 'Minions gain +X% to all Elemental Resistances', 'Minions gain Unholy Might for X seconds on Kill', 'Minions gain X% of Physical Damage as Extra Cold Damage', 'Minions gain X% of their Maximum Life as'];
        vm.tempdatas = vm.list1;

        vm.history = history;
        vm.search = search;
        vm.logout = logout;
        vm.sidsort = sidsort;

        vm.change = function (x) {
            vm.item.name = x;
            vm.hidden = true;
        }

        vm.changeKeyValue = function (v) {

            var newDate = [];
            angular.forEach(vm.list1, function (data, index, array) {
                if (data.indexOf(v) >= 0) {
                    newDate.unshift(data);
                }
            });
            vm.list1 = newDate;

            vm.hidden = false;

            if (vm.list1.length == 0 || '' == v) {
                vm.list1 = vm.tempdatas;
            }
            //console.log($scope.datas);
        }

        vm.reloadRoute = function () {
            $window.location.reload();
        };

        function search() {
            ItemService.SearchItem(vm.item)
                .then(function (response) {
                    if (response != null) {
                        //use response to update page
                        $rootScope.itemsresultlog = response;
                        console.log($rootScope.itemsresultlog);
                        for (var i = 0, len = $rootScope.itemsresultlog.length; i < len; i++) {
                            if ($rootScope.itemsresultlog[i].name == "") {
                                $rootScope.itemsresultlog[i].name = "None";
                            } else {
                                var temp = $rootScope.itemsresultlog[i].name.split(">>");
                                $rootScope.itemsresultlog[i].name = temp[temp.length - 1];
                            }
                        }
                        $location.path('/item_resultlog');
                    } else {
                        FlashService.Error(response.message);
                        vm.dataLoading = false;
                    }
                });
        }

        function history() {
            ItemService.History()
                .then(function (response) {
                    if (typeof(response.retrieve_search_status) == "undefined") {
                        //use response to update page
                        response.sort(sidsort);
                        $rootScope.history = response;
                        $location.path('/history');
                    } else {
                        FlashService.Error(response.message);
                        vm.dataLoading = false;
                    }
                });
        }

        function logout() {
            AuthenticationService.isLogged = false;
            AuthenticationService.isAdmin = false;
            delete localStorage.token;
            $location.path("/");
        }

        function sidsort(a, b) {
            if (a.sid < b.sid)
                return 1;
            else if (a.sid > b.sid)
                return -1;
            else
                return 0;
        }

    }

})();