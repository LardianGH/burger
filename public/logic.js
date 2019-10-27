var eat = function() {

    var id = $(this).data("id");


    var eatenState = {
      devoured: 1
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: eatenState
    }).then(
      function() {
        console.log("Yummy burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
}

var create = function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#input").val().trim(),
      devoured: 0
    };
    console.log(newBurger);
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created a burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  };

var digest = function() {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("digested burger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  };

$(document).on("click", ".delete", digest)
$(document).on("click", ".eat", eat);
$(document).on("submit", ".create-form", create);