const form=document.getElementById("form");
const username=document.getElementById("username");
const email=document.getElementById("email");
const Password=document.getElementById("password");
const Password2=document.getElementById("password2");
  
    form.addEventListener('submit',e =>{
	  e.preventDefault();
	  checkinput();
  })
    function checkinput(){
		const usernamevalue=username.value.trim();
		const emailvalue=email.value.trim();
		const passwordvalue=password.value.trim();
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
		if(passwordvalue === ""){
			setError(password,'password cannot be blank');
		}else{
			setSucess(passsword);
		}
		if(passwordvalue === ""){
			setError(password,'password cannot be blank');
		}else if(passwordvalue !== paswordvalue2){
			setError(password2,'passsword2 doesnt match')
		
	    }else{
			setSucess(passsword);
		}
	}
	function isEmail(email){
		return  /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/.test(email);
	}


