var eat = function() {
    //alert("hi")
    //console.log(this.attributes[1].value)
    //console.log($(this).data("dev"))
    //location.reload();

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