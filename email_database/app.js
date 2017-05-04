
var firebaseref=firebase.database().ref();
$(document).ready(function(){
$("#submit").click(function(){
var email=$("#email").val();
firebaseref.push().set(email);
}),
$("#Database").click(function(){
  firebaseref.on("child_added",snap =>{
    var email=snap.val();
    $("#table_body").append("<tr><td>"+email+"</td></tr>");
    $("#data").css("display","block");
    $("#Database").hide();
  });
})
});
