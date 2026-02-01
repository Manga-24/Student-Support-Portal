function submitIssue() {
  const title = document.getElementById("title").value;
  const category = document.getElementById("category").value;
  const desc = document.getElementById("description").value;
  const msg = document.getElementById("msg");

  if (title === "" || category === "" || desc === "") {
    msg.innerText = "Fill all fields";
    return;
  }

  const user = JSON.parse(localStorage.getItem("currentUser"));

  const issue = {
    id: Date.now(),
    studentName: user.name,
    title: title,
    category: category,
    description: desc,
    status: "Pending"
  };

  let issues = JSON.parse(localStorage.getItem("issues")) || [];
  issues.push(issue);
  localStorage.setItem("issues", JSON.stringify(issues));

  msg.innerText = "Issue submitted successfully";

  setTimeout(() => {
    window.location.href = "student.html";

  }, 1000);
}
