const input = document.getElementById('password');
const alert = document.getElementsByClassName('alert');

function copyPassword() {
  //check for a new password, otherwise alert an error
  if (input.value) {
  input.select();
  input.setSelectionRange(0, 99999)
  document.execCommand("copy");

  } else {
    $('.alert').removeClass('d-none').addClass('show');
  }
}



$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});
  

  