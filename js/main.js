var _red = [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36];
var _row1 = [1,4,7,10,13,16,19,22,25,28,31,34];
var _row2 = [2,5,8,11,14,17,20,23,26,29,32,35];
var _row3 = [3,6,9,12,15,18,21,24,27,30,33,36];

if (!executed)
{
    for (var i = 0; i <= 36; i++){  eval("var t" + i + "= 0"); eval("var t" + i + "intensity = .7" );
    }
    var executed = true;
}

function count(a)
{
    var id = ("t" + a);
    for(var i = 0; i <= 36; i++)
    {
        tileColor(i, a);
        eval('t' + i + '+= 1')
        $("#t" + i + " sup").text(eval("t" + i));
    }
    
    eval("t" + a + "= 0");
    $("#t" + a + " sup").text(eval("" + id));
    
    highestTiles();
    columns(a); coloumnColor(a);
    odds2evens(a);
    low2high(a);
    rows(a);
    red2black(a);
    //setCookie("active", 1, 1);
}

function tileColor(i, a)
{
    if (_red.indexOf(i) !== -1 && i !== 0)
    {
    eval('t' + i + 'intensity += 0.004');
    document.getElementById('t' + i).setAttribute('style', 'background: rgba(255,0,0,' + eval('t' + i + 'intensity'));
    }

    else if (_red.indexOf(i) === -1 && i !== 0)
    {
    eval('t' + i + 'intensity += 0.004');
    document.getElementById('t' + i).setAttribute('style', 'background: rgba(28,28,28,' + eval('t' + i + 'intensity'));
    }
    
    if (_red.indexOf(a) !== - 1 && a !== 0)
    {
      eval('t' + a + 'intensity = 0.5');
      document.getElementById('t' + a).setAttribute('style', 'background: rgba(255,0,0,' + eval('t' + a + 'intensity'));  
    }
    
    else if (_red.indexOf(a) === - 1 && a !== 0)
    {
      eval('t' + a + 'intensity = 0.5');
      document.getElementById('t' + a).setAttribute('style', 'background: rgba(28,28,28,' + eval('t' + a + 'intensity'));  
    }
}

var first12Intensity = 0.5; var second12Intensity = 0.5; var third12Intensity = 0.5;
function coloumnColor(a)
{
    var increaseRate = 0.05;
    
    if (a !== 0)
    {
        if (a <= 12)
        {
        first12Intensity = 0.5;
        second12Intensity += increaseRate;
        third12Intensity += increaseRate;
        }

        else if (a >= 25)
        {
        first12Intensity += increaseRate;
        second12Intensity += increaseRate;
        third12Intensity = 0.5;
        }
    
        else if (a > 12 && a < 25)
        {
         first12Intensity += increaseRate;
         second12Intensity = 0.5;
         third12Intensity += increaseRate;
        }    
    }
    
    else
    {
        first12Intensity += increaseRate;
        second12Intensity += increaseRate;
        third12Intensity += increaseRate;
    }
    
    
    document.getElementById('first12').setAttribute('style', 'background: rgba(102,0,52,' + eval('first12Intensity'));
    document.getElementById('second12').setAttribute('style', 'background: rgba(102,0,52,' + eval('second12Intensity'));
    document.getElementById('third12').setAttribute('style', 'background: rgba(102,0,52,' + eval('third12Intensity'));
}

var firstRowIntensity = 0.5; var secondRowIntensity = 0.5; var thirdRowIntensity = 0.5;
function rowColor(a)
{
    var rowColorIntensity = 0.05;
    if (_row1.indexOf(a)>-1)
    {
        firstRowIntensity = 0.5;
        secondRowIntensity += rowColorIntensity;
        thirdRowIntensity += rowColorIntensity;
    }
    
    else if (_row2.indexOf(a)>-1)
    {
        firstRowIntensity += rowColorIntensity;
        secondRowIntensity = 0.5;
        thirdRowIntensity += rowColorIntensity;
    }
    
    else if (_row3.indexOf(a)>-1)
    {
        firstRowIntensity += rowColorIntensity;
        secondRowIntensity += rowColorIntensity;
        thirdRowIntensity = 0.5;
    }
    
    else
    {
        firstRowIntensity += rowColorIntensity;
        secondRowIntensity += rowColorIntensity;
        thirdRowIntensity += rowColorIntensity;
    }
    
    document.getElementById('firstRow').setAttribute('style', 'background: rgba(102,0,52,' + eval('firstRowIntensity'));
    document.getElementById('secondRow').setAttribute('style', 'background: rgba(102,0,52,' + eval('secondRowIntensity'));
    document.getElementById('thirdRow').setAttribute('style', 'background: rgba(102,0,52,' + eval('thirdRowIntensity'));
}

var first12 = 0;    var second12 = 0;   var third12 = 0;
function columns(b)
{   
    if (b <= 12 && b > 0){ first12 = 0;second12 ++;third12 ++; }
    else if (b >= 25){ first12 ++;second12 ++;third12 = 0; }
    else if (b > 12 && b < 25) { first12 ++;second12 = 0;third12 ++; }
    else { first12 ++; second12 ++; third12 ++;}
    
    $("#first12 sup").text(eval("first12"));
    $("#second12 sup").text(eval("second12"));
    $("#third12 sup").text(eval("third12"));  
}

var odd = 0;    var even = 0;
function odds2evens(d)
{
    odds2evensColor(d);
    if (d > 0 && d % 2 === 0)  {even = 0;   odd ++;}
    else if (d > 0) {even ++;   odd = 0;}
    
    $("#odds sup").text(eval("odd"));
    $("#evens sup").text(eval("even"));
    
    //setCookie('odd', odd, 1);
    //setCookie('even', even, 1);
}

var oddIntensity = 0.5;    var evenIntensity = 0.5;
var red = 0; var black = 0;
function odds2evensColor(g)
{
    if (g % 2 === 0 && g !== 0) {evenIntensity = 0.5; oddIntensity += 0.1;}
    else if (g !== 0) {evenIntensity += 0.1; oddIntensity = 0.5;}
    else {evenIntensity += 0.1; oddIntensity += 0.1;}
    
    document.getElementById('odds').setAttribute('style', 'background: rgba(0,102,0, ' + oddIntensity);
    document.getElementById('evens').setAttribute('style', 'background: rgba(0,102,0, ' + evenIntensity);
    
    //setCookie('oddIntensity', oddIntensity, 1);
    //setCookie('evenIntensity', evenIntensity, 1);
}


// Change colour and tile value so that user can track roulette 0-18 & 19-36 tiles.
var low = 0;    var high = 0;
function low2high(e)
{
    low2highColor(e);
    if (e > 0 && e <= 18){low = 0; high ++;}
    else if(e > 18){high = 0; low ++;}
    else {high ++; low ++;}
    
    $("#low-n sup").text(eval("low"));
    $("#high-n sup").text(eval("high")); 
}

var lowColor = 0.5;    var highColor = 0.5;
function low2highColor(e)
{
    if (e > 0 && e <= 18){lowColor = 0.5; highColor += 0.1;}
    else if(e > 18){highColor = 0.5; lowColor += 0.1;}
    else {highColor += 0.1; lowColor += 0.1;}
    
    document.getElementById('low-n').setAttribute('style', 'background: rgba(204,102,0, ' + lowColor);
    document.getElementById('high-n').setAttribute('style', 'background: rgba(204,102,0, ' + highColor);
}

var row1 = 0; var row2 = 0; var row3 = 0;
function rows(f)
{
    if (_row1.indexOf(f) > -1){ row1 = 0; row2 ++; row3 ++; rowColor(f);}
    else if (_row2.indexOf(f) > -1){ row1 ++; row2 = 0; row3 ++; rowColor(f);}
    else if (_row3.indexOf(f) > -1){ row1 ++; row2 ++; row3 = 0; rowColor(f);}
    else {row1 ++; row2 ++; row3 ++; rowColor(f);}
    
    $("#firstRow sup").text(eval("row1"));
    $("#secondRow sup").text(eval("row2"));
    $("#thirdRow sup").text(eval("row3"));
}


var redIntensity = 0.5;
var blackIntensity = 0.5;
var red = 0; var black = 0;
function red2black(g)
{
    if (_red.indexOf(g) > -1 && g !== 0) {red = 0; black++; redIntensity = 0.5; blackIntensity += 0.1;}
    else if (g !== 0) {red ++; black = 0; redIntensity += 0.1; blackIntensity = 0.5;}
    else {red++; black++; redIntensity += 0.1; blackIntensity += 0.1;}
    
    document.getElementById('red').setAttribute('style', 'background: rgba(237,0,0, ' + redIntensity);
    document.getElementById('black').setAttribute('style', 'background: rgba(28,28,28, ' + blackIntensity);
    
    $("#red sup").text(eval("red"));
    $("#black sup").text(eval("black"));
}

function highestTiles()
{   
    var topTen = [];
    var allTilesArray = {};
    
    for (var i = 0; i <= 36; i++)
    {
        var currentTile = eval("$('#t" + i + " sup').text()");
        allTilesArray[i] = currentTile;
    }
    
    topTen = Object.keys(allTilesArray).sort(function(a,b){return allTilesArray[b]-allTilesArray[a]})
    topTen = topTen.slice(0,13);
    topTen.sort(function(a,b) {return a - b;})
    $('#topten').text(topTen);
}

window.onload = function() {
    //randomIntFromInterval(0,36);
};

function randomIntFromInterval2(min,max)
{
    setTimeout(function() {
            var num = Math.floor(Math.random()*(max-min+1)+min);
            count(num);
            $('#numberSelection').text(num); 
    }, 30000);
    
    randomIntFromInterval(0,36);
}

function randomIntFromInterval(min,max)
{
    setTimeout(function() {
            var num = Math.floor(Math.random()*(max-min+1)+min);
            count(num);
            $('#numberSelection').text(num); 
    }, 30000);
    
    randomIntFromInterval2(0,36);
}

// ========================= Cookies ===========================
/***
window.onload = function() {
  cookieExists('active');
};

function cookieExists()
{
    if (getCookie('active') !== 0)
    {
        console.log('loading cookies')
        initiateCookies();
    }
    
    else
    {
        console.log('setting default')
        
       setCookie('oddIntensity', 0.5, 1);
       setCookie('evenIntensity', 0.5, 1);
    }
}

function initiateCookies(){
    $("#odds sup").text(eval("getCookie('odd')"));
    $("#evens sup").text(eval("getCookie('even')"));
    document.getElementById('odds').setAttribute('style', 'background: rgba(0,102,0, ' + (eval("getCookies('oddIntensity')")));
    document.getElementById('evens').setAttribute('style', 'background: rgba(0,102,0, ' + (eval("getCookies('evensIntensity')")));
}

function getColorIntensityCookies(cname){
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
    }
    return 0.5;
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toGMTString();
    
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
    }
    return 0;
}***/