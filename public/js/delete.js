const deleteComment = document.querySelector("#deleteComment");

deleteComment.addEventListener("click",(e)=>{
    e.preventDefault();
    fetch("/api/comments/",{
        method:"DELETE"
    }).then(res=>{
        if(res.ok){
           location.href = "/profile"
        } else {
            alert("trumpet sound")
        }
    })
})