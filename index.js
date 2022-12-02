

let id = (id) => document.getElementById(id);
let classes =(classes) =>document.getElementsByClassName(classes);

let username = id("Fullname"),
    email = id("email"),
    createpassword = id("createpassword"),
    repeatpassword = id("repeatpassword"),
    errorMsg = classes("error"),
    successsIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");
    
form.addEventListener("submit", (e) =>{
    e.preventDefault(); 
    engine(Fullname,0,"Fullname cannot be blank!!");
    engine(email,1,"Email cannot be blank!!");
    engine(createpassword,2,"Password cannot be blank!!");
    engine(repeatpassword,3,"Password isn't match!")
    

});

let engine = (id,serial,message) =>{
    if(id.value.trim()===""){
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red";
        failureIcon[serial].style.opacity="0";
        successsIcon[serial].style.opacity="1";
        failureIcon[serial].style.opacity="2";
        successsIcon[serial].style.opacity="3";
    }else{
        errorMsg[serial].innerHTML = "";
        id.style.border = "2px solid green";

        failureIcon[serial].style.opacity="3";
        successsIcon[serial].style.opacity="2";
        failureIcon[serial].style.opacity="1";
        successsIcon[serial].style.opacity="0";
    }
};