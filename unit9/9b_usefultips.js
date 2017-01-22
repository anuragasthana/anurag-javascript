var date = new Date();
var monthday = date.getDate();

//array defining tips for each day of a month
var tips = new Array(31);
tips[1] = "Always remember to brush your teeth two times a day!";
tips[2] = "Wash your face after eating your food.";
tips[3] = "Instead of eating junk food, eat healthy food such as fruits and vegetables.";
tips[4] = "Exercise at least one hour a day.";
tips[5] = "Be respectful to your teachers and your relatives.";
tips[6] = "Don't be a bully! Stop hurting others.";
tips[7] = "Plan out your day so that it is easier for you to do your work.";
tips[8] = "Read plenty of books. It will help you improve your spelling, writing, and grammar.";
tips[9] = "Use your time wisely!!";
tips[10] = "Go outside and get some fresh air every day.";
tips[11] = "Drink plenty of water so that you don't get dehydrated.";
tips[12] = "Listen to classical music.It will keep you in a calm mood.";
tips[13] = "Help out the poor .Donate to charities.";
tips[14] = "Solve puzzles that will twist your mind.";
tips[15] = "Be conservative of energy. Turn off all sources of electricity when not needed.";
tips[16] = "Take a break whenever you are tired of working.";
tips[17] = "Ask somebody for help when you are stuck.";
tips[18] = "Make sure to keep your things neat and orderly so that it's easier to do your work.";
tips[19] = "Loosing track of all these tips? Write them down!";
tips[20] = "Always keep a watch with you. It is easy to lose track of the time.";
tips[21] = "Be sure to spend time with your friends! It will keep you relaxed and cheerful.";
tips[22] = "Always be confident of yourself.";
tips[23] = "Don't be a pessimist.Always be cheerful!";
tips[24] = "Be sure to sleep at least 8 hours a day!";
tips[25] = "Travel anywhere around the world and go to interesting and fun places.";
tips[26] = "Don't hurt your eyes to much when using electronics.";
tips[27] = "Try not to use slang in your language. It gives you a bad reputation.";
tips[28] = "Remember to write your name on your personal possessions.";
tips[29] = "Remember to wash your hands before eating any meal.";
tips[30] = "Always help others when they need it.";
tips[31] = "Conserve nature.";

if (monthday > 0) {
    tips
}
var startPos = 0;
var day_div = document.getElementById("day");
scrollingDisplay();

//Display tip in a scrolling manner, by changing start posion of the display string
function scrollingDisplay(){
    day_div.innerHTML = tips[monthday].substring(startPos, tips[monthday].length) + " " + tips[monthday].substring(0, startPos);
    startPos = startPos + 1;
    if (startPos > tips[monthday].length) {
        startPos = 0;
    }
    window.setTimeout("scrollingDisplay()", 400);
};
