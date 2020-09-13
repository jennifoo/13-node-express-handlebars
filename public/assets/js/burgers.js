// Function wraps code to wait to attach handlers until DOM is fully loaded.


$(function() {
  // POST request
  $(".create-burger").on("submit", function(event) {
    // event.preventDefault();

    var newBurger = {
      burger_name: $("#bu").val().trim(),
      devoured: 0
    };

    // console.log(newBurger);
    // {burger_name: "Red Burger", devoured: false}

    // Send the POST request
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Once POST request made, refresh browser to reinstate the GET request.
        location.reload();
      }
    );
  });

  // PUT REQUEST
  $(".devourBtn").on("click", function(event){
    event.preventDefault();

    var id = $(this).data("id");
    console.log(id);
    var newState = {
      devoured: 1
    };
    // Column to change: devoured
    // New values: true
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newState
    }).then(
      function(){
        console.log("updated burger");
        location.reload();
      }
    );
  });

});
