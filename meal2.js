const loadMeals = (searchFood) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFood}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}

const displayMeals = (meals) => {
    const mealContainer = document.getElementById('meal-container')
    mealContainer.innerHTML = ''
    meals.forEach(meal => {

        const mealDIv = document.createElement('div')
        mealDIv.classList.add('col')
        mealDIv.innerHTML = `
        
        <div class="card h-100">
        <img src="${meal.strMealThumb
            }" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <h6 class="card-title"> Category : ${meal.strCategory}</h6>
            
            <h6 class="card-title"> 
            Quantity :
            ${meal.strMeasure13
            }</h6>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.</p>
                
               

                <button onclick="loadMealDetails(${meal.idMeal})" type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#mealDetails">
                Details
            </button>
                </div>
        `
        mealContainer.appendChild(mealDIv)
    });
}

const searchMeals = () => {
    const searchField = document.getElementById('search-field').value
    console.log(searchField)
    loadMeals(searchField)
}

const loadMealDetails = (idMeal) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i= ${idMeal}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]
        ))
}
const displayMealDetails = (meal) => {
    console.log(meal)
    const mealTitle = document.getElementById('mealDetailsLabel')
    mealTitle.innerText = meal.strMeal
    const mealBody = document.getElementById('modalDetailsId')
    mealBody.innerHTML = `
  <h5> Area : ${meal.strArea
        }</h5>
        <img class="img-fluid" src="${meal.strMealThumb}">
        <a href=${meal.strYoutube
        }>Click here to visit Example.com</a>
    `
}

loadMeals('chi')