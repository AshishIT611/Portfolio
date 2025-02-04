document.getElementById("btn").addEventListener("click",(event)=>{
    event.preventDefault();
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let message=document.getElementById("message").value;
    if(name===""||email===""||message===""){
        alert("Please fill out all the details");
    }
    else{
        alert("Form submitted successfully");
        document.getElementById("myForm").submit();
    }
})