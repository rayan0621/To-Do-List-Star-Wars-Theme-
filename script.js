function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    if (taskInput.value.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = taskInput.value;

        // Add a delete button to each task
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'btn-delete';
        deleteBtn.onclick = function() {
            taskList.removeChild(li);
        };

        // Mark task as completed
        li.onclick = function() {
            li.classList.toggle('completed');
        };

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value = '';
    }
}
