// Function wraps code to wait to attach handlers until DOM is fully loaded.

// Post Function
$(function() {
  $(".create-burger").on("submit", function(event) {
    event.preventDefault();

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
});
