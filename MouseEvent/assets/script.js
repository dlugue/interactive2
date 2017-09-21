 $(document).ready(function() {

/* Store prompts in an arrary */
var prompts = ['an Apple', 'the Mona Lisa', 'Yourself', 'a Dog', ' a Chimera', 'a Cat',];
var numPrompts = prompts.length;
console.log(numPrompts);

// Check values of each index
//console.log(prompts[3]);

/*  Get random number 
    Change multiplier to set range, 0 to multiplier    
*/

//var numRand = Math.floor(Math.random()*5000);
//console.log(numRand);

var numRand = Math.floor(Math.random()*6); 

/* Display random prompt */

$('span').text(prompts[numRand]);
});