// script.js
function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");

  // Task text
  const span = document.createElement("span");
  span.textContent = taskText;
  span.onclick = () => {
    span.parentElement.classList.toggle("checked");
  };

  // Delete button
  const deleteBtn = document.createElement("span");
  deleteBtn.textContent = "✖";
  deleteBtn.className = "delete";
  deleteBtn.onclick = () => {
    li.remove();
  };

  li.appendChild(span);
  li.appendChild(deleteBtn);

  document.getElementById("taskList").appendChild(li);
  input.value = ""; // Clear input
}