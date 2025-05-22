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
document.addEventListener("DOMContentLoaded", () => {
    const lazySections = document.querySelectorAll('.lazy-load');

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.classList.remove('hidden');
                obs.unobserve(entry.target); // Stop observing after loaded
            }
        });
    }, {
        threshold: 0.1,
    });

    lazySections.forEach(section => {
        observer.observe(section);
    });
});
