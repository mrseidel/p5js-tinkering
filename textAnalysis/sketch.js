

function setup() {
  var myCanvas = createCanvas(windowWidth, windowHeight * 3/4);
  myCanvas.parent('bgSketch');


}

function draw() {
  background(0);

}

//Used to automatically resize the canvas to the window size.
function windowResized() {
  resizeCanvas(windowWidth, windowHeight * 3/4);
}

/*
Planning:

Remove all punctuation
Break into words

Create an array of objects
[obj, obj, obj,...]
//can i create an array quickly using ascii?

{
  id: //the character that is in question

  if (obj[char]) {
    obj[char] += 1
  } else {
   obj[char] = 1;
 }
}

looking for the relation of every letter to other letters in
single words.  For example in the word "letter", the letter
"L" is related to 'e' twice, 't' twice, and 'r' once, while
the letter 'e' is related to 'l' once, 'e' once, 't' twice,
and 'r' once, etc.

Need to make sure that I don't double count; i.e. I have to
only work with a letter the first time I run into it in the
word.  If I run into it again, I just ignore the letter and
move on to the next word.



Now I have objects and their associated




Possible visual (based on "letter"):

         r
         |
    2t - l - 2e


Possible visual based on "letter loop loves life"

   p  r  3o f
    \ | /  /
2t -  l    - 4e
    / | \ \
   3l v s i

The numerical value can relate to the size.
The numerical value of vowels can relate to colour
The numerical value of consonents can relate to alpha?

If I click on another letter, then the focus can change
to that letter and I would then see the tree go out from
that letter.

The visual can also be a ring graph

*/
