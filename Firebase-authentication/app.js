$(document).ready(function(){
  $("#sign_nav_in,#sign_nav_out").click(function(){
    $("#sign_form").show();
    $("#sign_nav_in,#sign_nav_out").hide();
  }),
  $("#sign_up,#sign_in").click(function(){
     var email=$("#email").val();
     var password=$("#password").val();
     if(email && password != null)
     {
       firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      if(errorMessage!=null)
      {
        
        $("#error").show();
      }
});
     }
     else {
       alert("error");
     }
  })
});
