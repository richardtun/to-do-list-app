document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const list = document.getElementById('todo-list');
    let tasks = [];

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const taskText = input.value.trim();
        if (!taskText) return;

        // Check for duplicate (case-insensitive)
        if (tasks.some(t => t.text.toLowerCase() === taskText.toLowerCase())) {
            alert('Task already exists!');
            return;
        }

        addTodo(taskText);
        input.value = '';
        input.focus();
    });

    function addTodo(taskText) {
        // Create task object
        const taskObj = { text: taskText, completed: false };
        tasks.push(taskObj);

        renderTasks();
    }

    function renderTasks() {
        // Clear list
        list.innerHTML = '';

        tasks.forEach((task, idx) => {
            const li = document.createElement('li');
            li.className = 'todo-item' + (task.completed ? ' completed' : '');

            // Label container
            const label = document.createElement('label');
            label.className = 'todo-label';

            // Checkbox
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = 'todo-checkbox';
            checkbox.checked = task.completed;
            checkbox.addEventListener('change', function () {
                task.completed = checkbox.checked;
                renderTasks();
            });

            // Task text
            const span = document.createElement('span');
            span.textContent = task.text;

            label.appendChild(checkbox);
            label.appendChild(span);

            // Remove button
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Delete';
            removeBtn.onclick = function (e) {
                tasks.splice(idx, 1);
                renderTasks();
            };

            li.appendChild(label);
            li.appendChild(removeBtn);
            list.appendChild(li);
        });
    }
});
