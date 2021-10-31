const signinForm = document.querySelector("#signin-form");

signinForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const userObj={
        email:document.querySelector("#email").value,
        password:document.querySelector("#password").value,
    }
    fetch("/api/users/signin",{
        method:"POST",
        body:JSON.stringify(userObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.href = "/profile"
        } else {
            alert("trumpet sound")
        }
    }) 
})