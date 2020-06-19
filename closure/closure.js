function nonesense(string){
    var blab = function(){
        alert(string);
    };
    return blab();
};
nonesense("Hello World")


//2
function nonesense(string){
    var blab = function(){
        alert(string);
    };
    return setTimeout(blab,2000);
};
nonesense("Hello World");

//3
function nonesense(string){
    var blab = function(){
        alert(string);
    };
    return blab;
};
let blabLater = nonesense("Hello World");
let blabAgainLater = nonesense("Hello");

// 4 
blabLater();
blabAgainLater();

// EXERCISE B 
//1

var lastNameTrier = function (firstName){
    var innerFunction = function (lastName){
        return firstName + " " +lastName;
    };
    return innerFunction;
};
var firstNameFarmer = lastNameTrier('Farmer');
firstNameFarmer('Brown');

// EXERCISE C
function storyWriter(){
    return{
        addWords : function (parameter){
            return parameter
        },
        erase : function (){
            return "";
        }
    }
}
var farmLoveStory = storyWriter();
farmLoveStory.addWords('There was once a lonely cow.'); // 'There was once a lonely cow.'
farmLoveStory.addWords('It saw a friendly face.'); //'There was once a lonely cow. It saw a friendly face.'
var storyOfMyLife = storyWriter();
storyOfMyLife.addWords('My code broke.'); // 'My code broke.'
storyOfMyLife.addWords('I ate some ice cream.'); //'My code broke. I ate some ice cream.'
storyOfMyLife.erase(); // ''












