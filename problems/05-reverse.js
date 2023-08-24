/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""

recursion case/ if there are letters to go through it'll keep running


recursion base/ when its no letters to go through then it ends


recurison step/ going from one char to the next 


***********************************************************************/


function reverse(str) {
  if (str.length > 0){
    let remaining = str.slice(1)
    let letter = str[0]

return reverse(remaining)+ letter
  } else { 
return ""

  }
  
}

console.log(reverse("house")); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
