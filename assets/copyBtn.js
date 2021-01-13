//Ready Tooltips
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});

//Create a snack bar to confirm password is copied or an alert if not successful
const input = document.getElementById('password');
const alert = document.getElementsByClassName('alert');

function copyPassword() {
  //check for a new password, otherwise alert an error
  if (input.value) {
    //Select the Password in the Text Field
  input.select();
  input.setSelectionRange(0, 99999)
  //Copy to ClipBoard
  document.execCommand("copy");
  // Get the snackbar DIV
  let success = document.getElementById("snackbar");

  // Add the "show" class to DIV
  success.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ success.className = success.className.replace("show", ""); }, 2000);
  } else {
    $('.alert').removeClass('d-none').addClass('show');
  }
}




  