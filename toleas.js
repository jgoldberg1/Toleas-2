var word = "";
var startPho;



function writeWord(){  document.getElementById('outputId').innerHTML = word;
}


//CONSONANT CHOOSING PROCESS
var rankOneC = ["r", "s", "t", "v", "thr", "sk", "fr", "gr", "sr", "sv", "vr", "k"];
var rankTwoC = ["thl", "dr", "kr", "gl", "skl", "f", "th", "br", "g", "n", "m", "y", "w"];
var rankThreeC = ["kn", "sf", "sm", "fl", "sh", "ch", "chr", "b", "d", "h", "j", "l"];
var rankFourC = ["pl", "sn", "br", "fj", "klr", "p", "z", "chv", "chj"];
var rankFiveC = ["dj", "snr", "krt", "krs", "kld", "klj", "blr", "wj", "zr", "x"];
var rankC;

function pickRankC() {
    var RandRankC = Math.floor((Math.random() * 16));
    if (RandRankC == 1 || RandRankC == 2 || RandRankC == 3 || RandRankC == 4 || RandRankC == 5) {
        rankC = rankOneC;
    }
    else if (RandRankC == 6 || RandRankC == 7 || RandRankC == 8 || RandRankC == 9) {
        rankC = rankTwoC;
    }
    else if (RandRankC == 10 || RandRankC == 11 || RandRankC == 12) {
        rankC = rankThreeC;
    }
    else if (RandRankC == 13 || RandRankC == 14) {
        rankC = rankFourC;
    }
    else {
        rankC = rankFiveC;
    }
    return rankC;

}

function randPhonemeC() {
    var arrC = pickRankC();
    var lengthC = arrC.length - 1;
    var arrElemC = Math.ceil(Math.random() * lengthC);
    var phonemeC = rankC[arrElemC];
    return phonemeC;
}

//VOWEL CHOOSING PROCESS
var rankOneV = ["he", "&iacute", "e", "u"];
var rankTwoV = ["&iuml", "hi", "o", "ha", "&euml"];
var rankThreeV = ["&uuml", "&ouml", "ho", "&auml", "a", "hu"];

var rankV;

function pickRankV() {
    var RandRankV = Math.ceil((Math.random() * 6));
    if (RandRankV == 1 || RandRankV == 2 || RandRankV == 3) {
        rankV = rankOneV;
    }
    else if (RandRankV == 4 || RandRankV == 5) {
        rankV = rankTwoV;
    }
    else {
        rankV = rankThreeV;
    }

    return rankV;

}


function randPhonemeV() {
    var arrV = pickRankV();
    var lengthV = arrV.length - 1;
    var arrElemV = Math.ceil(Math.random() * lengthV);
    var phonemeV = rankV[arrElemV];
    return phonemeV;

}



//syllable assembly

function vowCon() {
    var sylVC = randPhonemeV() + randPhonemeC();
    return sylVC;
    console.log(sylVC);
}

function conVow() {
    var sylCV = randPhonemeC() + randPhonemeV();
    return sylCV;
}


//word assembly


function vowelStart() {
    startPho = 0;
    console.log(startPho);
    return startPho;
}
function consoStart() {
    startPho = 1;
    console.log(startPho);
    return startPho;
}

function assemble() {
    var howLong = document.getElementById('wordLength').value;
    var wordLength = howLong - 1;
    if (startPho == 0) //startPho is a vowel
        for (i = 0; i <= wordLength; i++) { //length
            var syll = vowCon();
            document.write(syll);
            console.log(syll);
        }
    else if (startPho == 1) //startPho is a conso
        for (i = 0; i <= wordLength; i++) {
            var syll = conVow();
            document.write(syll);
            console.log(syll);
        }
    else {
        document.write("Please select a starting phoneme for the word!");
    }

    writeWord();
}



