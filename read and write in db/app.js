var mainText=document.getElementById('mainText');
var SubmitButton=document.getElementById('submitbtn');
var firebaseHeading=document.getElementById('fireheading');
var firebaseHeadingRef=firebase.database().ref().child("heading");
firebaseHeadingRef.on('value',function(dataSnapshot){
  firebaseHeading.innerText=dataSnapshot.val();
});
function f()
{
  var firebaseRef=firebase.database().ref();
  var messageText=mainText.value;
  firebaseRef.push().set(messageText);
}
