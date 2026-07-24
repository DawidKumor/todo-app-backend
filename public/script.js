const toggleFormBtn = document.querySelector("#toggleFormBtn");
const taskForm = document.querySelector("#taskForm");
const taskList = document.querySelector("#taskList");
const cancelBtn = document.querySelector(".task-form-cancel__button");
const formError = document.querySelector("#formError");

const editForm = document.querySelector("#editForm");
const editFormError = document.querySelector("#editFormError");

let currentEditId = null;

toggleFormBtn.addEventListener("click", () => {
  taskForm.hidden = !taskForm.hidden;
});

cancelBtn.addEventListener("click", () => {
  taskForm.hidden = true;
  taskForm.reset();
});

taskForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const title = document.querySelector("#title").value;
  const description = document.querySelector("#description").value;

  const response = await fetch("/tasks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, description }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    formError.textContent = errorData.message;
    formError.hidden = false;
    return;
  }

  formError.hidden = true;
  taskForm.reset();
  taskForm.hidden = true;
  fetchTasks();
});

function renderTasks(tasks) {
  taskList.innerHTML = "";
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.className = "task-list__item";
    li.dataset.id = task._id;
    li.innerHTML = `
    <input class="task-list__checkbox" type="checkbox" disabled ${task.completed ? "checked" : ""}>
      <span class="task-list__date">${new Date(task.createdAt).toLocaleDateString()}</span>
      <span class="task-list__title">${task.title}</span>
      <span class="task-list__description">${task.description}</span>
      <button class="task-list__edit-button" type="button">Edit</button>
      <button class="task-list__delete-button" type="button">Delete</button>
    `;
    taskList.appendChild(li);
  });
}

async function fetchTasks() {
  const response = await fetch("/tasks");
  const tasks = await response.json();
  renderTasks(tasks);
}
fetchTasks();

taskList.addEventListener("click", async (event) => {
  const li = event.target.closest(".task-list__item");
  if (!li) return;
  const id = li.dataset.id;

  if (event.target.classList.contains("task-list__delete-button")) {
    const response = await fetch(`/tasks/${id}`, { method: "DELETE" });
    if (!response.ok) {
      const errorData = await response.json();
      alert(`Error deleting task: ${errorData.message}`);
      return;
    }
    fetchTasks();
  }
  if (event.target.classList.contains("task-list__checkbox")) {
    const response = await fetch(`/tasks/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: event.target.checked }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      alert(`Error: ${errorData.message}`);
      return;
    }
    fetchTasks();
  }

  if (event.target.classList.contains("task-list__edit-button")) {
    const title = li.querySelector(".task-list__title").textContent;
    const description = li.querySelector(".task-list__description").textContent;
    const completed = li.querySelector(".task-list__checkbox").checked;

    document.querySelector("#editTitle").value = title;
    document.querySelector("#editDescription").value = description;
    document.querySelector("#editCompleted").checked = completed;

    currentEditId = id;
    editForm.hidden = false;
  }
});

editForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const title = document.querySelector("#editTitle").value;
  const description = document.querySelector("#editDescription").value;
  const completed = document.querySelector("#editCompleted").checked;

  const response = await fetch(`/tasks/${currentEditId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, description, completed }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    editFormError.textContent = errorData.message;
    editFormError.hidden = false;
    return;
  }

  editFormError.hidden = true;
  editForm.reset();
  editForm.hidden = true;
  currentEditId = null;
  fetchTasks();
});

const editCancelBtn = document.querySelector(".edit-form-cancel__button");

editCancelBtn.addEventListener("click", () => {
  editForm.hidden = true;
  editForm.reset();
  currentEditId = null;
});
