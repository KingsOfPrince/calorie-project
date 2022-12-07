const mealName = document.querySelector("#name");
const calories = document.querySelector("#calorie");
const addMeal = document.querySelector("#createMeal");
const cancel = document.querySelector("#clearAll");
const table = document.querySelector("#table");

addMeal.addEventListener("click", function(event) {
    addToTable(event);
});

//List 
function addToTable(event) {
    if (mealName.value !== "" && calories.value !== "") { 
        const newMeal = document.createElement("tr");
        const newMealcal = document.createElement("td");
        const newcalories = document.createElement("td");
        
        newMealcal.innerText = mealName.value;
        newcalories.innerText = calories.value;
        mealName.value = "";
        calories.value = "";

        newMeal.appendChild(newMealcal);
        newMeal.appendChild(newcalories);
        table.appendChild(newMeal);
    }
}

cancel.addEventListener("click", function(event) {
    mealName.value = "";
    calories.value = "";
});