var randomValue = 6;
var correctnessValue = 3;
var occurrenceCost = 5;
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
/*var hiraganaWithModMap = new Map();
var katakanaMap = new Map();
var katakanaWithModMap = new Map();
var fullKanas = new Map();*/

var Manager = {

    tabLinks: new Array(),
    
    onTabSwitchEvent: function(event){
        let atl = "activeTabLink";
        let iatl = "inactiveTabLink";
        console.log(event.target);
        this.tabLinks.forEach(function(tab){
            tab.classList.remove(atl);
            tab.classList.add(iatl);
        });
        event.target.classList.add(atl);
        event.target.classList.remove(iatl);
        console.log(event.target);
    },

    init: function(tablist){
        console.log(tablist)
        tablist.forEach(function(tab){
            Manager.tabLinks.push(tab);
        });
    },
};

function init(){
    let mainTabLink = document.getElementById('mainTabLink');
    let gameTabLink = document.getElementById('gameTabLink');
    let translitTabLink = document.getElementById('translitTabLink');
    let optionsTabLink = document.getElementById('optionsTabLink');
    

    Manager.init([mainTabLink,gameTabLink,translitTabLink,optionsTabLink])

    window.addEventListener('keydown', function(event) { Game.onKeydown(event); }, false);
    mainTabLink.addEventListener('click',function(event) { Manager.onTabSwitchEvent(event); }, true);
    gameTabLink.addEventListener('click',function(event) { Manager.onTabSwitchEvent(event); }, true);
    translitTabLink.addEventListener('click',function(event) { Manager.onTabSwitchEvent(event); }, true);
    optionsTabLink.addEventListener('click',function(event) { Manager.onTabSwitchEvent(event); }, true);
}
    
function kanaMapSemiSort(kanaMap){
    var toRet = new Array();
    for (var [unicode,[_,numCorrect,occurrences]] of kanaMap[Symbol.iterator]()){
        if (numCorrect === 0){ toRet.push([unicode, Math.random()*randomValue - occurrences * occurrenceCost]); }
        else { toRet.push([unicode, Math.random()*randomValue + (occurrences/numCorrect) * correctnessValue - occurrences * occurrenceCost]); }
    }
    return toRet.sort(kanaSort);
}

function kanaSort(a, b){
    if (a[1] === b[1]){ return 0; }
    else { return (a[1] < b[1]) ? 1 : -1; }
}

function toggleClass(elId, classId){
    document.getElementById(elId).classList.toggle(classId);
}



var Game = {
    kanaDiv: document.getElementById("kanaDiv"),
    textDiv: document.getElementById("textDiv"),
    answer: document.getElementById("answer"),
    currentIteration: 0,
    listHalfLen: 0,
    kanaList: {},
    currentKana: "",
    
    init: function(){
        this.kanaList = kanaMapSemiSort(hiraganaMap); //hardcode this for now but add choice later when it's made all pretty-like and stuff.
        console.log(this.kanaList);
        this.listHalfLen = this.kanaList.length / 4;
        this.currentKana = this.kanaList[0][0];
        this.kanaDiv.textContent = this.currentKana;
        this.textDiv.textContent = "";
    },
    
    reset: function(){
        this.kanaList = kanaMapSemiSort(hiraganaMap); //hardcode this for now but add choice later when it's made all pretty-like and stuff.
        console.log(this.kanaList);
        this.currentIteration = 0;
        this.currentKana = this.kanaList[0][0];
        this.kanaDiv.textContent = this.currentKana;
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
        var value = hiraganaMap.get(this.kanaDiv.textContent);
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

init();
Game.init();