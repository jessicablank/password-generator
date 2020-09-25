const input = document.getElementById('password');

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

function copyPassword() {
  //check for a new password, otherwise alert an error
  if (input.value) {
  input.select();
  input.setSelectionRange(0, 99999)
  document.execCommand("copy");
  } else {
    alert("Please Generate a Password First")
  }
}
  

  