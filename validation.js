let loginerrorEmail= document.getElementById("loginerrorEmail");
let loginemail= document.getElementById("loginemail");
let loginpassword=document.getElementById("loginpassword");
let loginpasserror=document.getElementById("loginpasserror");
let errorEmail= document.getElementById("errorEmail");
let email= document.getElementById("email");
let error2= document.getElementById("error2");
let phn= document.getElementById("phn");
let password=document.getElementById("password");
let passerror=document.getElementById("passerror");
let confirmPassword=document.getElementById("confirmPassword");
let errpwd=document.getElementById("errpwd");


// Login
function validatelogin(){
  let regexplog = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)[.]([a-z]{2,3})(.[a-z]{2,3}\.)?$/g;
  if(loginemail.value==""){
    loginerrorEmail.innerHTML = "Please enter your Email Id";
    loginerrorEmail.style.color ="red";
    loginerrorEmail.style.fontWeight ="thin";
    loginerrorEmail.removeAttribute("hidden",'true');
    loginemail.style.border ="1px solid red";
    loginemail.style.marginBottom="0";
    return false;
  }
  else if(regexplog.test(loginemail.value)){
    loginerrorEmail.setAttribute("hidden",'true');
    loginemail.style.marginBottom="1.2em";
    loginemail.style.border ="1px solid";
    return true;
  }
  else{
    loginerrorEmail.innerHTML = "Invalid Email Id.Please try again.";
    loginerrorEmail.style.color ="red";
    loginerrorEmail.style.fontWeight ="thin";
    loginerrorEmail.removeAttribute("hidden",'true');
    loginemail.style.border ="1px solid red";
    loginemail.style.marginBottom="0";
    return false;
  }
}

function loginvalidatepassword(){
  var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
  if(loginpassword.value.length == 0){
    loginpasserror.innerHTML ="Password is required";
    loginpasserror.style.color="red";
    loginpassword.style.marginBottom="0";
    loginpasserror.removeAttribute("hidden","true");
      return false;  
  }
  else if(strongRegex.test(loginpassword.value)){
    loginpassword.style.border="1px solid";
    loginpasserror.setAttribute("hidden","true");
    return true;
       
 }
 else if(loginpassword.value.length < 8){
  loginpasserror.innerHTML="Password is too Short";
  loginpasserror.style.color="red";
  loginpassword.style.border="1px solid red";
  loginpasserror.removeAttribute("hidden","true");
  return false;
 }
 else{
  loginpasserror.innerHTML="invalid Password.</br> Please enter valid password";
  loginpasserror.style.color="red";
  loginpassword.style.border="1px solid red";
  loginpasserror.removeAttribute("hidden","true");
     return false;
 } 
}


// sign UP
function validate1(){
  let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)[.]([a-z]{2,3})(.[a-z]{2,3}\.)?$/g;
  if(email.value==""){
    errorEmail.innerHTML = "Please enter your Email Id";
    errorEmail.style.color ="red";
    errorEmail.style.fontWeight ="thin";
    errorEmail.removeAttribute("hidden",'true');
    email.style.border ="1px solid red";
    email.style.marginBottom="0";
    return false;
  }
  else if(regexp.test(email.value.trim())){
    errorEmail.setAttribute("hidden",'true');
    email.style.marginBottom="1.2em";
    email.style.border ="1px solid";
    return true;
  }
  else{
    errorEmail.innerHTML = "Invalid Email Id.Please try again.";
    errorEmail.style.color ="red";
    errorEmail.style.fontWeight ="thin";
    errorEmail.removeAttribute("hidden",'true');
    email.style.border ="1px solid red";
    email.style.marginBottom="0";
    return false;
  }
}

function phonenumber(phn){
  let regexpphn= /(\b[0-9]{10}\b)|\(?([0-9]{3})\)?[-]([0-9]{3})[-]([0-9]{4})|\(?([0-9]{3})\)?[.]([0-9]{3})[.]([0-9]{4})|\(?([0-9]{3})\)?[ ]([0-9]{3})[ ]([0-9]{4})/g
  if(phn.value==""){
    error2.innerHTML = "Please enter your Mobile Number";
    error2.style.color ="red";
    error2.style.fontWeight ="thin";
    error2.removeAttribute("hidden",'true');
    phn.style.border ="1px solid red";
    phn.style.marginBottom="0";
    return false;
  }
  else if(phn.value.match(regexpphn)){
  error2.setAttribute("hidden",'true');
  phn.style.marginBottom="1.2em";
  phn.style.border ="1px solid";
  return true;
  }else{
    error2.innerHTML="Please enter a valid Mobile Number";
    error2.style.color="red";
    error2.style.fontWeight ="thin";
    error2.removeAttribute("hidden",'true');
    phn.style.border ="1px solid red";
    phn.style.marginBottom="0";
    return false;
  }
 }

 function validatepassword(){
  var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
  var mediumRegex = new RegExp("^(?=.{8,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])(?=.*\\W))|((?=.*[a-z])(?=.*[0-9])(?=.*\\W))|((?=.*[A-Z])(?=.*[a-z])(?=.*\\W))).*$", "g");
  var enoughRegex = new RegExp("(?=.{5,}).*", "g");
  if(password.value.length == 0){
      passerror.innerHTML ="Password is required";
      passerror.style.color="red"; 
      return false;  
  }
 else if(false == enoughRegex.test(password.value)){
   passerror.innerHTML="More character";
   passerror.style.color="black";
   password.style.border="2px solid black";
   return false;
 }
 else if(strongRegex.test(password.value)){
    passerror.innerHTML="Strong";
    passerror.style.color="green";
    password.style.border="2px solid green";
    return true;
       
 }
 else if(mediumRegex.test(password.value)){
     passerror.innerHTML="Medium";
     passerror.style.color="orange";
     password.style.border="2px solid orange";
     return false;
 }
 else{
     passerror.innerHTML="Poor";
     passerror.style.color="red";
     password.style.border="2px solid red";
     return false;
 } 
}

function confirmpassword(){
  if(confirmPassword.value==""){
      errpwd.innerHTML="Confirm your password";
      errpwd.removeAttribute("hidden",'true');
      errpwd.style.color="red";
      return false;
  }
  else if(password.value==confirmPassword.value){
      errpwd.innerHTML="Password is";
      errpwd.setAttribute("hidden",'true');
      confirmPassword.style.border="2px solid";
      return true;
  } 
  else{
      errpwd.innerHTML="Those passwords didn't match. Try again";
      errpwd.style.color="red";
      confirmPassword.style.border="2px solid red";
      errpwd.removeAttribute("hidden",'true');
      return false;
  }
}