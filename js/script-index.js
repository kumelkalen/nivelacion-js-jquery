$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
	$(".js-back").remove();//Me parecio más conveniente que el evento .hide()
	
	$(".title-callout").next().text("NUEVAS RECETAS");
	
	/*$(recipesArray).each(function(recetas){
		if(recetas.highlighted==true){
			renderRecipe(recetas);
			console.log("miau");
		}
	});*/
	function renderHighlightedRecipes(recipesArray) {
 	console.log('Recipes: ', recipesArray);
	recipesArray.forEach(function(recetas){
		if(recetas.highlighted==true){
			renderRecipe(recetas);
		}
	});
 	}
 	function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);
	$(".list-recipes").append('<a class="item-recipe" href="#"><span class="attribution"></span></a>');
	$(".item-recipe").append('<span class="attribution"></span>');
	$(".attribution").append('<span class="title-recipe">'+recipe.title+' </span>');
	$(".attribution").append('<span class="metadata-recipe"></span>')
	$(".metadata-recipe").append('<span class="author-recipe">'+recipe.name+'</span>');
	$(".metadata-recipe").append('<span class="bookmarks-recipe"></span>');
	$(".bookmarks-recipe").append('<span class="icon-bookmark"></span>');
	/*$(".item-recipe").append('<img src='++'/>');*/
	}
	/*function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);
	$(".list-recipes").append('<a class="item-recipe" href="#"><span class="attribution"><span class="title-recipe">'+recipe.title+' </span><span class="metadata-recipe"><span class="author-recipe">'+recipe.name+'</span><span class="bookmarks-recipe"><span class="icon-bookmark"></span></span></span></span></a>');
	*/
	$(".mostrar").click(function() {
		$(".list-recipes").css('overflow','visible');
	});
	
	
	
	renderActivities(activities);
	function renderActivities(activitiesArray) {
		console.log('Activities: ', activitiesArray);
		activitiesArray.forEach(function (obj){
			renderActivity(obj);
		})
	}
	function renderActivity(recipe) {
		if(recipe.length=1){ //>0 no me funciona
			$(".wrapper-message").hide();
		}
	}
});


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
 

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
/*function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);

}*/



/*
* Función que se encarga de pintar todas las actividades
*/


/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/



