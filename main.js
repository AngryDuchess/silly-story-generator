//select input field for custom name
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

var storeText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."
var insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
var insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
var insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

randomize.addEventListener('click', result);


function result() {

var newStory = storeText;
var xItem = randomValueFromArray(insertX);
var yItem = randomValueFromArray(insertY);
var zItem = randomValueFromArray(insertZ);

newStory = newStory.replace(/:insertx:/g,xItem);
newStory = newStory.replaceAll(/:inserty:/g,yItem);
newStory = newStory.replaceAll(/:insertz:/g,zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace(/Bob/g, name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14) + "stone";
    const temperature =  Math.round(((94 - 32) * 5)/9) + "centigrade";
    newStory = newStory.replace(/94 farenheit/g, temperature);
    newStory = newStory.replace(/300 pounds/g, weight);
}

  story.textContent = newStory;
  story.style.visibility = 'visible';
}