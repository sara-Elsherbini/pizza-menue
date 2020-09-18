
/* function getPizza()
{
return new Promise(function(resolved,rejected){
    let allRecipes=[];
    let httpReq= new XMLHttpRequest();
    
    httpReq.open('GET','https://forkify-api.herokuapp.com/api/search?&q=pizza');
    httpReq.send();
    
    httpReq.addEventListener('readystatechange',function()
    {
    
        if(httpReq.readyState==4 && httpReq.status==200)
        {
            allRecipes=(JSON.parse(httpReq.response).recipes);
            console.log("pizza")
            console.log(allRecipes);
            resolved();
        }
        else
        {
            rejected()
        }
    });
    
});
}
getPizza().then(()=>{getPasta}).catch(()=>{console.log("errro")})
 */

/* function getPasta()
{
    return new Promise(function(callback){
        document.getElementById('recipesRow');
let allRecipes=[];
let httpReq= new XMLHttpRequest();

httpReq.open('GET','https://forkify-api.herokuapp.com/api/search?&q=pasta');
httpReq.send();

httpReq.addEventListener('readystatechange',function()
{

    if(httpReq.readyState==4 && httpReq.status==200)
    {
        allRecipes=(JSON.parse(httpReq.response).recipes);
        console.log("pasta");
      console.log(allRecipes);
      callback();
    }
});

    })


} */
let searchInput=document.getElementById('searchInput');
let searchBtn=document.getElementById('searchBtn');
let searchResult=document.getElementById('searchResult') ;
let recipeDetailsDiv=document.getElementById('recipeDetails');

let allRecipes=[];
async function getRecipe(term)
{
 let apiResponse=await fetch(`https://forkify-api.herokuapp.com/api/search?&q=${term}`);
 apiResponse=await apiResponse.json();
 allRecipes=apiResponse.recipes;
 displayAllRecipes();
 
}
searchBtn.addEventListener('click',function(){
    getRecipe(searchInput.value);
})


function displayAllRecipes()
{
    let cartoona=``;
    for(let i=0;i<allRecipes.length;i++)
    {
        let myId="'"+allRecipes[i].recipe_id+"'"
      cartoona+=` <div onclick=" getRecipeDetails(${myId})" class="col-md-4">
                <div class="recipe">
                    <img src="${allRecipes[i].image_url}" class="w-100" alt="">
                    <h5 class="color-mine font-weight-bolder py-5">${allRecipes[i].title}</h5>
                    <p>${allRecipes[i].puplisher}</p>
                </div>
            </div>`
    }
    searchResult.innerHTML=cartoona;
}

async function getRecipeDetails(id)
{
 let recipeDetails;   
let apiResponse= await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`);
 apiResponse=await apiResponse.json();
recipeDetails= apiResponse.recipe;
showRecipeDetails(recipeDetails);

}
function showRecipeDetails(recipeDetails)
{
let cartoona=`<h4 class="color-mine py-2 font-weight-bolder">${recipeDetails.title}</h4>
<img class="w-100" src="${recipeDetails.image_url}" alt="">
<p class="p-2 ">${recipeDetails.publisher}</p>
<ul>`;

            for(let i=0;i<recipeDetails.ingredients.length;i++)
            {
                cartoona+=`<li class="py-1 font-weight-bolder">${recipeDetails.ingredients[i]}</li>`

            }

    
cartoona+=`</ul>`;
recipeDetailsDiv.innerHTML=cartoona;

}


/* async function getPizza()
{
   let apiResponse=await fetch('https://forkify-api.herokuapp.com/api/search?&q=pizza') ;
   let allResponse=await apiResponse.json();
   console.log("pizza");
   console.log(allResponse.recipes);
}

async function getSalad()
{
   let apiResponse=await fetch('https://forkify-api.herokuapp.com/api/search?&q=salad') ;
   let allResponse=await apiResponse.json();
   console.log("salad");
   console.log(allResponse.recipes);
} */


/* (async function()
{
await getSalad();
await getPizza();
await getPasta();
})()
 */
/* function getSalad()
{
    return new Promise(function(callback){
        document.getElementById('recipesRow');
        let allRecipes=[];
        let httpReq= new XMLHttpRequest();
        
        httpReq.open('GET','https://forkify-api.herokuapp.com/api/search?&q=salad');
        httpReq.send();
        
        httpReq.addEventListener('readystatechange',function()
        {
        
            if(httpReq.readyState==4 && httpReq.status==200)
            {
                console.log("salad")
                allRecipes=(JSON.parse(httpReq.response).recipes);
              console.log(allRecipes);
              callback();
            }
        });
        
    })

}
 */
/* function finish(){
    console.log("fins")
} */



/* getPizza(function(){
    getPasta(function(){
        getSalad(function(){
            finish()})})
});
 */
/* getPizza().then(()=>{getPasta().then(()=>{getSalad().then(()=>finish())})}) */

/*function displayRecipes()
{
let cartoona=`  `;
for(let i=0;i<allRecipes.length;i++)
{
 cartoona+=`<div class="col-md-3 my-2 text-left">
                <div class="recipe">
                    <img class="w-100" src="${allRecipes[i].image_url}" alt="">
                    <h5 class="color-mine font-weight-bolder py-2">${allRecipes[i].title}</h5>
                    <p>by ${allRecipes[i].publisher}</p>
                    <button class="btn btn-mine text-white">
                    <a class="text-white" target="_blank" href="${allRecipes[i].source_url}">source</a>
                    
                    </button>
                </div>
            </div>`
}

recipesRow.innerHTML=cartoona;
}

 */