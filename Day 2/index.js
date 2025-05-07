function getData(event) {
    event.preventDefault()
   
    
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let subject = document.getElementById("subject").value
    let message = document.getElementById("message").value
 
    console.log(name, email, phone, subject, message);
    alert("berhasil input data")
}

