const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

var storyText = "It was 94 fahrenheit outside, so :insertx: who weighs 300 pounds decided to leave their couch and go outside. They wanted to go somewhere, but not sure where. It took them awhile, but eventually went to :inserty:. Once they were there, they started having a fun time, but all of a sudden :insertz:. Bob witnessed it happen and didn't know what to do. But eventually, they decided to leave without saying anything. It will forever be their secret";

var insertX = ["Batman","Ronald McDonald", "my ex girlfriend"];

var insertY = ["my parent's basement", "Rapunzel's tower ", "Toyota-thon"];

var insertZ = ["decided to order a slice of pizza", "started coding a website for a midterm project", "began planning a Netflix and chill date"];

randomize.addEventListener('click', result);

function result() {

var newStory = storyText

var xItem = randomValueFromArray(insertX);

var yItem = randomValueFromArray(insertY);

var zItem = randomValueFromArray(insertZ);

newStory = newStory.replace(':insertx:' ,xItem);
newStory = newStory.replace(':inserty:' ,yItem);
newStory = newStory.replace(':insertz:' ,zItem);

  if(customName.value !== 'Bob') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14)+ ' stone';
    const temperature =  Math.round((94-32)*.5556) +' centigrade';
    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);
  }

  story.textContent = newStory
  story.style.visibility = 'visible';
}

