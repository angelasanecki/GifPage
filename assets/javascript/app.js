    $(document).ready(function() {



//create an array of strings. save it to a variable called "topics"

var topics = ["koala", "panda", "tiger"];





//use a loop that appends a button for each string in the array 

function renderButtons() {

          //delete buttons before adding new ones

          $("#buttons-view").empty();

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
//and adds it into your topics array













//calling the renderButtons funciton

renderButtons();


/*when the user clicks on a button, the page should grab 10 static, non animated gif images
from the GIPHY API and place them on the page*/ 

//under every GIF, display its rating 




     function displayGifInfo () {
    

     var topic = $(this).attr("data-name");


//Add this once button click function is added $(this).attr("data-name");

     var queryURL ="http://api.giphy.com/v1/gifs/search?q=" + topic +"&limit=10&api_key=dc6zaTOxFJmzC";




     $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
          var results = response.data;

          

               for (var i = 0; i < results.length; i++) {

                    var topicDiv = $("<div>");

                    //make a paragraph tag and store it in a variable called p 

                    var p = $("<p>").text("rating: " + results[i].rating);

                    //make an image tag with jQuery and store it in a variable named topicImage

                    var topicImage = $("<img>");


                    //set the image's class to "gif"

                    topicImage.addClass("gif");

                    //set the image's src to results[i]'s fixed_height_still.url

                    topicImage.attr("src", results[i].images.fixed_height_still.url);

                    //create an attribute called data-state and assign it to still

                    topicImage.attr("data-state", "still");


                    //set the image's src to results[i]'s fixed_height_still.url

                    topicImage.attr("src", results[i].images.fixed_height_still.url);

                    //set the image'a data-still atribute to the link for the still
                    topicImage.attr("data-still", results[i].images.fixed_height_still.url);

                    //set the image's data-animate attribute to the link for the animated gif

                    topicImage.attr("data-animate", results[i].images.fixed_height.url);

                    //append the paragraph onto the TopicDiv

                    topicDiv.append(p);

                    topicDiv.append(topicImage);


                    $("#gifs-appear-here").prepend(topicDiv);

                   


               //end of for loop
               }



//end of ajax call 
               });



//end of displayGifInfo function  

         }
       



   $(document).on("click", ".gif", function() {


    
           



            var state = $(this).attr("data-state");
      
      if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }



     //end of document click function

    });



//This listens to the add gif button and adds the topic to the array 
//it also re-renders the buttons

$("#add-topic").on("click", function(event){

     event.preventDefault();

     var newTopic = $("#topic-input").val().trim();


     topics.push(newTopic);


  

     renderButtons();


});


//adding a click event listern to all elements wth a class of topic

$(document).on("click", ".topic", displayGifInfo);











//end of document ready function

});

