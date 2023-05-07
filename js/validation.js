// JavaScript Document
function validateForm()
{
    var name=document.forms["feedbackForm"]["name"].value;
    if (name==null || name=="")
    {
        alert("Name cannot be left blank");
        return false;
    }
    
    var z=document.forms["feedbackForm"]["message"].value;
    if (z==null || z=="")
      {
      alert("Please Enter a Message");
      return false;
      }
}