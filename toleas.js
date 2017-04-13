var word = "";
var startPho;



function writeWord(wordsId){
    words = wordsId;
}


//CONSONANT CHOOSING PROCESS
var rankOneC = ["r", "s", "t", "v", "thr", "sk", "fr", "gr", "sr", "sv", "vr", "k"];
var rankTwoC = ["thl", "dr", "kr", "gl", "skl", "f", "th", "br", "g", "n", "m", "y", "w"];
var rankThreeC = ["kn", "sf", "sm", "fl", "sh", "ch", "chr", "b", "d", "h", "j", "l"];
var rankFourC = ["pl", "sn", "br", "fj", "klr", "p", "z", "chv", "chj"];
var rankFiveC = ["dj", "snr", "krt", "krs", "kld", "klj", "blr", "wj", "zr", "x"];
var rankC;

function pickRankC() {
    var RandRankC = Math.floor((Math.random() * 177));
    if (RandRankC >= 1 && RandRankC <= 60) {
        rankC = rankOneC;
    }
    else if (RandRankC >= 61 && RandRankC <= 112) {
        rankC = rankTwoC;
    }
    else if (RandRankC >= 113 && RandRankC <= 148) {
        rankC = rankThreeC;
    }
    else if (RandRankC >= 149 && RandRankC <= 166) {
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
    var RandRankV = Math.ceil((Math.random() * 28));
    if (RandRankV >= 1 && RandRankV <= 12) {
        rankV = rankOneV;
    }
    else if (RandRankV >= 13 && RandRankV <= 22) {
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









function createWordList() {
      var wordLength = document.getElementById('wordLength').value;
        var wordLengthFinal = wordLength - 1;
    var num = document.getElementById('numOfWords').value;
    var numOfWords = num - 1;
//parses how many words in the list
    var i = 0;
    while (i <= numOfWords) {
        i++;
//parses word length



        //assembles individual words
        if (startPho == 0) //startPho is a vowel
            for (x = 0; x <= wordLengthFinal; x++) { //length
                var syll = vowCon();
                console.log(syll);
                document.write(syll);
            }
            else if (startPho == 1) //startPho is a conso
                for (x = 0; x <= wordLengthFinal; x++) {
                    var syll = conVow();
                        document.write(syll);
                        console.log(syll);
            }
            else {
                document.write("Please select a starting phoneme for the word!");
            }
    writeWord();
        document.write("<br />")
    }
}



