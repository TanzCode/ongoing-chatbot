//
let userName = "";
let weightScale = "";
let bmi ="";

let namestates = false;

// Define greetings and corresponding responses from user
const greetings = [
  "hi", "hello", "hey", "hey hey", "whatsup", "hii", "hello hi", "hello yum yum", "hi yum"
];

  //user enter the what is your name
  const naming = ["what is your name", "name", "your name", "whats your name"];

  const glad = ["i'm glad to hear that", "i'm happy to hear", "great to hear it"];
  const fine = ["i'm good", "i'm fine","i'm doing good", "good", "okay"];
  const doingGood = ["I'm doing good", "I'm Happy","i'm here to help you"];
  const howyou = ["How are you?", "how you","How you doing?"];
//------------------------BOT RANDOM RESPONSES--------------------------------//


// BOT greeting
const hiResponses = [
  "Whatsup <b>{{userName}}</b><br><img src='giphy.gif' alt='' width='100' height='100'>",
  "Hello <b>{{userName}}</b><br><img src='giphy.gif' alt='' width='100' height='100'>",
  "Hello <b>{{userName}}</b>, Nice to meet you...<br><img src='giphy.gif' alt='' width='100' height='100'>"
];

//BOT asking weight and height
const weightAndHeight = [
    "To continue this chat or suggest you meals first I need to know your <b>BMI </b>value<br> To calculate the BMI I need your <b>height</b> (in meters) and <b>weight</b> (in kilograms)  ",
    "To continue this chat or suggest you meals first I need to know your <b>BMI </b>value<br>In order to calculate BMI, I require some data. What's your <b>height</b> (in meters) and <b>weight</b> (in kilograms) ?",
    ];


// Object to store Bot responses for different user inputs
const responseObj = {
  "default": "I'm sorry, I didn't get that.",
  "greeting": "Hello <b>{{userName}}</b>,I'm <b>Yum Yum 😊</b>. what's your name? ",
};


//-------------Under weight meal set
const Overweight = {
  breakfast: [
    "🥯 Whole grain bagel with 1/2 teaspoon of light cream cheese<br>🍓 Strawberry jam without sugar<br>☕ 1 cup of decaffeinated coffee with 4 ounces of skimmed milk (Approx. 200 cal.)",
    "🍇 1/2 cup of frozen fruits<br>8 ounces of low-fat yogurt (Approx. 170 cal.)",
    "🥛 4 ounces of skimmed milk<br>🥣 1/2 cup of whole wheat cereal<br>🍏 1 medium apple (Approx. 205 cal)",
    "🍲 1/2 cup of cooked oats with 4 ounces of skimmed milk<br>2 low-fat, low-sodium turkey slices (Approx. 205 Cal.)",
    "🥣 1/2 cup of whole wheat cereal with 4 ounces of low-fat yogurt<br>1 cup of blueberries (Approx. 185 Cal.)", 
    "🍞 1 slice of whole wheat bread<br>🧀 1 slice of low-fat, low-sodium cheese<br>☕ 1 cup of decaffeinated coffee with 4 ounces of skimmed milk (Approx. 180 cal.)",
    
  ],
  lunch: [
    "🍞 1 slice of whole wheat bread<br>🥚 2 hard-boiled eggs<br>🍅 1 sliced tomato<br>🥗 2 cups of lettuce with 1 teaspoon low-fat dressing (Approx. 410 cal.)",
    "🦃 3 ounces of low-fat, low-sodium turkey slices<br>🥚 1 teaspoon low-fat mayonnaise<br>🥕 1 cup of raw carrots and celery<br>🥗 1 cup of lettuce<br>🍞 1 slice whole wheat bread (Approx. 270 cal.)",
    "🐟 1 low-sodium can of tuna<br>🫒 1 teaspoon of olive oil and some lemon juice<br>🌶️ 1 cup of sliced red peppers<br>🌿 2 cups of raw spinach<br>🍅 1 teaspoon of low-fat Italian dressing (Approx. 300 cal.)",
    "🍚 1/3 cup of brown rice<br>🍗 3 ounces of boneless grilled chicken breast<br>🥕 1 cup of raw celery<br>🥕 1 cup of raw carrots<br>🥗 2 teaspoons of light ranch dressing (Approx. 320 cal.)",
    "🌮 1/2 cup of black beans<br>🍚 1/2 cup of brown rice<br>🥗 2 cups of lettuce with low-fat ranch dressing<br>🍌 1/2 of a banana (Approx. 310 cal.)",
    "🍝 1/2 cup of whole wheat pasta<br>🫒 1 teaspoon of olive oil<br>🧀 two teaspoons of parmesan cheese<br>🐟 3 oz of grilled salmon<br>🍅 2 cups of lettuce, tomatoes, and onions<br>🥦 1/2 cup of your favorite steamed vegetables<br>🥛 two teaspoons of light sour cream (Approx. 365 cal.)",
    "🥗 1/2 cup of red beans<br>🍝 1/2 cup of whole wheat pasta (macaroni) with salt and pepper<br>🥗 2 cups of lettuce<br>🧀 1 teaspoon of parmesan cheese<br> Serve cold (Approx. 315 cal.)"
  ],
  
  dinner: [
    "🍗 3 ounces of boneless grilled chicken breast<br>🥦 1 cup of steamed broccoli with 1 teaspoon of low-fat dressing<br>🥔 1/2 baked potato with pepper and oregano (Approx. 275 cal.)",
    "🍚 1/2 cup of brown rice<br>🐟 3 ounces of baked salmon<br>🥦 2 cups of steamed broccoli with 2 teaspoons of low-fat cream cheese (Approx. 325 cal.)",
    "🐟 5 ounces of baked tilapia<br>🫒 1 teaspoon of olive oil<br>🌽 1/2 cup of low-sodium corn<br>🥬 2 cups of fresh spinach<br>🍷 2 teaspoons of low-sodium red wine vinaigrette (Approx. 360 cal.)",
    "🦃 6 ounces of low-fat, low-sodium turkey breast<br>🥗 2 cups of lettuce with 2 tablespoons of raisins<br>🍷 2 teaspoons of low-sodium red wine vinaigrette (Approx. 350 cal.)",
    "🥩 2 grilled tofu slices (1 inch) seasoned with a little salt and pepper<br>🍄 1/2 cup of sliced mushrooms<br>🧅 1/2 cup of onions (julienne style)<br>🍅 1 tomato (julienne style), cooked on the grill with 2 teaspoons of olive oil and a dash of black pepper<br>🥔 baked potato (Approx. 345 cal.) ",
    "🍗 3 ounces of boneless grilled chicken breast<br>🥦 2 cups of baked broccoli<br>🥗 2 teaspoons of low-fat, low-sodium dressing<br>🍚 1/2 cup of brown rice (Approx. 325 cal.)",
    "🐟 3 ounces of grilled tuna<br>🥬 2 cups of dark green vegetables<br>🍅 1 sliced tomato<br>🥗 2 teaspoons of low-fat, low-sodium dressing<br>🍚 1/2 cup of brown rice (Approx. 325 cal.)"
  ],
  snack: [
    "🍊 1 medium orange<br>🥧 1/2 small muffin (Approx. 150 cal.)",
    " 🍊 1 medium tangerine<br>🍘 5 unsalted rice crackers<br>🌰 6 almonds (Approx. 175 cal.)",
    " 🍊 1 medium orange<br>🍪 1 granola cookie (70 calories)<br>(Approx. 140 cal.)",
    "🍈 1 cup of melon<br>🧁 1/2 of a whole wheat muffin (Approx. 130 cal.)",
    "🍍 1/2 cup of pineapple<br>🍫 1 low-sodium granola bar (160 calories)<br>(Approx. 220 cal.)",
    "🍓 6 big strawberries<br>🍪 1 granola cookie (70 calories)<br>(Approx. 130 cal.)",
    "🍇 1/2 cup of frozen fruits<br>🥖 2 breadsticks (Approx. 130 cal.)"    
  ]
};

//-------------Overweight meal set
const Underweight = {
  breakfast: ["Greek yogurt with fresh berries", "Scrambled eggs with spinach and mushrooms", "Smoothie with kale, apple, and cucumber"],
  lunch: ["Grilled chicken salad with mixed greens", "Tuna wrap with whole grain tortilla and veggies", "Quinoa salad with mixed vegetables"],
  dinner: ["Baked salmon with steamed broccoli", "Grilled chicken with quinoa and asparagus", "Stir-fried tofu with mixed vegetables"],
  snacks: ["Carrot sticks with hummus", "Apple slices with almond butter", "Greek yogurt with a handful of almonds"]
};

//-------------normal weight meal set
const NormalWeight = {
  breakfast: ["Oatmeal with fresh fruits and nuts", "Whole grain toast with avocado and eggs", "Smoothie with spinach, banana, and protein powder"],
  lunch: ["Chicken salad with mixed greens and whole grain bread", "Tuna wrap with whole grain tortilla and veggies", "Quinoa salad with mixed vegetables and feta cheese"],
  dinner: ["Grilled salmon with quinoa and steamed vegetables", "Baked chicken with sweet potato and green beans", "Stir-fried tofu with mixed vegetables and brown rice"],
  snacks: ["Greek yogurt with mixed berries", "Almond butter and apple slices", "Hummus with carrot and cucumber sticks"]
};

//advices for over weigt 
const advicesBMI ={
  overweightAdvice: [
    "<ul>",
    "<li>Get 30 minutes of aerobic exercise 5 times per week</li><li>Enjoy a low-cholesterol diet with lean meats, fruits, vegetables, and whole grains</li>",
    "<li>Limit consumption of red meat and sugary foods and drinks</li>",
    "<li>Keep a close eye on portion sizes</li>",
    "<li>Balance your calorie consumption with your physical activity</li>",
    "</ul>"
  ],
  underweightAdvicce: [
    "<ul>",
    "<li>Choose foods high in nutrients and calories</li>",
    "<li>Add extras like cheese or milk to boost calories.</li>",
    "<li>Opt for nutrient-rich smoothies or shakes.</li>",
    "<li>Avoid beverages before or during meals.</li>",
    "<li>Engage in strength training to build muscle</li>",
    "</ul>"
  ],
  normalweightAdvice: [
    "Maintain your weight",
    "<ul>",
    "<li>Choose nutritious and tasty foods, like fruits, vegetables, and whole grains./li>",
    "<li>Regular water intake can help maintain a healthy weight.</li>",
    "<li>Monitor your daily calorie intake to manage your weight.</li>",
    "<li>Regular exercise, including cardio and strength training, helps maintain weight and improve health.</li>",
    "</ul>"
  ],

};


const bmiDetails={
  what: ["<p>BMI stands for Body Mass Index (BMI) is a measure of body fat based on height and weight that applies to adult men and women.<br> For more details you can visit <a href='https://my.clevelandclinic.org/health/articles/9464-body-mass-index-bmi'>What is BMI</a>"],
  calculate:["<img src='BMIimg/calPNG.PNG' width =250 height=100>"]

};


//---------------------------End OF BOT RANDOM RESPONSES--------------------------------//


//---------------------------Start of the CALARI MAP----------------------------------------------//
// Create the foodCalories map using the set method
const foodCalories = new Map();

// Set the food items and their corresponding calories
foodCalories.set('apple', 'medium - 72 cal');
foodCalories.set('bagel', '289 cal');
foodCalories.set('banana', 'medium - 105 cal');
foodCalories.set('beer', '(regular, 12 ounces) - 153 cal');
foodCalories.set('bread', '(one slice, wheat or white) - 66 cal');
foodCalories.set('butter', '(salted, 1 tablespoon) - 102 cal');
foodCalories.set('carrot', '(raw, 1 cup) - 52 cal');
foodCalories.set('cheddar cheese', '(1 slice) - 113 cal');
foodCalories.set('chicken breast', '(boneless, skinless, roasted, 3 ounces) - 142 cal');
foodCalories.set('chocolate chip cookie', '(from packaged dough) - 59 cal');
foodCalories.set('coffee', '(regular, brewed from grounds, black) - 2 cal');
foodCalories.set('cola', '(12 ounces) - 136 cal');
foodCalories.set('corn', '(canned, sweet yellow whole kernel, drained, 1 cup) - 180 cal');
foodCalories.set('egg', '(large, scrambled) - 102 cal');
foodCalories.set('granola bar', '(chewy, with raisins, 1.5-ounce bar) - 193 cal');
foodCalories.set('green beans', '(canned, drained, 1 cup) - 40 cal');
foodCalories.set('ground beef patty', '(15 percent fat, 4 ounces, pan-broiled) - 193 cal');
foodCalories.set('hot dog', '(beef and pork) - 137 cal');
foodCalories.set('ice cream', '(vanilla, 4 ounces) - 145 cal');
foodCalories.set('milk', '(2 percent milk fat, 8 ounces) - 122 cal');
foodCalories.set('mixed nuts', '(dry roasted, with peanuts, salted, 1 ounce) - 168 cal');
foodCalories.set('oatmeal', '(plain, cooked in water without salt, 1 cup) - 147 cal');
foodCalories.set('orange juice', '(frozen concentrate, made with water, 8 ounces) - 112 cal');
foodCalories.set('pizza', '(pepperoni, regular crust, one slice) - 298 cal');
foodCalories.set('potato', '(medium, baked, including skin) - 161 cal');
foodCalories.set('potato chips', '(plain, salted, 1 ounce) - 155 cal');
foodCalories.set('raisins', '(1.5 ounces) - 130 cal');
foodCalories.set('red wine', '(cabernet sauvignon, 5 ounces) - 123 cal');
foodCalories.set('rice', '(white, long grain, cooked, 1 cup) - 205 cal');
foodCalories.set('shrimp', '(cooked under moist heat, 3 ounces) - 84 cal');
foodCalories.set('spaghetti', '(cooked, enriched, without added salt, 1 cup) - 221 cal');
foodCalories.set('spaghetti sauce', '(marinara, ready to serve, 4 ounces) - 92 cal');
foodCalories.set('tuna', '(light, canned in water, drained, 3 ounces) - 100 cal');
foodCalories.set('white wine', '(sauvignon blanc, 5 ounces) - 121 cal');

//---------------------------End of the CALARI MAP----------------------------------------------//
//---------------------------START of Emotion MAP-----------------------------------------------//
const emotions = new Map();
emotions.set('happy','emotions/happy.png');
emotions.set('sad','emotions/sad.png');
emotions.set('angry1','emotions/angry1.png');
emotions.set('angry2','emotions/angry2.png');
emotions.set('cry','emotions/cry.png');
emotions.set('laugh','emotions/laugh.png');
emotions.set('normalSmile','emotions/normalSmile.png');
emotions.set('smile','emotions/smile.png');
emotions.set('welcome','emotions/welcomeMood.png');
//---------------------------END od Emotion MAP-------------------------------------------------//
// Function to get the chatbot's response based on user input
function getChatbotResponse(userInput) {
  let response;

  // Convert user input to lowercase for case-insensitive matching
  userInput = userInput.toLowerCase();
//user name 

  if (naming.includes(userInput)) {
    userName = ''; // Set user's name
    namestates = true;
    response = `${responseObj["greeting"].replace("{{userName}}", userName)}`;
   }
  else if(!userName && namestates){
    response = getname(userInput);
     }
  else if (greetings.includes(userInput)) {
    renderEmotion('happy');
    response = hiResponses[Math.floor(Math.random() * hiResponses.length)].replace("{{userName}}", userName);
  }
  else if(glad.includes(userInput)){
    response = "Thank you.. I'm happy for you";
  }
  else if(fine.includes(userInput)){
    response = glad[Math.floor(Math.random())];
  }
  else if(howyou.includes(userInput)){
    response = doingGood[Math.floor(Math.random())];
  }
  //check if user input includes BMI related question
  else if(userInput.includes("bmi")||userInput.includes("body mass index")){
    if (userInput.includes("what is")||userInput.includes("Mean")||userInput.includes("describe")||userInput.includes("explain")){
      response=bmiDetails.what;
    }
    else if(userInput.includes("calculate")||userInput.includes("how to")){
      response=bmiDetails.calculate;
    }
    else if(userInput.includes("my")){
      if (!bmi){
        response = weightAndHeight[Math.floor(Math.random() * weightAndHeight.length)];
      }
      else{
        response=("Your BMI is "+bmi);
      }
    }

    else
    {
      response="What you need to know about <b>BMI</b>";
    }
  }

  // weight and height input by user
  else if (userInput.includes("weight") && userInput.includes("height")) {
    response=getBMI(userInput);
  }

//Meal plans for today or a day
  else if ((userInput.includes("breakfast")&& userInput.includes("Lunch")&&userInput.includes("dinner"))||userInput.includes("day meal")||userInput.includes("meals for today")||userInput.includes("meal plan for today")||userInput.includes("meal plan")) {
    if (!bmi){
      response = weightAndHeight[Math.floor(Math.random() * weightAndHeight.length)];
    }
    //overweight
    else if(weightScale=="overweight"){
      let breakfastOptions = Overweight.breakfast;
      let randomIndexB = Math.floor(Math.random() * breakfastOptions.length);
      let breakfastDay = breakfastOptions[randomIndexB];

      let lunchOptions = Overweight.lunch;
      let randomIndexL = Math.floor(Math.random() * lunchOptions.length);
      let lunchDay = lunchOptions[randomIndexL];

      let dinnerOptions = Overweight.dinner;
      let randomIndexD= Math.floor(Math.random() * dinnerOptions.length);
      let dinnerDay = dinnerOptions[randomIndexD];

      let snackOptions = Overweight.snack;
      let randomIndexS = Math.floor(Math.random() * snackOptions.length);
      let snackDay = snackOptions[randomIndexS];
      response = (" 🍽 <b>Breakfast - </b>"+breakfastDay +"<br>  🍽 <b>Lunch</b> - "+lunchDay+"<br> 🍽 <b>Dinner </b>- "+dinnerDay+"<br> 🍪<b> Snack </b> - "+snackDay);
    }
    //underweight
    else if(weightScale=="underweight"){
      let breakfastOptions = Underweight.breakfast;
      let randomIndexB = Math.floor(Math.random() * breakfastOptions.length);
      let breakfastDay = breakfastOptions[randomIndexB];

      let lunchOptions = Underweight.breakfast;
      let randomIndexL = Math.floor(Math.random() * lunchOptions.length);
      let lunchDay = lunchOptions[randomIndexL];

      let dinnerOptions = Underweight.breakfast;
      let randomIndexD= Math.floor(Math.random() * dinnerOptions.length);
      let dinnerDay = dinnerOptions[randomIndexD];

      let snackOptions = Underweight.breakfast;
      let randomIndexS = Math.floor(Math.random() * snackOptions.length);
      let snackDay = snackOptions[randomIndexS];
      response = (" 🍽 <b>Breakfast - </b>"+breakfastDay +"<br>  🍽 <b>Lunch</b> - "+lunchDay+"<br> 🍽 <b>Dinner </b>- "+dinnerDay+"<br> 🍪<b> Snack </b> - "+snackDay);
    }

      //normal weight 
    else if(weightScale=="normalweight"){
        let breakfastOptions = NormalWeight.breakfast;
        let randomIndexB = Math.floor(Math.random() * breakfastOptions.length);
        let breakfastDay = breakfastOptions[randomIndexB];
  
        let lunchOptions = NormalWeight.breakfast;
        let randomIndexL = Math.floor(Math.random() * lunchOptions.length);
        let lunchDay = lunchOptions[randomIndexL];
  
        let dinnerOptions = NormalWeight.breakfast;
        let randomIndexD= Math.floor(Math.random() * dinnerOptions.length);
        let dinnerDay = dinnerOptions[randomIndexD];
  
        let snackOptions = NormalWeight.breakfast;
        let randomIndexS = Math.floor(Math.random() * snackOptions.length);
        let snackDay = snackOptions[randomIndexS];
        response = (" 🍽 <b>Breakfast - </b>"+breakfastDay +"<br>  🍽 <b>Lunch</b> - "+lunchDay+"<br> 🍽 <b>Dinner </b>- "+dinnerDay+"<br> 🍪<b> Snack </b> - "+snackDay);
      }

  }

  //meal for week 
  else if (userInput.includes("meal plan for this week")||userInput.includes("week meal plan")){
    renderEmotion('cry')
    response = "Sorry, I'm unable to give a meal plan for the whole week"
  }

  // breakfast options
  else if (userInput.includes("breakfast")||userInput.includes("morning meal")) {
    if (!bmi){
      response = weightAndHeight[Math.floor(Math.random() * weightAndHeight.length)];
    }
    //breakfast for underweight
    else if(weightScale=="underweight"){
      let breakfastOptions = Underweight.breakfast;
      let randomIndex = Math.floor(Math.random() * breakfastOptions.length);
      response = "<b>Beakfast :</b><br>"+breakfastOptions[randomIndex];
     }
     //breakfast for overweight
     else if(weightScale=="overweight"){
      let breakfastOptions = Overweight.breakfast;
      let randomIndex = Math.floor(Math.random() * breakfastOptions.length);
      response = "<b>Beakfast :</b><br>"+breakfastOptions[randomIndex];
     }
     //breakfast for normalweight
     else if(weightScale=="normalweight"){
      let breakfastOptions = NormalWeight.breakfast;
      let randomIndex = Math.floor(Math.random() * breakfastOptions.length);
      response = "<b>Beakfast :</b><br>"+breakfastOptions[randomIndex];
     }
  }
  //lunch options
  else if (userInput.includes("lunch")) {
    if (!bmi){
      response = weightAndHeight[Math.floor(Math.random() * weightAndHeight.length)];
    }
    //lunch for underweight
    else if(weightScale=="underweight"){
      let lunchOptions = Underweight.lunch;
      let randomIndex = Math.floor(Math.random() * lunchOptions.length);
      response = "<b>Lunch :</b><br>"+lunchOptions[randomIndex];
     }
     //lunch for overweight
     else if(weightScale=="overweight"){
      let lunchOptions = Overweight.breakfast;
      let randomIndex = Math.floor(Math.random() * lunchOptions.length);
      response = "<b>Lunch :</b><br>"+lunchOptions[randomIndex];
     }
     //lunch for normalweight
     else if(weightScale=="normalweight"){
      let lunchOptions = NormalWeight.breakfast;
      let randomIndex = Math.floor(Math.random() * lunchOptions.length);
      response = "<b>Lunch :</b><br>"+lunchOptions[randomIndex];
     }
  }
  // Dinner options
  else if (userInput.includes("dinner")) {
    if (!bmi){
      response = weightAndHeight[Math.floor(Math.random() * weightAndHeight.length)];
    }
    //Dinner for underweight
    else if(weightScale=="underweight"){
      let dinnerOptions = Underweight.dinner;
      let randomIndex = Math.floor(Math.random() * dinnerOptions.length);
      response = "<b>Dinner :</b><br>"+dinnerOptions[randomIndex];
     }
     //Dinner for overweight
     else if(weightScale=="overweight"){
      let dinnerOptions = Overweight.dinner;
      let randomIndex = Math.floor(Math.random() * dinnerOptions.length);
      response = "<b>Dinner :</b><br>"+dinnerOptions[randomIndex];
     }
     //Dinner for normalweight
     else if(weightScale=="normalweight"){
      let dinnerOptions = NormalWeight.dinner;
      let randomIndex = Math.floor(Math.random() * dinnerOptions.length);
      response = "<b>Dinner :</b><br>"+dinnerOptions[randomIndex];
     }
  }
   // Snack options
   else if (userInput.includes("snack")) {
    if (!bmi){
      response = weightAndHeight[Math.floor(Math.random() * weightAndHeight.length)];
    }
    //Snack for underweight
    else if(weightScale=="underweight"){
      let snackOptions = Underweight.snacks;
      let randomIndex = Math.floor(Math.random() * snackOptions.length);
      response = "<b>Snack :</b><br>"+snackOptions[randomIndex];
     }
     //Snack for overweight
     else if(weightScale=="overweight"){
      let snackOptions = Overweight.snack;
      let randomIndex = Math.floor(Math.random() * snackOptions.length);
      renderEmotion('happy');
      response = "<b>Snack :</b><br>"+snackOptions[randomIndex];
     }
     //Snack for normalweight
     else if(weightScale=="normalweight"){
      let snackOptions = NormalWeight.snacks;
      let randomIndex = Math.floor(Math.random() * snackOptions.length);
      response = "<b>Snack :</b><br>"+snackOptions[randomIndex];
     }
    }

    

   // ---------------------------- Advices for each BMI catogary-----------------------------------------// 
   else if (userInput.includes("advice")||userInput.includes("loss weight")||userInput.includes("gain weight")||userInput.includes("maintain weight")) {
    if (!bmi){
      response = weightAndHeight[Math.floor(Math.random() * weightAndHeight.length)];
    }
    
     //Advices for overweight
     else if(weightScale=="overweight"){
      response = advicesBMI.overweightAdvice;
      
     }
     //Advise for underweight 
     else if(weightScale=="underweight"){
      response = advicesBMI.overweightAdvice;
      
     }
     // advice for normal weight
     else if(weightScale=="normalweight"){
      response = advicesBMI.normalweightAdvice;
     }
     
    
  }
  //---------------------------- END Advices for each BMI catogary-----------------------------------------// 
  //-------------------------------------------------------------------------------------------------------//
  // Food calories display 
  else if (userInput.includes("calories" )){
    if (userInput.includes(extractFoodItem(userInput))) 
      response=getFoodCalories(userInput);
    else if (!bmi){
      response = weightAndHeight[Math.floor(Math.random() * weightAndHeight.length)];
    }
    else if(weightScale=="overweight" && (userInput.includes("take")||userInput.includes("get"))){
      response = "you should take 1200- 1300 calories in a day";

    }
    else if(weightScale=="underweight"&& (userInput.includes("take")||userInput.includes("get"))){
      response = "you should take 2000-2200 calories in a day";
    }
    else if(weightScale=="normalweight" && (userInput.includes("take")||userInput.includes("get"))){
      response = "you should take 1500-1600 calories in a day";
    }
    
  }
  else if(userInput.includes("bye")){
    response = "Good bye <b>"+userName+"</b>";
  }
  else {
    response = "I'm Sorry i dont get it";
  }

  // Return the response
  return response;
}
//---------------------------Function to calculate BMI START-----------------------------------------//
//calculation
function calculateBMI(height, weight) {
  return weight / (height * height);
}
//assign values and return the BMI 
function getBMI(userInput) {
  let response = responseObj[userInput.toLowerCase()];
  if (response === undefined) {
    // Check if the user is providing their height and weight
    let match = userInput.match(/(?:my )?(?:height is |height:|height= )(\d+(\.\d+)?) (?:and |, )?(?:my)?(?:weight is |weight:|weight= )(\d+(\.\d+)?)/i);
   if (match) {
      let height = parseFloat(match[1]);
      let weight = parseFloat(match[3]);
      bmi = calculateBMI(height, weight);
      if (bmi<18.5){
       weightScale = "underweight";
       renderEmotion('sad');
       response = `Your <b>BMI</b> is <b>${bmi.toFixed(2)}</b>. Oooopz... You are considered <b> ${weightScale}</b>.`;
      }
      else if(bmi>22.9){
        weightScale = "overweight";
        renderEmotion('sad');
        response =  `Your <b>BMI</b> is <b>${bmi.toFixed(2)}</b>. Oooopz... You are considered as <b> ${weightScale}</b>.`;
      }
      else{
        weightScale = "normalweight";
        renderEmotion('happy');
        response =  `Your <b>BMI</b> is <b>${bmi.toFixed(2)}</b>. Congrats ... You are considered as<b> ${weightScale}</b>.`;
      }
      
    } else {
      response = responseObj["default"];
    }
  }
  return response;
}
//---------------------------Function to calculate BMI END-----------------------------------------//

//--------------------------Calories map functions START------------------//
//extract fooditem from userInput
function extractFoodItem(userInput){
  userInput=userInput.toLowerCase();
  for(let [foodItem, _] of foodCalories){
    if(userInput.includes(foodItem)){
      return foodItem;
    }
  }
  return null;
}

// Function to get the calorie count of a food item
function getFoodCalories(userInput) {
  letfoodItem=extractFoodItem(userInput);
  
  if (foodCalories.has(letfoodItem)) {
    response =  `${letfoodItem}  ${foodCalories.get(letfoodItem)} calories.`;
  }
  else{
  response =  "Sorry, I don't have information about the calorie count of that food item.";
  }
  return response;
}
//--------------------------Calories map functions END------------------//


//---------------------------Emotion function START---------------------//
function renderEmotion(emotion){
  const emotionContainer=document.querySelector(".emotions");
  emotionContainer.innerHTML = "";//To clear previous emotion
  if(emotions.has(emotion)){
    const img=document.createElement("img");
    img.src = emotions.get(emotion);
    emotionContainer.appendChild(img);
  }
}
//---------------------------Emotion function END-----------------------//

// suggesion key word extract
function extractKeyword(response) {

  
  for (let keyword in suggestedQuestions) {
    if (response.includes(keyword.toLowerCase())) {
      return keyword;
    }
  }
  
  return null; // If no keyword is found in the userInput
}


//suggesions 
const suggestedQuestions = {
  breakfast: ["I need meals for today", "what should i have for lunch?","i need a snack idea","how many calories can I have today"],
  lunch: ["what's good for dinner?", "i'm thinking about snack options", "suggest me a meal plan"],
  dinner: ["what's a good snack option for dinner?", "Suggest meals for tomorrow?"],
  snack: ["how many calories in an apple?", "how many calories can I have have today?"],
  bmi: ["what is BMI?", "how to calculate BMI?", "can you explain Body Mass Index?", "what's my BMI?"],
  calories: ["how many calories in an apple?", "how many calories should I take per day?", "what's the calorie content of rice?"],
  "meal Plan": ["can you provide a meal plan for the week?", "give me a weekly meal plan", "meal planning suggestions"],
  weightLoss: ["give an advice for weight loss?", "how many calories can I have have today?"],
  weightGain: ["how many calories can I have have today?", "tips for weight gain?", "strategies to increase weight", "healthy ways to bulk up?"]
};


function handleSuggestionClick(suggestion) {
  renderMessage(suggestion, 'user');
  renderChatbotResponse(suggestion); // Get chatbot's response for the suggestion
  setScrollPosition(); // Scroll to bottom after rendering messages
}


function suggest(response){

  const suggestions = suggestedQuestions[extractKeyword(response)] || [];
  const suggestionContainer = document.querySelector('.suggestion-container');
  suggestionContainer.innerHTML = "";

  // Create new suggestion buttons
  suggestions.forEach(suggestion => {
      const button = document.createElement('button');
      button.textContent = (suggestion);
      button.classList.add('suggestion-button');
      button.onclick = () => handleSuggestionClick(suggestion);
      suggestionContainer.appendChild(button);
  });

      suggestionContainer.style.display = suggestions.length > 0 ? "block" : "none";
}

//User name 
function getname(userInput){
  if (!userName && namestates) {
    // Check various ways the user might introduce their name
    if (userInput.startsWith("my name is")) {
      userName = userInput.slice(10); 
    }
    else if( userInput.startsWith("my name"))
      {
        userName = userInput.slice(11); 
      } 
    else if(userInput.startsWith("i am"))
      {
        userName = userInput.slice(5); 
      } 
    else if (userInput.includes("i'm"))
    {
      userName = userInput.slice(3); 
    }
    else
    {
      userName = userInput; // If none of the specific formats were used, take the input as the name
    }
    // Return a welcoming message with the user's name
    return  "Hello "+ userName  + ", How are you doing today?";
  } 
}

