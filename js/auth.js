function login() {
  const username = document.getElementById("username").value;
  const role = document.getElementById("role").value;
  const error = document.getElementById("error");

  if (username === "" || role === "") {
    error.textContent = "Please enter name and select role";
    return;
  }

  // Save user info in localStorage
  const user = {
    name: username,
    role: role
  };

  localStorage.setItem("currentUser", JSON.stringify(user));

  // Redirect based on role
  if (role === "student") {
    
    window.location.href = "student.html";

  } else {
   
    window.location.href = "admin.html";

  }
}
