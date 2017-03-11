  $(document).ready(function() {



//create an array of strings. save it to a variable called "topics"

var topics = ["horse", "monkey", "dog"];





//use a loop that appends a button for each string in the array 

function renderButtons() {

		//delete buttons before adding new ones

		//$("#buttons-view").empty();

		//loops through the array of topics

		for (var i=0; i<topics.length; i++){

			    //creating a button

				var b = $("<button>");

				//adding a class of topic to the button

				b.addClass("topic");


					//adding a data-attribute
				b.attr("data-name", topics[i]);

				//providing the text for the button

				b.text(topics[i]);

				//adding the button to the buttons-view div 

				$("#buttons-view").append(b);

				//console.log("in the render buttons function");


				}

//end of renderButtons function
}









//when the user clicks on one of the still GIPHY images, the gif should animate. 

//If the user clicks the gif again, it should stop playing 


//var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + sTerm + "&api_key=dc6zaTOxFJmzC";




	









//Add a form to your page that takes the value from a user input box 




//calling the renderButtons funciton

renderButtons();


/*when the user clicks on a button, the page should grab 10 static, non animated gif images
from the GIPHY API and place them on the page*/ 

//under every GIF, display its rating 



$("button").on("click", function() {

	console.log("I am in the button function");

	var topic = $(this).attr("data-name");


//Add this once button click function is added $(this).attr("data-name");

	var queryURL ="http://api.giphy.com/v1/gifs/search?q=" + topic +"&api_key=dc6zaTOxFJmzC";




	$.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
          var results = response.data;

          console.log(results);
          

          	for (var i = 0; i < results.length; i++) {

          		var topicDiv = $("<div>");

          		//make a paragraph tag and store it in a variable called p 

          		var p = $("<p>").text("rating: " + results[i].rating);

          		//make an image tag with jQuery and store it in a variable named topicImage

          		var topicImage = $("<img>");


          		//set the image's src to results[i]'s fixed_height.url

          		topicImage.attr("src", results[i].images.fixed_height.url);



          		//append the paragraph onto the TopicDiv

          		topicDiv.append(p);

          		topicDiv.append(topicImage);


				$("#gifs-appear-here").prepend(topicDiv);


          	//end of for loop
          	}







//end of ajax call 
          	});






          	


          
          	//create a div to hold the topic

          	//ar topicDiv = $("<div class='topic'>");

          	//storing the rating data

          	//var rating = response.data.rating;

          	//creating an element to display the rating

          	//var pOne = $("<p>").text("rating: " + rating);

          		//console.log(results.data);

//end of button click function  

          });
       

	








//end of document ready function

});





