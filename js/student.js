const user = JSON.parse(localStorage.getItem("currentUser"));
document.getElementById("welcome").innerText = "Welcome " + user.name;

let issues = JSON.parse(localStorage.getItem("issues")) || [];
const list = document.getElementById("issueList");

list.innerHTML = "";

issues.forEach(issue => {
  if (issue.studentName === user.name) {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <h3>${issue.title}</h3>
      <p>Category: ${issue.category}</p>
      <p>Status: <span class="${issue.status}">${issue.status}</span></p>
    `;
    list.appendChild(div);
  }
});
