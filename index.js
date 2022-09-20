const form=document.getElementById("form");
const username=document.getElementById("username");
const email=document.getElementById("email");
const Password1=document.getElementById("password1");
const Password2=document.getElementById("password2");
  
    form.addEventListener('submit',e =>{
	  e.preventDefault();
	  checkinput();
  });
    function checkinput(){
		const usernamevalue=username.value.trim();
		const emailvalue=email.value.trim();
		const password1value=password1.value.trim();
		const Password2value=Password2.value.trim();
		
		if(usernamevalue ===''){
			setError(username,'user name cannaot be blank');
		}
		else{
			setSucess(username);
		}
		
		if(emailvalue === ""){
			setError(email,'email cannot be blank');
		}else if(!isEmail(emailvalue)){
			setError(email,'not a valid email');
		}else{
			setSucess(email);
		}
		if(password1value === ""){
			setError(password1,'password cannot be blank');
		}else{
			setSucess(password1);
		}
		if(password2value === ""){
			setError(password2,'password cannot be blank');
		}else if(password1value !== password2value){
			setError(password2,'passsword doesnt match');
	    }else{
			setSucess(password2);
		}
	}
	
	function isEmail(email){
		return  /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/.test(email);
	}
    function setError(input,message){
		const formcontrol=input.parentElement;
        const small=formcontrol.querySelector('small');
		formcontrol.className='formcontrol Error';
		small.innerText=message;
	}
	 function setSucess(input,message){
		const formcontrol=input.parentElement;
		formcontrol.className='formcontrol Sucess';
	}
