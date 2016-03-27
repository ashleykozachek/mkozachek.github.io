var randomValue = 6;
var correctnessValue = 5;
var occurrenceCost = 3;
var A = 65;
var Z = 90;
var BACKSPACE = 8;
var ENTER = 13;
var SPACEBAR = 32;

var hiraganaMap = new Map([["\u3042",["a",0,0]],["\u3044",["i",0,0]],["\u3046",["u",0,0]],["\u3048",["e",0,0]],["\u304a",["o",0,0]],
                        ["\u304b",["ka",0,0]],["\u304d",["ki",0,0]],["\u304f",["ku",0,0]],["\u3051",["ke",0,0]],["\u3053",["ko",0,0]],
                        ["\u3055",["sa",0,0]],["\u3057",[["shi","si"],0,0]],["\u3059",["su",0,0]],["\u305b",["se",0,0]],["\u305d",["so",0,0]],
                        ["\u305f",["ta",0,0]],["\u3061",[["ti","chi"],0,0]],["\u3064",[["tsu","tu"],0,0]],["\u3066",["te",0,0]],["\u3068",["to",0,0]],
                        ["\u306a",["na",0,0]],["\u306b",["ni",0,0]],["\u306c",["nu",0,0]],["\u306d",["ne",0,0]],["\u306e",["no",0,0]],
                        ["\u306f",["ha",0,0]],["\u3072",["hi",0,0]],["\u3075",[["hu","fu"],0,0]],["\u3078",["he",0,0]],["\u307b",["ho",0,0]],
                        ["\u307e",["ma",0,0]],["\u307f",["mi",0,0]],["\u3080",["mu",0,0]],["\u3081",["me",0,0]],["\u3082",["mo",0,0]],
                        ["\u3084",["ya",0,0]],["\u3086",["yu",0,0]],["\u3088",["yo",0,0]],
                        ["\u3089",["ra",0,0]],["\u308a",["ri",0,0]],["\u308b",["ru",0,0]],["\u308c",["re",0,0]],["\u308d",["ro",0,0]],
                        ["\u308f",["wa",0,0]],["\u3090",["wi",0,0]],["\u3091",["we",0,0]],["\u3092",["wo",0,0]],
                        ["\u3093",["n",0,0]]]);
var hiraganaWithModMap = new Map([["\u304c",["ga",0,0]],["\u304e",["gi"]],["\u3050",["gu",0,0]],["\u3052",["ge",0,0]],["\u3054",["go",0,0]],
                        ["\u3056",["za",0,0]],["\u3058",["zi",0,0]],["\u305a",["zu",0,0]],["\u305c",["ze",0,0]],["\u305e",["zo",0,0]],
                        ["\u3060",["da",0,0]],["\u3062",["di",0,0]],["\u3065",["du",0,0]],["\u3067",["de",0,0]],["\u3069",["do",0,0]],
                        ["\u3070",["ba",0,0]],["\u3071",["pa",0,0]],["\u3073",["bi",0,0]],["\u3074",["pi",0,0]],["\u3076",["bu",0,0]],
                        ["\u3077",["pu",0,0]],["\u3079",["be",0,0]],["\u307a",["pe",0,0]],["\u307c",["bo",0,0]],["\u307d",["po",0,0]]]);
var katakanaMap = new Map([["\u30a2",["a",0,0]],["\u30a4",["i",0,0]],["\u30a6",["u",0,0]],["\u30a8",["e",0,0]],["\u30aa",["o",0,0]],
                        ["\u30ab",["ka",0,0]],["\u30ad",["ki",0,0]],["\u30af",["ku",0,0]],["\u30b1",["ke",0,0]],["\u30b3",["ko",0,0]],
                        ["\u30b5",["sa",0,0]],["\u30b7",[["shi","si"],0,0]],["\u30b9",["su",0,0]],["\u30bb",["se",0,0]],["\u30bd",["so",0,0]],
                        ["\u30bf",["ta",0,0]],["\u30c1",[["ti","chi",],0,0]],["\u30c4",[["tsu","tu"],0,0]],["\u30c6",["te",0,0]],
                        ["\u30c8",["to",0,0]],["\u30ca",["na",0,0]],["\u30cb",["ni",0,0]],["\u30cc",["nu",0,0]],["\u30cd",["ne",0,0]],
                        ["\u30ce",["no",0,0]],["\u30cf",["ha",0,0]],["\u30d2",["hi",0,0]],["\u30d5",[["fu","hu"],0,0]],["\u30d8",["he",0,0]],
                        ["\u30d8",["ho",0,0]],["\u30de",["ma",0,0]],["\u30df",["mi",0,0]],["\u30e0",["mu",0,0]],["\u30e1",["me",0,0]],
                        ["\u30e2",["mo",0,0]],["\u30e4",["ya",0,0]],["\u30e6",["yu",0,0]],["\u30e8",["yo",0,0]],["\u30e9",["ra",0,0]],
                        ["\u30ea",["ri",0,0]],["\u30eb",["ru",0,0]],["\u30ec",["re",0,0]],["\u30ed",["ro",0,0]],["\u30ef",["wa",0,0]],
                        ["\u30f0",["wi",0,0]],["\u30f1",["we",0,0]],["\u30f2",["wo",0,0]],["\u30f3",["n",0,0]]]);
var katakanaWithModMap = new Map([["\u30ae",["gi",0,0]],["\u30b0",["gu",0,0]],["\u30b2",["ge",0,0]],["\u30b4",["go",0,0]],["\u30b6",["za",0,0]],
                        ["\u30b8",["zi",0,0]],["\u30ba",["zu",0,0]],["\u30bc",["ze",0,0]],["\u30be",["zo",0,0]],["\u30c0",["da",0,0]],
                        ["\u30c2",["di",0,0]],["\u30c5",["du",0,0]],["\u30c7",["de",0,0]],["\u30c9",["do",0,0]],["\u30d0",["ba",0,0]],
                        ["\u30d1",["pa",0,0]],["\u30d3",["bi",0,0]],["\u30d4",["pi",0,0]],["\u30d6",["bu",0,0]],["\ue0d7",["pu",0,0]],
                        ["\u30d9",["be",0,0]],["\u30d9",["pe",0,0]],["\u30dc",["bo",0,0]],["\u30dd",["po",0,0]],["\u30f4",["vu",0,0]],
                        ["\u30f7",["va",0,0]],["\u30f8",["vi",0,0]],["\u30f9",["ve",0,0]],["\u30fa",["vo",0,0]]]);

var TabEnum = {
    MAINTAB: document.getElementById('mainTabLink'),
    GAMETAB: document.getElementById('gameTabLink'),
    TRANSLITTAB: document.getElementById('translitTabLink'),
    OPTIONSTAB: document.getElementById('optionsTabLink'),
};

var Manager = {

    currentState: BlankState,
    optionsVisited: false,
    optionsChanged: false,
    optionsHash: 1,
    
    onTabSwitchEvent: function(event, tab){
        let atl = "activeTabLink";
        let iatl = "inactiveTabLink";
       
        for (allTab in TabEnum){
            TabEnum[allTab].classList.remove(atl);
            TabEnum[allTab].classList.add(iatl);
        }

        tab.classList.add(atl);
        tab.classList.remove(iatl);
        this.changeState(tab);
    },

    changeState: function (tab) {
        
        if (this.optionsVisited) {
            let newHash = Options.getHash();
            if (newHash !== this.optionsHash){
                if (! (newHash > 0)) {
                    Options.hiraganaCb.checked = true;
                    newHash = 1;
                    alert('Warning: At least one option for a Kana must be selected. Defaulting to Hiragana.');
                }
                this.optionsChanged = true;
                this.optionsHash = newHash;
            }
            this.optionsVisited = false;
        }
        switch(tab){
            case TabEnum.GAMETAB:
                this.currentState = Game;
                if (this.optionsChanged) {
                    this.currentState.init();
                    this.optionsChanged = false;
                }
                break;
            case TabEnum.OPTIONSTAB:
                this.optionsVisited = true;
                this.currentState = BlankState;
                break;
            default:
                this.currentState = BlankState;
        }
    },

    onKeydown: function(event){
        this.currentState.onKeydown(event);
    }

};

function init(){   
    window.addEventListener('keydown', function(event) { Manager.onKeydown(event); }, false);
    TabEnum.MAINTAB.addEventListener('click',function(event) { Manager.onTabSwitchEvent(event, TabEnum.MAINTAB); }, true);
    TabEnum.GAMETAB.addEventListener('click',function(event) { Manager.onTabSwitchEvent(event, TabEnum.GAMETAB); }, true);
    TabEnum.TRANSLITTAB.addEventListener('click',function(event) { Manager.onTabSwitchEvent(event, TabEnum.TRANSLITTAB); }, true);
    TabEnum.OPTIONSTAB.addEventListener('click',function(event) { Manager.onTabSwitchEvent(event, TabEnum.OPTIONSTAB); }, true);
}



function toggleClass(elId, classId){
    document.getElementById(elId).classList.toggle(classId);
}

var BlankState = {
    onKeydown: function(event){
        console.log(event);
    }
}

var Game = {
    kanaDiv: document.getElementById("kanaDiv"),
    textDiv: document.getElementById("textDiv"),
    answer: document.getElementById("answer"),
    currentMap: new Map(),
    currentIteration: 0,
    listHalfLen: 0,
    kanaList: new Array(),
    currentKana: "",
    
    init: function(){
        this.currentMap = new Map();
        this.kanaList = new Array();
        let optionsHash = Manager.optionsHash;
        if((optionsHash & 1) > 0){
            hiraganaMap.forEach(Game.concatMap);
        }
        if((optionsHash & 2) > 0){
            hiraganaWithModMap.forEach(Game.concatMap);
        }
        if((optionsHash & 4) > 0){
            katakanaMap.forEach(Game.concatMap);
        }
        if((optionsHash & 8) > 0){
            katakanaWithModMap.forEach(Game.concatMap);
        }

        this.currentMap.forEach(Game.kanaMix);
        this.kanaList.sort(this.kanaSort);
        this.listHalfLen = this.kanaList.length / 4;
        this.currentKana = this.kanaList[0][0];
        this.kanaDiv.textContent = this.currentKana;
        this.textDiv.textContent = "";
    },

    kanaSort: function(a, b){
        if (a[1] === b[1]){ return 0; }
        else { return (a[1] < b[1]) ? 1 : -1; }
    },

    kanaMix: function(data, unicode, map){
        if(data[1] === 0){
            Game.kanaList.push([unicode, Math.random()*randomValue - occurrenceCost * data[2]]);
        }
        else{
            Game.kanaList.push([unicode, Math.random()*randomValue + (data[2]/data[1]) * correctnessValue - data[2] * occurrenceCost])
        }
    },
    
    reset: function(){
        this.kanaList = new Array();
        this.currentMap.forEach(Game.kanaMix);
        this.kanaList.sort(Game.kanaSort);
        this.currentIteration = 0;
        this.currentKana = this.kanaList[0][0];
        this.kanaDiv.textContent = this.currentKana;
    },
    
    concatMap: function(value, key, map){
        Game.currentMap.set(key,value);
    },

    onKeydown: function(event){
        var keyCode = event.keyCode;
        var text = this.textDiv.textContent;
        if (keyCode === BACKSPACE){
            event.preventDefault();
            if (text.length > 0){ this.textDiv.textContent = text.slice(0,-1); }
        }
        else if (keyCode >= A && keyCode <= Z){
            this.textDiv.textContent = text.concat(String.fromCharCode(keyCode)); }
        else if ((keyCode === ENTER || keyCode === SPACEBAR) && text.length > 0) { 
            this.checkAnswer();
            this.currentIteration = this.currentIteration + 1;
            this.checkIteration();
            this.textDiv.textContent = "";
        }
    },
    
    checkAnswer: function(){
        let value = this.currentMap.get(this.kanaDiv.textContent);
        if (typeof value[0] === 'string'){
            if (value[0] === this.textDiv.textContent.toLowerCase()){
                value[1] = value[1] + 1;
                value[2] = value[2] + 1;
                this.correctAnswer();
                this.hideKanaDivAnim();
            }
            else {
                value[2] = value[2] + 1;
                this.incorrectAnswer();
                this.hideKanaDivAnim();
            }
        }
        else {
            for (var i = 0; i < value[0].length; i++){
                var word = value[0][i];
                if (word === this.textDiv.textContent.toLowerCase()){
                    value[1] = value[1] + 1;
                    value[2] = value[2] + 1;
                    this.correctAnswer();
                    this.hideKanaDivAnim();
                    return;
                }
            }
            value[2] = value[2] + 1;
            this.incorrectAnswer();
            this.hideKanaDivAnim();
        }
    },
    
    checkIteration: function(){
        if (this.currentIteration >= this.listHalfLen){
            this.reset();
        }
        else {
            this.kanaDiv.textContent = this.kanaList[this.currentIteration][0];
        }
    },
    
    hideKanaDivAnim: function(){
        toggleClass("kanaDiv", "hide");
        setTimeout(function(){ toggleClass("kanaDiv", "hide"); },250);
    },
    
    correctAnswer: function(){
        toggleClass("kanaDiv", "backgroundGreen");
        setTimeout(function(){ toggleClass("kanaDiv", "backgroundGreen"); },500);
    },
    
    incorrectAnswer: function(){
        toggleClass("kanaDiv", "backgroundRed");
        setTimeout(function(){ toggleClass("kanaDiv", "backgroundRed"); },500);
    },
    

};

var Options = {
    hiraganaCb: document.getElementById("hiraganaCb"),
    modHiraganaCb: document.getElementById("modHiraganaCb"),
    katakanaCb: document.getElementById("katakanaCb"),
    modKatakanaCb: document.getElementById("modKatakanaCb"),

    getHash: function () {
        let newHash = 0;
        if (this.hiraganaCb.checked) { newHash = 1; }
        if (this.modHiraganaCb.checked) { newHash += 2; }
        if (this.katakanaCb.checked) { newHash += 4; }
        if (this.modKatakanaCb.checked) { newHash += 8; }

        return newHash;
    },
};

init();
Game.init();