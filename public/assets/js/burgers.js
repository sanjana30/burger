$(function(){
    $(".create-form").on("submit", function(event){
        event.preventDefault();
        var temp = $("#burgersName").val().trim();
        console.log(temp);
        var newBurger = {
            burger_name: temp
        };
        $.ajax("/api/burgers",{
            type: "POST",
            data: newBurger
        }).then(function(){
            console.log("Burger added!");
            location.reload();
        });
    });
    $("#devour-me").on("click", function(event){
        event.preventDefault();
        var id = $(this).data("id");
        console.log("id is: " +id);
        // var newdevour = $(this).data("newdevour");
        var newdevourstate = {
            devoured: 1
        };
        console.log(newdevourstate);
        $.ajax("/api/burgers/"+id, {
            type: "PUT",
            data: newdevourstate
        }).then(function(){
            console.log("changed devoured state to: "+newdevourstate);
            location.reload();
        })
    });
});