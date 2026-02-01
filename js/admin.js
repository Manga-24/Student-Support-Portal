let issues = JSON.parse(localStorage.getItem("issues")) || [];

const table = document.getElementById("issueTable");

// Analytics
document.getElementById("totalCount").innerText = issues.length;
document.getElementById("pendingCount").innerText =
  issues.filter(i => i.status === "Pending").length;
document.getElementById("resolvedCount").innerText =
  issues.filter(i => i.status === "Resolved").length;

function displayIssues(list) {
  table.innerHTML = "";

  list.forEach((issue, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${issue.studentName}</td>
      <td>${issue.title}</td>
      <td>${issue.category}</td>
      <td><span class="${issue.status}">${issue.status}</span></td>
      <td>
        <select onchange="updateStatus(${index}, this.value)">
          <option ${issue.status=="Pending"?"selected":""}>Pending</option>
          <option ${issue.status=="In Progress"?"selected":""}>In Progress</option>
          <option ${issue.status=="Resolved"?"selected":""}>Resolved</option>
        </select>
      </td>
    `;

    table.appendChild(row);
  });
}

displayIssues(issues);

function updateStatus(index, newStatus) {
  issues[index].status = newStatus;
  localStorage.setItem("issues", JSON.stringify(issues));
  location.reload();
}

function searchIssues() {
  const key = document.getElementById("searchBox").value.toLowerCase();

  const filtered = issues.filter(issue =>
    issue.studentName.toLowerCase().includes(key) ||
    issue.title.toLowerCase().includes(key)
  );

  displayIssues(filtered);
}
