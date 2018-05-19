$(document).ready(() => {

$(".devour").on("click", function(e) {
  e.preventDefault();
  let id = $(this).data("order");
  let ajaxQuery = "/api/orders/" + id;
  console.log(ajaxQuery);
  $.ajax(ajaxQuery, {
      type: "DELETE"
    }).then(function() {
      console.log("Order Deleted at: ", id);
      location.reload();
    });
});


});