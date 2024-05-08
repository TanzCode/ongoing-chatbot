//
let userName = "";
let weightScale = "";
let bmi ="";

// Define greetings and corresponding responses from user
const greetings = [
  "hi", "hello", "hey", "hey hey", "whatsup", "hii", "hello hi"
];
//------------------------BOT RANDOM RESPONSES--------------------------------//


// BOT greeting
const hiResponses = [
  "Whatsup <b>{{userName}}</b><br><img src='giphy.gif' alt='' width='100' height='100'>",
  "Hello <b>{{userName}}</b><br><img src='giphy.gif' alt='' width='100' height='100'>",
  "Hello <b>{{userName}}</b>, Nice to meet you...<br><img src='giphy.gif' alt='' width='100' height='100'>"
];

//BOT asking weight and height
const weightAndHeight = [
    "To calculate the BMI I need your <b>height</b> (in meters) and <b>weight</b> (in kilograms)  ",
    "In order to calculate BMI, I require some data. What's your <b>height</b> (in meters) and <b>weight</b> (in kilograms) ?",
    ];


// Object to store Bot responses for different user inputs
const responseObj = {
  "default": "I'm sorry, I didn't get that.",
  "greeting": "Hello <b>{{userName}}</b>, Welcome to the <b>Balance Bite 💗 Health Care</b>.",
  "getWeightAndHeight":"To continue this chat or suggest you meals first I need to know your <b>BMI </b>value "
};


//-------------Under weight meal set
const overweight = {
  breakfast: [
    "Whole grain bagel with 1/2 teaspoon of light cream cheese, strawberry jam without sugar, and 1 cup of decaffeinated coffee with 4 ounces of skimmed milk (Approx. 200 cal.)",
    "1/2 cup of frozen fruits and 8 ounces of low-fat yogurt (Approx. 170 cal.)",
    "4 ounces of skimmed milk, 1/2 cup of whole wheat cereal, and 1 medium apple (Approx. 205 cal)",
    "1/2 cup of cooked oats with 4 ounces of skimmed milk and 2 low-fat, low-sodium turkey slices (Approx. 205 Cal.)",
    "1/2 cup of whole wheat cereal with 4 ounces of low-fat yogurt and 1 cup of blueberries (Approx. 185 Cal.)",
    "1/2 whole grain bagel with 2 teaspoons of light cream cheese and cinnamon powder, and 1 cup of watermelon (Approx. 175 Cal.)",
    "1 slice of whole wheat bread, 1 slice of low-fat, low-sodium cheese, and 1 cup of decaffeinated coffee with 4 ounces of skimmed milk (Approx. 180 cal.)"
  ],
  lunch: [
    "1 slice of whole wheat bread, 2 hard-boiled eggs, 1 sliced tomato, 2 cups of lettuce with 1 teaspoon low-fat dressing (Approx. 410 cal.)",
    "3 ounces of low-fat, low-sodium turkey slices, 1 teaspoon low-fat mayonnaise, 1 cup of raw carrots and celery, 1 cup of lettuce, and 1 slice whole wheat bread (Approx. 270 cal.)",
    "1 low-sodium can of tuna, 1 teaspoon of olive oil and some lemon juice, 1 cup of sliced red peppers, 2 cups of raw spinach, and 1 teaspoon of low-fat Italian dressing (Approx. 300 cal.)",
    "1/3 cup of brown rice, 3 ounces of boneless grilled chicken breast, 1 cup of raw celery, 1 cup of raw carrots, and 2 teaspoons of light ranch dressing (Approx. 320 cal.)",
    "1/2 cup of black beans, 1/2 cup of brown rice, 2 cups of lettuce with low-fat ranch dressing, and 1/2 of a banana (Approx. 310 cal.)",
    "1/2 cup of whole wheat pasta, 1 teaspoon of olive oil, and two teaspoons of parmesan cheese, 3 oz of grilled salmon, 2 cups of lettuce, tomatoes, and onions, and 1/2 cup of your favorite steamed vegetables. You can also add two teaspoons of light sour cream (Approx. 365 cal.)",
    "1/2 cup of red beans, 1/2 cup of whole wheat pasta (macaroni) with salt and pepper, 2 cups of lettuce, and 1 teaspoon of parmesan cheese. Serve cold (Approx. 315 cal.)"
  ],
  
  dinner: [
    "3 ounces of boneless grilled chicken breast, 1 cup of steamed broccoli with 1 teaspoon of low-fat dressing, 1/2 baked potato with pepper and oregano (Approx. 275 cal.)",
    "1/2 cup of brown rice, 3 ounces of baked salmon, 2 cups of steamed broccoli with 2 teaspoons of low-fat cream cheese (Approx. 325 cal.)",
    "5 ounces of baked tilapia, 1 teaspoon of olive oil, 1/2 cup of low-sodium corn, 2 cups of fresh spinach, and 2 teaspoons of low-sodium red wine vinaigrette (Approx. 360 cal.)",
    "6 ounces of low-fat, low-sodium turkey breast, 2 cups of lettuce with 2 tablespoons of raisins, 2 teaspoons of low-sodium red wine vinaigrette (Approx. 350 cal.)",
    "2 grilled tofu slices (1 inch) seasoned with a little salt and pepper, 1/2 cup of sliced mushrooms, 1/2 cup of onions (julienne style), 1 tomato (julienne style), cooked on the grill with 2 teaspoons of olive oil and a dash of black pepper, and baked potato (Approx. 345 cal.)",
    "3 ounces of boneless grilled chicken breast, 2 cups of baked broccoli, 2 teaspoons of low-fat, low-sodium dressing, and 1/2 cup of brown rice (Approx. 325 cal.)",
    "3 ounces of grilled tuna, 2 cups of dark green vegetables, 1 sliced tomato, 2 teaspoons of low-fat, low-sodium dressing, and 1/2 cup of brown rice (Approx. 325 cal.)"
  ],
  snack: [
    "1 medium orange and 1/2 small muffin (Approx. 150 cal.)",
    "1 medium tangerine, 5 unsalted rice crackers, and 6 almonds (Approx. 175 cal.)",
    "1 medium orange and 1 granola cookie (70 calories) (Approx. 140 cal.)",
    "1 cup of melon and 1/2 of a whole wheat muffin (Approx. 130 cal.)",
    "1/2 cup of pineapple and 1 low-sodium granola bar (160 calories) (Approx. 220 cal.)",
    "6 big strawberries and 1 granola cookie (70 calories) (Approx. 130 cal.)",
    "1/2 cup of frozen fruits and 2 breadsticks (Approx. 130 cal.)"
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
  what: ["Body mass index (BMI) is a measure of body fat based on height and weight that applies to adult men and women.<br> <p>for more details you can visit"],

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
emotions.set('confuse','emotions/confuse1.png');
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
  if (!userName) {
    userName = userInput; // Set user's name
    response = `${responseObj["greeting"].replace("{{userName}}", userName)}<br>${responseObj["getWeightAndHeight"]}<br>${weightAndHeight[Math.floor(Math.random() * weightAndHeight.length)]}`;
  }
  //asking for weight and height of user
   // Check if the user's input is a greeting
  else if (greetings.includes(userInput)) {
    renderEmotion('happy');
    response = hiResponses[Math.floor(Math.random() * hiResponses.length)].replace("{{userName}}", userName);
  }
  //check if user input includes BMI related question
  else if(userInput.includes("bmi")){
    if (userInput.includes("what")||userInput.includes("Mean")||userInput.includes("describe")||userInput.includes("explain")){
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

//Meal plans for today
  else if ((userInput.includes("breakfast")&&userInput.includes("Lunch")&&userInput.includes("dinner"))||userInput.includes("day meal")||userInput.includes("meals for today")||userInput.includes("meal plan for today")||userInput.includes("meal plan")) {
    
    //overweight
    if(weightScale=="overweight"){
      let breakfastOptions = overweight.breakfast;
      let randomIndexB = Math.floor(Math.random() * breakfastOptions.length);
      let breakfastDay = breakfastOptions[randomIndexB];

      let lunchOptions = overweight.lunch;
      let randomIndexL = Math.floor(Math.random() * lunchOptions.length);
      let lunchDay = lunchOptions[randomIndexL];

      let dinnerOptions = overweight.dinner;
      let randomIndexD= Math.floor(Math.random() * dinnerOptions.length);
      let dinnerDay = dinnerOptions[randomIndexD];

      let snackOptions = overweight.snack;
      let randomIndexS = Math.floor(Math.random() * snackOptions.length);
      let snackDay = snackOptions[randomIndexS];
      response = (" 🍽 <b>Breakfast - </b>"+breakfastDay +"<br>  🍽 <b>Lunch</b> - "+lunchDay+"<br> 🍽 <b>Dinner </b>- "+dinnerDay+"<br> 🍪<b> Snack </b> - "+snackDay);
    }
    //underweight
    if(weightScale=="underweight"){
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
      if(weightScale=="normalweight"){
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
      response = breakfastOptions[randomIndex];
     }
     //breakfast for overweight
     else if(weightScale=="overweight"){
      let breakfastOptions = Overweight.breakfast;
      let randomIndex = Math.floor(Math.random() * breakfastOptions.length);
      response = breakfastOptions[randomIndex];
     }
     //breakfast for normalweight
     else if(weightScale=="normalweight"){
      let breakfastOptions = NormalWeight.breakfast;
      let randomIndex = Math.floor(Math.random() * breakfastOptions.length);
      response = breakfastOptions[randomIndex];
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
      response = lunchOptions[randomIndex];
     }
     //lunch for overweight
     else if(weightScale=="overweight"){
      let lunchOptions = Overweight.breakfast;
      let randomIndex = Math.floor(Math.random() * lunchOptions.length);
      response = lunchOptions[randomIndex];
     }
     //lunch for normalweight
     else if(weightScale=="normalweight"){
      let lunchOptions = NormalWeight.breakfast;
      let randomIndex = Math.floor(Math.random() * lunchOptions.length);
      response = lunchOptions[randomIndex];
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
      response = dinnerOptions[randomIndex];
     }
     //Dinner for overweight
     else if(weightScale=="overweight"){
      let dinnerOptions = Overweight.dinner;
      let randomIndex = Math.floor(Math.random() * dinnerOptions.length);
      response = dinnerOptions[randomIndex];
     }
     //Dinner for normalweight
     else if(weightScale=="normalweight"){
      let dinnerOptions = NormalWeight.dinner;
      let randomIndex = Math.floor(Math.random() * dinnerOptions.length);
      response = dinnerOptions[randomIndex];
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
      response = snackOptions[randomIndex];
     }
     //Snack for overweight
     else if(weightScale=="overweight"){
      let snackOptions = overweight.snack;
      let randomIndex = Math.floor(Math.random() * snackOptions.length);
      renderEmotion('happy');
      response = snackOptions[randomIndex];
     }
     //Snack for normalweight
     else if(weightScale=="normalweight"){
      let snackOptions = NormalWeight.snacks;
      let randomIndex = Math.floor(Math.random() * snackOptions.length);
      response = snackOptions[randomIndex];
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
  else if (userInput.includes("calories" )||userInput.includes(foodCalories.get(userInput))){
    response=getFoodCalories(userInput);
  }
  else {
    response = responseObj["default"];
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
       response = `Your <b>BMI</b> is <b>${bmi.toFixed(2)}</b>. Oooopz... You are considered <b> ${weightScale}</b>.`;
      }
      else if(bmi>22.9){
        weightScale = "overweight";
        response =  `Your <b>BMI</b> is <b>${bmi.toFixed(2)}</b>. Oooopz... You are considered as <b> ${weightScale}</b>.`;
      }
      else{
        weightScale = "normalweight";
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

// suggesions 


