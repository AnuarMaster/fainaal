document.getElementById("registrationForm").addEventListener("submit", function(event){
  event.preventDefault()

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  console.log("Name: " + name);
  console.log("Email: " + email);
  console.log("Password: " + password);

  alert("Registration successful!");
});