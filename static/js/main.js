
/*var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

$(document).ready(function(){

});
*/

function validate()
{
   if( document.SchoolRegistration.schoolname.value == "" )
   {
     alert( "Please provide your UserName!" );
     document.SchoolRegistration.schoolname.focus() ;
     return false;
   }

   if( document.SchoolRegistration.psw.value == ""  ||
     document.SchoolRegistration.psw.value.length < 6)
   {
     alert( "Please Password Shouldn't be Less than 6 characters" );
     document.SchoolRegistration.psw.focus() ;
     return false;
   }
   if( $("#Password").val() != $("#password2").val() ||
    document.SchoolRegistration.psw-repeat.value == "")
   {
     alert( "Please Password Must Match!" );
     document.SchoolRegistration.psw-repeat.focus() ;
     return false;
   }
   if( document.SchoolRegistration.mobilenumber.value == "" )
   {
     alert( "Please provide your Mobilenumber in the Format!" );
     document.SchoolRegistration.mobilenumber.focus() ;
     return false;
   }

}