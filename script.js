function modal(dyr){
  closemodal();
  document.getElementById("modal").style.display = "block";
  document.getElementById("modal"+dyr).style.display = "block";
}

function closemodal(){
  document.getElementById("modal").style.display = "none";
  document.getElementById("modalhund").style.display = "none";
  document.getElementById("modalkanin").style.display = "none";
  document.getElementById("modalkat").style.display = "none";
  document.getElementById("modalfugl").style.display = "none";
}




function hasName(){
    if(document.getElementById('req1').value=="")
    {
        alert("Du skal indtasate et fornavn");
        return false;
    }

    return true;
}


function emailValidate()
{
  var emailExp=/^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-Z0]{2,4}$/;
  element = document.getElementById('req3');

  if( element.value.length > 0 )
  {
      if(element.value.match(emailExp))
      {
          return true;
      }
      else
      {
          alert('Du skal indtaste en korrekt E-mail.');
          element.focus();
          return false;
      }
  }

  alert("Du skal indtaste en E-mail");
  return false;
}

function isNumeric()
{
  var numericExpression=/^[0-9]+$/;
  element = document.getElementById('req4');

  if(element.value.match(numericExpression))
  {
      return true;
  }
  else{
      alert("Et tlf nummer kan kun indholde tal");
      element.focus();
      return false;
  }
}

function genderSelection()
{
  element = document.getElementById('selection');
  
  if(element.value == "Gender")
  {
    alert('Du skal vælge et køn');
    element.focus();
    return false;
  }

  return true;
}

function validate(){
  if(hasName() && emailValidate() && isNumeric() && genderSelection()){
    alert("Tillykke du er blevet tilmeldt");
    emptyForm();
    return true;
  }

  return false;
}

function emptyForm(){
  document.getElementById('selection').value = "Gender";
  document.getElementById('req1').value = "";
  document.getElementById('req2').value = "";
  document.getElementById('req3').value = "";
  document.getElementById('req4').value = "";
  document.getElementById('req5').value = "";
}