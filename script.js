document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const list = document.getElementById('todo-list');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const task = input.value.trim();
        if (task) {
            addTodo(task);
            input.value = '';
            input.focus();
        }
    });

    function addTodo(taskText) {
        const li = document.createElement('li');
        li.className = 'todo-item';

        const span = document.createElement('span');
        span.textContent = taskText;

        // Mark as complete on click
        span.addEventListener('click', function () {
            li.classList.toggle('completed');
        });

        // Remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Delete';
        removeBtn.onclick = function (e) {
            e.stopPropagation();
            li.remove();
        };

        li.appendChild(span);
        li.appendChild(removeBtn);
        list.appendChild(li);
    }
});