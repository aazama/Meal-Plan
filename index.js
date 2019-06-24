var button = $('.submit-btn');
var cardContainer= $('.card-container');

button.on("click", appendMealPlan);

function appendMealPlan(){
  var protein = $('.protein-input').val();
  var fruit = $('.fruit-input').val();
  var veggie = $('.veggie-input').val();
  var carb = $('.carb-input').val();



  cardContainer.append(`
    <div class="name-card"><input type= "checkbox" class="checkbox"><p>Your meal is ${protein}, ${fruit}, ${veggie}, and ${carb} </p>
    `);

    var checkbox = $('.checkbox');
    checkbox.on("click",remove);
}


function remove(){
event.target.parentNode.remove();

 }
