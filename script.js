$("#login").click(function(){
  if($("#email").val() === '' && $("#password").val() === '')
  {
      Swal.fire({
      title: 'Warning',
      text: 'Email and Password is REQUIRED!',
      icon: 'warning',
      })
  } else 
  {
      Swal.fire({
      title: 'Success',
      text: 'Email and Password is ACCEPTED!',
      icon: 'success',
      })
  }

});
