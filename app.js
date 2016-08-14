webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/**
	 * Created by poiso_000 on 09/08/2016.
	 */
	/**
	 * Created by poiso_000 on 26/07/2016.
	 */
	const platform_browser_dynamic_1 = __webpack_require__(1);
	const core_1 = __webpack_require__(5);
	const http_1 = __webpack_require__(328);
	const app_component_1 = __webpack_require__(349);
	core_1.enableProdMode();
	platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS]);


/***/ },

/***/ 349:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	/**
	 * Created by poiso_000 on 27/07/2016.
	 */
	const core_1 = __webpack_require__(5);
	const character_1 = __webpack_require__(350);
	const character_component_1 = __webpack_require__(353);
	const generator_service_1 = __webpack_require__(377);
	const utils_1 = __webpack_require__(378);
	__webpack_require__(382);
	__webpack_require__(386);
	let AppComponent = class AppComponent {
	    constructor(charGenerator) {
	        this.selectedSpecies = "";
	        this.selectedArchetype = "";
	        this.currentCharacter = new character_1.Character();
	        this.charGenerator = charGenerator;
	    }
	    ngOnInit() {
	        this.charGenerator.onInit();
	    }
	    generateNewCharacter() {
	        let species = this.selectedSpecies;
	        if (species == "random") {
	            species = utils_1.getRandomElement(this.charGenerator.manifest.species);
	        }
	        this.charGenerator.generateCharacter(species, this.selectedArchetype)
	            .subscribe(character => {
	            this.currentCharacter = character;
	        }, error => console.log(error));
	    }
	};
	AppComponent = __decorate([
	    core_1.Component({
	        selector: 'npc-generator',
	        template: `
	        <div class="container-fluid" *ngIf="charGenerator.loaded">
	            <div class="col-xs-12 col-sm-3">
	                <strong>Species</strong>
	                <select [(ngModel)]="selectedSpecies">
	                    <option value="random" selected>Random</option>
	                    <option *ngFor="let s of charGenerator.manifest.species" [value]="s">{{s}}</option>
	                </select>
	            </div>
	            <div class="col-xs-12 col-sm-3">
	                <strong>Archetype</strong>
	                <select [(ngModel)]="selectedArchetype">
	                    <option  *ngFor="let a of charGenerator.manifest.archetypes" [value]="a">{{a}}</option>
	                </select>
	            </div>
	            <button class="col-xs-12 col-sm-3" (click)="generateNewCharacter()">Generate Character</button>
	        </div>
	        <character-component [character]="currentCharacter" *ngIf="charGenerator.loaded && currentCharacter.isInitialised()"></character-component>
	        <div class="container-fluid" *ngIf="!charGenerator.loaded"><h2>Loading...</h2></div>
	    `,
	        directives: [character_component_1.CharacterComponent],
	        providers: [{ provide: generator_service_1.CharacterGenerator, useClass: generator_service_1.CharacterGenerator }]
	    }), 
	    __metadata('design:paramtypes', [generator_service_1.CharacterGenerator])
	], AppComponent);
	exports.AppComponent = AppComponent;


/***/ },

/***/ 350:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const attributes_1 = __webpack_require__(351);
	const skills_1 = __webpack_require__(352);
	/**
	 * Created by poiso_000 on 28/07/2016.
	 */
	class Character {
	    constructor() {
	        this.attributes = new attributes_1.Attributes();
	        this.skills = new skills_1.Skills();
	        this.talents = [];
	        this.personalityTraits = [];
	    }
	    isInitialised() {
	        return this.attributes.brawn != 0;
	    }
	}
	exports.Character = Character;


/***/ },

/***/ 351:
/***/ function(module, exports) {

	"use strict";
	/**
	 * Created by poiso_000 on 28/07/2016.
	 */
	class Attributes {
	    constructor() {
	        this.brawn = 0;
	        this.agility = 0;
	        this.intelligence = 0;
	        this.cunning = 0;
	        this.willpower = 0;
	        this.presence = 0;
	    }
	}
	exports.Attributes = Attributes;


/***/ },

/***/ 352:
/***/ function(module, exports) {

	"use strict";
	/**
	 * Created by poiso_000 on 28/07/2016.
	 */
	class Skills {
	    constructor() {
	        this.astrogation = 0;
	        this.athletics = 0;
	        this.brawl = 0;
	        this.charm = 0;
	        this.coercion = 0;
	        this.coreWorlds = 0;
	        this.computers = 0;
	        this.cool = 0;
	        this.coordination = 0;
	        this.deception = 0;
	        this.discipline = 0;
	        this.education = 0;
	        this.gunnery = 0;
	        this.leadership = 0;
	        this.lightsaber = 0;
	        this.lore = 0;
	        this.mechanics = 0;
	        this.medicine = 0;
	        this.melee = 0;
	        this.negotiation = 0;
	        this.outerRim = 0;
	        this.perception = 0;
	        this.pilotingPlanetary = 0;
	        this.pilotingSpace = 0;
	        this.rangedLight = 0;
	        this.rangedHeavy = 0;
	        this.resilience = 0;
	        this.skulduggery = 0;
	        this.stealth = 0;
	        this.streetwise = 0;
	        this.survival = 0;
	        this.underworld = 0;
	        this.vigilance = 0;
	        this.xenology = 0;
	    }
	}
	exports.Skills = Skills;


/***/ },

/***/ 353:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	/**
	 * Created by poiso_000 on 28/07/2016.
	 */
	const core_1 = __webpack_require__(5);
	const character_1 = __webpack_require__(350);
	const infoblock_component_1 = __webpack_require__(354);
	const attribute_block_component_1 = __webpack_require__(355);
	const skillblock_component_1 = __webpack_require__(357);
	const talentblock_component_1 = __webpack_require__(367);
	const personalityblock_component_1 = __webpack_require__(370);
	const weaponsblock_component_1 = __webpack_require__(372);
	const armour_component_1 = __webpack_require__(374);
	const equipmentblock_component_1 = __webpack_require__(375);
	let CharacterComponent = class CharacterComponent {
	};
	__decorate([
	    core_1.Input(), 
	    __metadata('design:type', character_1.Character)
	], CharacterComponent.prototype, "character", void 0);
	CharacterComponent = __decorate([
	    core_1.Component({
	        selector: 'character-component',
	        template: `
	        <div class="character-container">
	            <info-block [character]="character"></info-block>
	            <attribute-block [character]="character"></attribute-block>
	            <skill-block [character]="character"></skill-block>
	            <div class="personality-container container-fluid">
	                <personality-block [character]="character" class="col-xs-12 col-sm-6 col-lg-6"></personality-block>
	                <talent-block [character]="character" class="col-xs-12 col-sm-6 col-lg-6"></talent-block>
	            </div>
	            <div class="gear-container container-fluid">
	                <weapons-block [character]="character" class="col-xs-12 col-sm-4 col-lg-4"></weapons-block>
	                <equipment-block [character]="character" class="col-xs-12 col-sm-4 col-lg-4"></equipment-block>
	                <armour [character]="character" class="col-xs-12 col-sm-4 col-lg-4"></armour>
	            </div>
	        </div>
	    `,
	        directives: [equipmentblock_component_1.EquipmentBlockComponent, armour_component_1.ArmourComponent, infoblock_component_1.InfoBlockComponent, attribute_block_component_1.AttributeBlockComponent, skillblock_component_1.SkillBlockComponent, talentblock_component_1.TalentBlockComponent, personalityblock_component_1.PersonalityBlockComponent, weaponsblock_component_1.WeaponsBlockComponent]
	    }), 
	    __metadata('design:paramtypes', [])
	], CharacterComponent);
	exports.CharacterComponent = CharacterComponent;


/***/ },

/***/ 354:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	/**
	 * Created by poiso_000 on 28/07/2016.
	 */
	const core_1 = __webpack_require__(5);
	const character_1 = __webpack_require__(350);
	let InfoBlockComponent = class InfoBlockComponent {
	};
	__decorate([
	    core_1.Input(), 
	    __metadata('design:type', character_1.Character)
	], InfoBlockComponent.prototype, "character", void 0);
	InfoBlockComponent = __decorate([
	    core_1.Component({
	        selector: 'info-block',
	        template: `
	        <div class="info-block-container">
	            <div class="info-block-entry col-xs-12 col-sm-4 col-lg-4"><strong>Name:</strong>{{character.name}}</div>
	            <div class="info-block-entry col-xs-12 col-sm-4 col-lg-4"><strong>Species:</strong>{{character.species}}</div>
	            <div class="info-block-entry col-xs-12 col-sm-4 col-lg-4"><strong>Archetype:</strong>{{character.archetype}}</div>
	        </div>
	    `
	    }), 
	    __metadata('design:paramtypes', [])
	], InfoBlockComponent);
	exports.InfoBlockComponent = InfoBlockComponent;


/***/ },

/***/ 355:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	/**
	 * Created by poiso_000 on 28/07/2016.
	 */
	const core_1 = __webpack_require__(5);
	const character_1 = __webpack_require__(350);
	const attribute_component_1 = __webpack_require__(356);
	let AttributeBlockComponent = class AttributeBlockComponent {
	};
	__decorate([
	    core_1.Input(), 
	    __metadata('design:type', character_1.Character)
	], AttributeBlockComponent.prototype, "character", void 0);
	AttributeBlockComponent = __decorate([
	    core_1.Component({
	        selector: 'attribute-block',
	        template: `
	    <div class="attributes-container container-fluid">
	        <attribute [attributeName]="'Brawn'" [magnitude]="character.attributes.brawn"></attribute>
	        <attribute [attributeName]="'Agility'" [magnitude]="character.attributes.agility"></attribute>
	        <attribute [attributeName]="'Intelligence'" [magnitude]="character.attributes.intelligence"></attribute>
	        <attribute [attributeName]="'Cunning'" [magnitude]="character.attributes.cunning"></attribute>
	        <attribute [attributeName]="'Willpower'" [magnitude]="character.attributes.willpower"></attribute>
	        <attribute [attributeName]="'Presence'" [magnitude]="character.attributes.presence"></attribute>
	    </div>
	    <div class="info-block-container container-fluid">    
	        <div class="info-block-entry col-xs-12 col-sm-offset-1 col-sm-4 col-lg-offset-1 col-lg-4 text-center"><strong>Wound Threshold:</strong>{{character.woundThreshold}}</div>
	        <div class="info-block-entry col-xs-12 col-sm-offset-2 col-sm-4 col-lg-offset-2 col-lg-4 text-center" *ngIf="character.armour == null"><strong>Soak:</strong>{{character.attributes.brawn}}</div>
	        <div class="info-block-entry col-xs-12 col-sm-offset-2 col-sm-4 col-lg-offset-2 col-lg-4 text-center" *ngIf="character.armour != null"><strong>Soak:</strong>{{character.attributes.brawn + character.armour.soak}}</div>
	    </div>
	    `,
	        directives: [attribute_component_1.AttributeComponent]
	    }), 
	    __metadata('design:paramtypes', [])
	], AttributeBlockComponent);
	exports.AttributeBlockComponent = AttributeBlockComponent;


/***/ },

/***/ 356:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	/**
	 * Created by poiso_000 on 30/07/2016.
	 */
	const core_1 = __webpack_require__(5);
	let AttributeComponent = class AttributeComponent {
	};
	__decorate([
	    core_1.Input(), 
	    __metadata('design:type', String)
	], AttributeComponent.prototype, "attributeName", void 0);
	__decorate([
	    core_1.Input(), 
	    __metadata('design:type', Number)
	], AttributeComponent.prototype, "magnitude", void 0);
	AttributeComponent = __decorate([
	    core_1.Component({
	        selector: 'attribute',
	        template: `
	        <div class="attribute-component col-xs-4 col-sm-2 col-md-2 col-lg-2 container-fluid">
	            <p class="attribute-magnitude col-xs-12">{{magnitude}}</p>
	            <p class="attribute-name col-xs-12">{{attributeName}}</p>
	        </div>
	    `
	    }), 
	    __metadata('design:paramtypes', [])
	], AttributeComponent);
	exports.AttributeComponent = AttributeComponent;


/***/ },

/***/ 357:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	/**
	 * Created by poiso_000 on 29/07/2016.
	 */
	const core_1 = __webpack_require__(5);
	const _1 = __webpack_require__(358);
	const skill_component_1 = __webpack_require__(366);
	let SkillBlockComponent = class SkillBlockComponent {
	};
	__decorate([
	    core_1.Input(), 
	    __metadata('design:type', _1.Character)
	], SkillBlockComponent.prototype, "character", void 0);
	SkillBlockComponent = __decorate([
	    core_1.Component({
	        selector: 'skill-block',
	        template: `
	    <div class="skill-block-container container-fluid">
	        <div class="skill-group-container col-xs-12 col-sm-4 col-lg-4">
	            <h3>Core Skills</h3>
	            <skill [magnitude]="character.skills.astrogation" [skillName]="'Astrogation'"></skill>
	            <skill [magnitude]="character.skills.athletics" [skillName]="'Athletics'"></skill>
	            <skill [magnitude]="character.skills.charm" [skillName]="'Charm'"></skill>
	            <skill [magnitude]="character.skills.coercion" [skillName]="'Coercion'"></skill>
	            <skill [magnitude]="character.skills.computers" [skillName]="'Computers'"></skill>
	            <skill [magnitude]="character.skills.cool" [skillName]="'Cool'"></skill>
	            <skill [magnitude]="character.skills.coordination" [skillName]="'Coordination'"></skill>
	            <skill [magnitude]="character.skills.deception" [skillName]="'Deception'"></skill>
	            <skill [magnitude]="character.skills.discipline" [skillName]="'Discipline'"></skill>
	            <skill [magnitude]="character.skills.leadership" [skillName]="'Leadership'"></skill>
	            <skill [magnitude]="character.skills.mechanics" [skillName]="'Mechanics'"></skill>
	            <skill [magnitude]="character.skills.medicine" [skillName]="'Medicine'"></skill>
	            <skill [magnitude]="character.skills.negotiation" [skillName]="'Negotiation'"></skill>
	            <skill [magnitude]="character.skills.perception" [skillName]="'Perception'"></skill>
	            <skill [magnitude]="character.skills.pilotingPlanetary" [skillName]="'Piloting (Planetary)'"></skill>
	            <skill [magnitude]="character.skills.pilotingSpace" [skillName]="'Piloting (Space)'"></skill>
	            <skill [magnitude]="character.skills.resilience" [skillName]="'Resilience'"></skill>
	            <skill [magnitude]="character.skills.skulduggery" [skillName]="'Skulduggery'"></skill>
	            <skill [magnitude]="character.skills.stealth" [skillName]="'Stealth'"></skill>
	            <skill [magnitude]="character.skills.streetwise" [skillName]="'Streetwise'"></skill>
	            <skill [magnitude]="character.skills.survival" [skillName]="'Survival'"></skill>
	            <skill [magnitude]="character.skills.vigilance" [skillName]="'Vigilance'"></skill>
	        </div>
	        <div class="skill-group-container col-xs-12 col-sm-4 col-lg-4">
	            <h3>Combat Skills</h3>
	            <skill [magnitude]="character.skills.brawl" [skillName]="'Brawl'"></skill>
	            <skill [magnitude]="character.skills.gunnery" [skillName]="'Gunnery'"></skill>
	            <skill [magnitude]="character.skills.lightsaber" [skillName]="'Lightsaber'"></skill>
	            <skill [magnitude]="character.skills.melee" [skillName]="'Melee'"></skill>
	            <skill [magnitude]="character.skills.rangedLight" [skillName]="'Ranged (Light)'"></skill>
	            <skill [magnitude]="character.skills.rangedHeavy" [skillName]="'Ranged (Heavy)'"></skill>
	        </div>
	        <div class="skill-group-container col-xs-12 col-sm-4 col-lg-4">
	        <h3>Knowledge Skills</h3>
	            <skill [magnitude]="character.skills.coreWorlds" [skillName]="'Core Worlds'"></skill>
	            <skill [magnitude]="character.skills.education" [skillName]="'Education'"></skill>
	            <skill [magnitude]="character.skills.lore" [skillName]="'Lore'"></skill>
	            <skill [magnitude]="character.skills.outerRim" [skillName]="'Outer Rim'"></skill>
	            <skill [magnitude]="character.skills.underworld" [skillName]="'Underworld'"></skill>
	            <skill [magnitude]="character.skills.xenology" [skillName]="'Xenology'"></skill>
	        </div>
	    </div>
	    `,
	        directives: [skill_component_1.SkillComponent]
	    }), 
	    __metadata('design:paramtypes', [])
	], SkillBlockComponent);
	exports.SkillBlockComponent = SkillBlockComponent;


/***/ },

/***/ 358:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	/**
	 * Created by poiso_000 on 28/07/2016.
	 */
	__export(__webpack_require__(351));
	__export(__webpack_require__(350));
	__export(__webpack_require__(352));
	__export(__webpack_require__(359));
	__export(__webpack_require__(360));
	__export(__webpack_require__(361));
	__export(__webpack_require__(362));
	__export(__webpack_require__(363));
	__export(__webpack_require__(364));
	__export(__webpack_require__(365));


/***/ },

/***/ 359:
/***/ function(module, exports) {

	"use strict";
	/**
	 * Created by poiso_000 on 09/08/2016.
	 */
	class ArchetypeDefinition {
	}
	exports.ArchetypeDefinition = ArchetypeDefinition;


/***/ },

/***/ 360:
/***/ function(module, exports) {

	"use strict";
	/**
	 * Created by poiso_000 on 09/08/2016.
	 */
	class Armour {
	}
	exports.Armour = Armour;


/***/ },

/***/ 361:
/***/ function(module, exports) {

	"use strict";
	/**
	 * Created by poiso_000 on 09/08/2016.
	 */
	class Equipment {
	}
	exports.Equipment = Equipment;


/***/ },

/***/ 362:
/***/ function(module, exports) {

	"use strict";
	/**
	 * Created by poiso_000 on 09/08/2016.
	 */
	class SkillDefinition {
	}
	exports.SkillDefinition = SkillDefinition;


/***/ },

/***/ 363:
/***/ function(module, exports) {

	"use strict";
	/**
	 * Created by poiso_000 on 09/08/2016.
	 */
	class Weapon {
	}
	exports.Weapon = Weapon;


/***/ },

/***/ 364:
/***/ function(module, exports) {

	"use strict";
	/**
	 * Created by poiso_000 on 09/08/2016.
	 */
	class SpeciesDefinition {
	}
	exports.SpeciesDefinition = SpeciesDefinition;


/***/ },

/***/ 365:
/***/ function(module, exports) {

	"use strict";
	/**
	 * Created by poiso_000 on 14/08/2016.
	 */
	class WeaponLoadout {
	}
	exports.WeaponLoadout = WeaponLoadout;


/***/ },

/***/ 366:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	/**
	 * Created by poiso_000 on 02/08/2016.
	 */
	const core_1 = __webpack_require__(5);
	let SkillComponent = class SkillComponent {
	};
	__decorate([
	    core_1.Input(), 
	    __metadata('design:type', String)
	], SkillComponent.prototype, "skillName", void 0);
	__decorate([
	    core_1.Input(), 
	    __metadata('design:type', Number)
	], SkillComponent.prototype, "magnitude", void 0);
	SkillComponent = __decorate([
	    core_1.Component({
	        selector: 'skill',
	        template: `
	        <div *ngIf="magnitude > 0" class="skill-container">
	            <strong>{{skillName}}:</strong> <span>{{magnitude}}</span>
	        </div>`
	    }), 
	    __metadata('design:paramtypes', [])
	], SkillComponent);
	exports.SkillComponent = SkillComponent;


/***/ },

/***/ 367:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	const core_1 = __webpack_require__(5);
	const character_1 = __webpack_require__(350);
	const talent_component_1 = __webpack_require__(368);
	/**
	 * Created by poiso_000 on 07/08/2016.
	 */
	let TalentBlockComponent = class TalentBlockComponent {
	};
	__decorate([
	    core_1.Input(), 
	    __metadata('design:type', character_1.Character)
	], TalentBlockComponent.prototype, "character", void 0);
	TalentBlockComponent = __decorate([
	    core_1.Component({
	        selector: 'talent-block',
	        template: `
	        <div class="talent-block">
	            <h3>Talents</h3>
	            <talent *ngFor="let talent of character.talents" [talent]="talent"></talent>
	        </div>
	    `,
	        directives: [talent_component_1.TalentComponent]
	    }), 
	    __metadata('design:paramtypes', [])
	], TalentBlockComponent);
	exports.TalentBlockComponent = TalentBlockComponent;


/***/ },

/***/ 368:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	const core_1 = __webpack_require__(5);
	const talent_1 = __webpack_require__(369);
	/**
	 * Created by poiso_000 on 07/08/2016.
	 */
	let TalentComponent = class TalentComponent {
	};
	__decorate([
	    core_1.Input(), 
	    __metadata('design:type', talent_1.Talent)
	], TalentComponent.prototype, "talent", void 0);
	TalentComponent = __decorate([
	    core_1.Component({
	        selector: 'talent',
	        template: `
	    <div class="talent">
	        <h4>{{talent.name}}</h4>
	        <p>{{talent.reference}}</p>
	    </div>
	    `
	    }), 
	    __metadata('design:paramtypes', [])
	], TalentComponent);
	exports.TalentComponent = TalentComponent;


/***/ },

/***/ 369:
/***/ function(module, exports) {

	/**
	 * Created by poiso_000 on 07/08/2016.
	 */
	"use strict";
	class Talent {
	}
	exports.Talent = Talent;


/***/ },

/***/ 370:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	const core_1 = __webpack_require__(5);
	const personality_component_1 = __webpack_require__(371);
	const character_1 = __webpack_require__(350);
	/**
	 * Created by poiso_000 on 07/08/2016.
	 */
	let PersonalityBlockComponent = class PersonalityBlockComponent {
	};
	__decorate([
	    core_1.Input(), 
	    __metadata('design:type', character_1.Character)
	], PersonalityBlockComponent.prototype, "character", void 0);
	PersonalityBlockComponent = __decorate([
	    core_1.Component({
	        selector: 'personality-block',
	        template: `
	        <div class="personality-block" *ngIf="character.personalityTraits.length > 0">
	            <h3>Personality Traits</h3>
	            <personality-trait *ngFor="let trait of character.personalityTraits" [personalityTrait]="trait"></personality-trait>
	        </div>
	    `,
	        directives: [personality_component_1.PersonalityComponent]
	    }), 
	    __metadata('design:paramtypes', [])
	], PersonalityBlockComponent);
	exports.PersonalityBlockComponent = PersonalityBlockComponent;


/***/ },

/***/ 371:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	const core_1 = __webpack_require__(5);
	const core_2 = __webpack_require__(5);
	/**
	 * Created by poiso_000 on 07/08/2016.
	 */
	let PersonalityComponent = class PersonalityComponent {
	};
	__decorate([
	    core_2.Input(), 
	    __metadata('design:type', String)
	], PersonalityComponent.prototype, "personalityTrait", void 0);
	PersonalityComponent = __decorate([
	    core_1.Component({
	        selector: 'personality-trait',
	        template: `
	        <div class="personality-trait">{{personalityTrait}}</div>
	    `
	    }), 
	    __metadata('design:paramtypes', [])
	], PersonalityComponent);
	exports.PersonalityComponent = PersonalityComponent;


/***/ },

/***/ 372:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	const core_1 = __webpack_require__(5);
	const model_1 = __webpack_require__(358);
	const weapon_component_1 = __webpack_require__(373);
	/**
	 * Created by poiso_000 on 10/08/2016.
	 */
	let WeaponsBlockComponent = class WeaponsBlockComponent {
	};
	__decorate([
	    core_1.Input(), 
	    __metadata('design:type', model_1.Character)
	], WeaponsBlockComponent.prototype, "character", void 0);
	WeaponsBlockComponent = __decorate([
	    core_1.Component({
	        selector: 'weapons-block',
	        template: `
	        <div class="weapons-block">
	            <h3>Weapons</h3>
	            <weapon *ngFor="let weapon of character.weapons" [character]="character" [weapon]="weapon"></weapon>
	        </div>
	    `,
	        directives: [weapon_component_1.WeaponComponent]
	    }), 
	    __metadata('design:paramtypes', [])
	], WeaponsBlockComponent);
	exports.WeaponsBlockComponent = WeaponsBlockComponent;


/***/ },

/***/ 373:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	const weapon_1 = __webpack_require__(363);
	const core_1 = __webpack_require__(5);
	const character_1 = __webpack_require__(350);
	/**
	 * Created by poiso_000 on 10/08/2016.
	 */
	let WeaponComponent = class WeaponComponent {
	};
	__decorate([
	    core_1.Input(), 
	    __metadata('design:type', weapon_1.Weapon)
	], WeaponComponent.prototype, "weapon", void 0);
	__decorate([
	    core_1.Input(), 
	    __metadata('design:type', character_1.Character)
	], WeaponComponent.prototype, "character", void 0);
	WeaponComponent = __decorate([
	    core_1.Component({
	        selector: 'weapon',
	        template: `
	        <div class="weapon-container">
	            <h4>{{weapon.name}}</h4>
	            <ul>
	                <li *ngIf="weapon.type == 'rangedLight' || weapon.type == 'rangedHeavy' || weapon.type=='lightsaber'"><strong>Damage:</strong> {{weapon.damage}}</li>
	                <li *ngIf="weapon.type == 'melee' || weapon.type == 'brawl'"><strong>Damage:</strong> {{weapon.damage + character.attributes.brawn}}</li>
	                <li><strong>Critical:</strong> {{weapon.critical}}</li>
	                <li><strong>Range:</strong> {{weapon.range}}</li>
	                <li><strong>Qualities:</strong> {{weapon.qualities}}</li>
	                <li><strong>Reference:</strong> {{weapon.reference}}</li>
	            </ul>
	        </div>
	    `
	    }), 
	    __metadata('design:paramtypes', [])
	], WeaponComponent);
	exports.WeaponComponent = WeaponComponent;


/***/ },

/***/ 374:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	const core_1 = __webpack_require__(5);
	const character_1 = __webpack_require__(350);
	/**
	 * Created by poiso_000 on 10/08/2016.
	 */
	let ArmourComponent = class ArmourComponent {
	};
	__decorate([
	    core_1.Input(), 
	    __metadata('design:type', character_1.Character)
	], ArmourComponent.prototype, "character", void 0);
	ArmourComponent = __decorate([
	    core_1.Component({
	        selector: 'armour',
	        template: `
	        <div class="armour-container" *ngIf="character.armour != null">
	            <h3>Armour - {{character.armour.name}}</h3>
	            <ul>
	                <li><strong>Soak:</strong> {{character.armour.soak}}</li>
	                <li><strong>Defense:</strong> {{character.armour.defense}}</li>
	                <li><strong>Reference:</strong> {{character.armour.reference}}</li>
	            </ul>
	        </div>
	        <div class="armour-container" *ngIf="character.armour == null">
	            <h3>Armour - Regular Clothing</h3>
	            <ul>
	                <li><strong>Soak:</strong> 0</li>
	                <li><strong>Defense:</strong> 0</li>
	                <li><strong>Reference:</strong> N/A</li>
	            </ul>
	        </div>
	    `
	    }), 
	    __metadata('design:paramtypes', [])
	], ArmourComponent);
	exports.ArmourComponent = ArmourComponent;


/***/ },

/***/ 375:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	const core_1 = __webpack_require__(5);
	const character_1 = __webpack_require__(350);
	const equipment_component_1 = __webpack_require__(376);
	/**
	 * Created by poiso_000 on 10/08/2016.
	 */
	let EquipmentBlockComponent = class EquipmentBlockComponent {
	};
	__decorate([
	    core_1.Input(), 
	    __metadata('design:type', character_1.Character)
	], EquipmentBlockComponent.prototype, "character", void 0);
	EquipmentBlockComponent = __decorate([
	    core_1.Component({
	        selector: 'equipment-block',
	        template: `
	        <div class="equipment-block">
	            <h3>Equipment</h3>
	            <equipment *ngFor="let equipment of character.equipment" [equipment]="equipment"></equipment>
	        </div>
	    `,
	        directives: [equipment_component_1.EquipmentComponent]
	    }), 
	    __metadata('design:paramtypes', [])
	], EquipmentBlockComponent);
	exports.EquipmentBlockComponent = EquipmentBlockComponent;


/***/ },

/***/ 376:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	const equipment_1 = __webpack_require__(361);
	const core_1 = __webpack_require__(5);
	/**
	 * Created by poiso_000 on 10/08/2016.
	 */
	let EquipmentComponent = class EquipmentComponent {
	};
	__decorate([
	    core_1.Input(), 
	    __metadata('design:type', equipment_1.Equipment)
	], EquipmentComponent.prototype, "equipment", void 0);
	EquipmentComponent = __decorate([
	    core_1.Component({
	        selector: 'equipment',
	        template: `
	        <div class="equipment">
	            <h4>{{equipment.name}}</h4>
	            <p>{{equipment.reference}}</p>
	        </div>
	    `
	    }), 
	    __metadata('design:paramtypes', [])
	], EquipmentComponent);
	exports.EquipmentComponent = EquipmentComponent;


/***/ },

/***/ 377:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by poiso_000 on 02/08/2016.
	 */
	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	const http_1 = __webpack_require__(328);
	const core_1 = __webpack_require__(5);
	const Observable_1 = __webpack_require__(38);
	const utils_1 = __webpack_require__(378);
	const model_1 = __webpack_require__(358);
	let CharacterGenerator = class CharacterGenerator {
	    constructor(http) {
	        this.http = http;
	        this.manifest = { "species": [], "archetypes": [], "weaponLoadouts": [] };
	        this.loaded = false;
	        this.species = {};
	        this.speciesLoaded = 0;
	        this.archetypes = {};
	        this.archetypesLoaded = 0;
	        this.personalities = {};
	        this.weaponLoadouts = {};
	        this.weaponLoadoutsLoaded = 0;
	    }
	    /**
	     * Generate a character synchronously
	     * @param species Character species
	     * @param archetype Character archetype
	     */
	    generateCharacter(species, archetype) {
	        let speciesDef = this.species[species];
	        let archetypeDef = this.archetypes[archetype];
	        let char = new model_1.Character();
	        let lastName = utils_1.getRandomElement(speciesDef.suffixes);
	        let firstName = utils_1.getRandomElement(speciesDef.prefixes);
	        char.name = [firstName, lastName].join(speciesDef.joiner);
	        char.species = utils_1.capitalCase(species);
	        char.archetype = utils_1.capitalCase(archetype);
	        let skills = this.selectSkills(archetypeDef);
	        let i = skills.length;
	        while (i--) {
	            let skill = skills[i];
	            let j = utils_1.getRandomArbitrary(skill.min, skill.max);
	            char.skills[skill.name] = j;
	        }
	        let stats = archetypeDef.stats[utils_1.getRandomArbitrary(0, archetypeDef.stats.length - 1)];
	        char.attributes.brawn = stats.brawn;
	        char.attributes.agility = stats.agility;
	        char.attributes.intelligence = stats.intelligence;
	        char.attributes.cunning = stats.cunning;
	        char.attributes.willpower = stats.willpower;
	        char.attributes.presence = stats.presence;
	        utils_1.shuffle(this.personalities.traits);
	        char.personalityTraits = char.personalityTraits.concat(this.personalities.traits.slice(0, 3));
	        char.talents = this.selectTalents(archetypeDef);
	        char.weapons = this.selectWeapons(archetypeDef, char);
	        char.armour = this.selectArmour(archetypeDef);
	        char.woundThreshold = speciesDef.baseHp + char.attributes.brawn;
	        char.equipment = this.selectEquipment(archetypeDef);
	        return new Observable_1.Observable.fromPromise(Promise.resolve(char));
	    }
	    selectTalents(archetype) {
	        let min = archetype.minTalents;
	        let max = archetype.maxTalents;
	        let si = utils_1.getRandomArbitrary(min, max);
	        utils_1.shuffle(archetype.optionalTalents);
	        return archetype.optionalTalents.slice(0, si);
	    }
	    selectSkills(archetype) {
	        let min = archetype.minSkillSets;
	        let max = archetype.maxSkillSets;
	        let si = utils_1.getRandomArbitrary(min, max);
	        //Flicks the array around in place, but should be ok
	        utils_1.shuffle(archetype.skillSets);
	        return archetype.skillSets.slice(0, si);
	    }
	    selectWeapons(archetype, character) {
	        var weaponLoadouts = archetype.weaponLoadouts.map(x => this.weaponLoadouts[x]);
	        let maxSkill = 0;
	        let selectedLoadout = utils_1.getRandomElement(weaponLoadouts);
	        for (let s of weaponLoadouts) {
	            let skillMagnitude = character.skills[s.primarySkill];
	            if (skillMagnitude > maxSkill) {
	                selectedLoadout = s;
	                maxSkill = skillMagnitude;
	            }
	        }
	        //Clone the list so we don't glob the base
	        let selectedWeapons = selectedLoadout.baseLoadout.slice(0, selectedLoadout.baseLoadout.length);
	        let subs = selectedLoadout.substitutions;
	        for (let i = 0; i < selectedWeapons.length; i++) {
	            if (utils_1.getRandomArbitrary(0, 1)) {
	                //Flip a coin to see if we'll substitute
	                continue;
	            }
	            let consider = selectedWeapons[i];
	            let validSubs = subs[consider.name];
	            if (validSubs && validSubs.length > 0) {
	                //Swap in the sub in place
	                selectedWeapons[i] = utils_1.getRandomElement(validSubs);
	            }
	        }
	        let min = archetype.minWeapons;
	        let max = archetype.maxWeapons;
	        let si = utils_1.getRandomArbitrary(min, max);
	        if (si && selectedLoadout.additionalOptions.length) {
	            let optional = selectedLoadout.additionalOptions;
	            while (si--) {
	                selectedWeapons.push(utils_1.getRandomElement(optional));
	            }
	        }
	        return selectedWeapons;
	    }
	    selectEquipment(archetype) {
	        let min = archetype.minEquipment;
	        let max = archetype.maxEquipment;
	        return archetype.equipment.slice(0, utils_1.getRandomArbitrary(min, max));
	    }
	    handleError(error) {
	        let errMsg = (error.message) ? error.message :
	            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
	        console.error(errMsg);
	        return Observable_1.Observable.throw(errMsg);
	    }
	    extractSpeciesData(res) {
	        this.species[res.name] = res;
	        this.speciesLoaded++;
	        this.setLoadState();
	    }
	    setLoadState() {
	        this.loaded =
	            this.speciesLoaded >= this.manifest.species.length
	                && this.archetypesLoaded >= this.manifest.archetypes.length
	                && this.weaponLoadoutsLoaded >= this.manifest.weaponLoadouts.length;
	    }
	    extractArchetypeData(body) {
	        this.archetypes[body.name] = body;
	        this.archetypesLoaded++;
	        this.setLoadState();
	    }
	    extractLoadoutData(body) {
	        this.weaponLoadouts[body.name] = body;
	        this.weaponLoadoutsLoaded++;
	        this.setLoadState();
	    }
	    getJson(res) {
	        return res.json();
	    }
	    onInit() {
	        let url = 'manifest.json';
	        this.http.get(url)
	            .map(this.getJson)
	            .catch(this.handleError)
	            .subscribe(body => {
	            for (let s of body.species) {
	                let url = 'species/' + s + '.json';
	                this.http.get(url)
	                    .map(this.getJson)
	                    .catch(this.handleError)
	                    .subscribe(s => this.extractSpeciesData(s));
	            }
	            for (let a of body.archetypes) {
	                let url = 'archetypes/' + a + '.json';
	                this.http.get(url)
	                    .map(this.getJson)
	                    .catch(this.handleError)
	                    .subscribe(a => this.extractArchetypeData(a));
	            }
	            for (let a of body.weaponLoadouts) {
	                let url = 'weapons/' + a + '.json';
	                this.http.get(url)
	                    .map(this.getJson)
	                    .catch(this.handleError)
	                    .subscribe(a => this.extractLoadoutData(a));
	            }
	            this.manifest.species = body.species;
	            this.manifest.archetypes = body.archetypes;
	            this.manifest.weaponLoadouts = body.weaponLoadouts;
	        });
	        let personalityUrl = 'personalities.json';
	        this.http.get(personalityUrl)
	            .map(this.getJson)
	            .catch(this.handleError)
	            .subscribe(body => this.personalities = body);
	    }
	    selectArmour(archetypeDef) {
	        if (archetypeDef.armour.length == 0) {
	            return null;
	        }
	        return utils_1.getRandomElement(archetypeDef.armour);
	    }
	};
	CharacterGenerator = __decorate([
	    core_1.Injectable(), 
	    __metadata('design:paramtypes', [http_1.Http])
	], CharacterGenerator);
	exports.CharacterGenerator = CharacterGenerator;


/***/ },

/***/ 378:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	/**
	 * Created by poiso_000 on 07/08/2016.
	 */
	__export(__webpack_require__(379));
	__export(__webpack_require__(380));
	__export(__webpack_require__(381));


/***/ },

/***/ 379:
/***/ function(module, exports) {

	/**
	 * Created by poiso_000 on 07/08/2016.
	 */
	"use strict";
	function getRandomArbitrary(min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	exports.getRandomArbitrary = getRandomArbitrary;
	function getRandomElement(a) {
	    return a[getRandomArbitrary(0, a.length - 1)];
	}
	exports.getRandomElement = getRandomElement;


/***/ },

/***/ 380:
/***/ function(module, exports) {

	"use strict";
	/**
	 * Created by poiso_000 on 07/08/2016.
	 */
	function capitalCase(s) {
	    return s.charAt(0).toUpperCase() + s.slice(1);
	}
	exports.capitalCase = capitalCase;


/***/ },

/***/ 381:
/***/ function(module, exports) {

	"use strict";
	/**
	 * Created by poiso_000 on 07/08/2016.
	 */
	function shuffle(a) {
	    var j, x, i;
	    for (i = a.length; i; i--) {
	        j = Math.floor(Math.random() * i);
	        x = a[i - 1];
	        a[i - 1] = a[j];
	        a[j] = x;
	    }
	}
	exports.shuffle = shuffle;


/***/ },

/***/ 382:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 386:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});