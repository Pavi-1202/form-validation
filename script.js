const form=document.getElementById("form");
const username=document.getElementById("username");
const email=document.getElementById("email");
const password=document.getElementById("password");
const password2=document.getElementById("password2");
const response=document.getElementById('response')
let inputNameEmpty=true;
let inputEmailEmpty=true;
let inputPasswordEmpty=true;
let inputPassword2Empty=true;

function checkInput(){
    const usernameValue=username.value.trim();
    const emailValue=email.value.trim();
    const passwordValue=password.value.trim();
    const password2Value=password2.value.trim();
 if(usernameValue=== ''){
    setError(username,'Username Cannot Be Blank')
     inputNameEmpty=true;
 }   else{
    setSuccess(username);
    
   inputNameEmpty=false;
 
   }
   if(emailValue=== ''){
      setError(email,'Email Cannot Be Blank');
      inputEmailEmpty=true;
   } 
   else if(!isEmail(emailValue)){
      setError(email,'Not A Valid Email');
      inputEmailEmpty=true;
   }
      else{ setSuccess(email);
         inputEmailEmpty=false;
}
      
   
   if(passwordValue === ''){
      setError(password,'Password Cannot Be Blank')
      inputPasswordEmpty=true;
   }
   else{
      setSuccess(password);
   inputPasswordEmpty=false;
}
   if(password2Value===''){
      setError(password2,'Password Does Not Match');
      inputPassword2Empty=true;
   }
   else if(passwordValue !== password2Value){
      setError(password,'Password Does Not Match');
      inputPassword2Empty=true;
   
   }

   else{
      setSuccess(password2);
   inputPassword2Empty=false;
}
}
function setError(input,message){
const formControl = input.parentElement;  
const small=formControl.querySelector('small');
formControl.className="form-control error";
small.innerText=message;
}
function setSuccess(input){
   const formControl=input.parentElement;
   formControl.className="form-control success";

}

function isEmail(email){
      return  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
   
   }
form.addEventListener('submit',(e)=>{

   e.preventDefault();
   checkInput();
   if(!inputNameEmpty&&!inputEmailEmpty&&!inputPasswordEmpty&&!inputPassword2Empty)
   {
      response.innerHTML='correct details';
   }
   else{ response.innerHTML='incorrect details';}

   // if(inputNameEmpty||inputEmailEmpty||inputPasswordEmpty||inputPassword2Empty)
   // { response.innerHTML='incorrect details';}
   // else{ response.innerHTML='correct details';}
})
// &&inputUsernameEmpty==false&&inputEmailEmpty==false&&inputPasswordEmpty==false&&inputPassword2Empty==false

// const form=document.getElementById("form")
// const username=document.getElementById("username").value.trim();
// const email=document.getElementById("email").value.trim();
// const password=document.getElementById("password").value.trim();
// const password2=document.getElementById("password2").value.trim(); 
       
//     if(username=== ''){
//        setError(username,'Username Cannot Be Blank');
//     }   else{
//        setSuccess(username);
    
//       }
//       if(email=== ''){
//          setError(email,'Email Cannot Be Blank');
//       } 
//       else if(!isEmail(email)){
//          setError(email,'Not A Valid Email')}
//          else{ setSuccess(email);}
         
      
//       if(password === ''){
//          setError(password,'Password Cannot Be Blank');
//       }
//       else{
//          setSuccess(password);
//       }
//       if(password2===''){
//          setError(password2,'Password Does Not Match');
//       }
//       else if(password !== password2Value){
//          setError(password,'Password Does Not Match');
      
      
//       }
   
//       else{
//          setSuccess(password2);
//       }
//    }
//    function setError(input,message){
//    const formControl = input.parentElement;
//    const small=formControl.querySelector('small');
//    formControl.className="form-control error";
//    small.innerText=message;
//    }
//    function setSuccess(input){
//       const formControl=input.parentElement;
//       formControl.className="form-control success";
   
//    }
   
//    function isEmail(email){
//          return  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
      
//       }
//    form.addEventListener('submit',(e)=>{
//       e.preventDefault();
//       checkInput()
//    })
