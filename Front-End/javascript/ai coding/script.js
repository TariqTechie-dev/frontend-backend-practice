// Todo List App - JavaScript Functionality

class TodoApp {
    constructor() {
        this.todos = JSON.parse(localStorage.getItem('todos')) || [];
        this.currentFilter = 'all';
        this.init();
    }

    init() {
        this.bindEvents();
        this.render();
        this.updateStats();
    }

    bindEvents() {
        // Add todo event listeners
        document.getElementById('addBtn').addEventListener('click', () => this.addTodo());
        document.getElementById('todoInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addTodo();
        });

        // Filter event listeners
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.setFilter(e.target.dataset.filter));
        });

        // Clear actions event listeners
        document.getElementById('clearCompleted').addEventListener('click', () => this.clearCompleted());
        document.getElementById('clearAll').addEventListener('click', () => this.clearAll());
    }

    addTodo() {
        const input = document.getElementById('todoInput');
        const text = input.value.trim();

        if (text === '') {
            this.showAlert('Please enter a task!', 'error');
            return;
        }

        if (text.length > 100) {
            this.showAlert('Task is too long! Maximum 100 characters.', 'error');
            return;
        }

        const todo = {
            id: Date.now(),
            text: text,
            completed: false,
            createdAt: new Date().toLocaleString()
        };

        this.todos.unshift(todo); // Add to beginning of array
        input.value = '';
        this.saveTodos();
        this.render();
        this.updateStats();
        this.showAlert('Task added successfully!', 'success');
    }

    toggleTodo(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            this.saveTodos();
            this.render();
            this.updateStats();
        }
    }

    deleteTodo(id) {
        if (confirm('Are you sure you want to delete this task?')) {
            this.todos = this.todos.filter(t => t.id !== id);
            this.saveTodos();
            this.render();
            this.updateStats();
            this.showAlert('Task deleted!', 'info');
        }
    }

    setFilter(filter) {
        this.currentFilter = filter;
        
        // Update active filter button
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-filter="${filter}"]`).classList.add('active');
        
        this.render();
    }

    getFilteredTodos() {
        switch (this.currentFilter) {
            case 'pending':
                return this.todos.filter(todo => !todo.completed);
            case 'completed':
                return this.todos.filter(todo => todo.completed);
            default:
                return this.todos;
        }
    }

    render() {
        const todoList = document.getElementById('todoList');
        const filteredTodos = this.getFilteredTodos();

        if (filteredTodos.length === 0) {
            todoList.innerHTML = this.getEmptyStateHTML();
            return;
        }

        todoList.innerHTML = filteredTodos.map(todo => this.getTodoHTML(todo)).join('');

        // Add event listeners to dynamically created elements
        this.bindTodoEvents();
    }

    bindTodoEvents() {
        // Checkbox event listeners
        document.querySelectorAll('.todo-checkbox').forEach(checkbox => {
            checkbox.addEventListener('click', (e) => {
                const id = parseInt(e.target.dataset.id);
                this.toggleTodo(id);
            });
        });

        // Delete button event listeners
        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = parseInt(e.target.dataset.id);
                this.deleteTodo(id);
            });
        });
    }

    getTodoHTML(todo) {
        return `
            <li class="todo-item ${todo.completed ? 'completed' : ''}">
                <div class="todo-checkbox ${todo.completed ? 'checked' : ''}" data-id="${todo.id}"></div>
                <span class="todo-text">${this.escapeHtml(todo.text)}</span>
                <span class="todo-date">${todo.createdAt}</span>
                <button class="delete-btn" data-id="${todo.id}">×</button>
            </li>
        `;
    }

    getEmptyStateHTML() {
        const messages = {
            all: {
                title: 'No tasks yet!',
                message: 'Add your first task to get started.'
            },
            pending: {
                title: 'No pending tasks!',
                message: 'Great job! All tasks are completed.'
            },
            completed: {
                title: 'No completed tasks!',
                message: 'Complete some tasks to see them here.'
            }
        };

        const msg = messages[this.currentFilter];
        return `
            <div class="empty-state">
                <h3>${msg.title}</h3>
                <p>${msg.message}</p>
            </div>
        `;
    }

    updateStats() {
        const total = this.todos.length;
        const completed = this.todos.filter(todo => todo.completed).length;
        const pending = total - completed;

        document.getElementById('totalTasks').textContent = `Total: ${total}`;
        document.getElementById('pendingTasks').textContent = `Pending: ${pending}`;
        document.getElementById('completedTasks').textContent = `Completed: ${completed}`;
    }

    clearCompleted() {
        const completedCount = this.todos.filter(todo => todo.completed).length;
        
        if (completedCount === 0) {
            this.showAlert('No completed tasks to clear!', 'info');
            return;
        }

        if (confirm(`Are you sure you want to delete ${completedCount} completed task(s)?`)) {
            this.todos = this.todos.filter(todo => !todo.completed);
            this.saveTodos();
            this.render();
            this.updateStats();
            this.showAlert(`${completedCount} completed task(s) cleared!`, 'success');
        }
    }

    clearAll() {
        if (this.todos.length === 0) {
            this.showAlert('No tasks to clear!', 'info');
            return;
        }

        if (confirm(`Are you sure you want to delete all ${this.todos.length} task(s)?`)) {
            this.todos = [];
            this.saveTodos();
            this.render();
            this.updateStats();
            this.showAlert('All tasks cleared!', 'success');
        }
    }

    saveTodos() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    showAlert(message, type = 'info') {
        // Remove existing alerts
        const existingAlert = document.querySelector('.alert');
        if (existingAlert) {
            existingAlert.remove();
        }

        // Create new alert
        const alert = document.createElement('div');
        alert.className = `alert alert-${type}`;
        alert.textContent = message;
        alert.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 8px;
            color: white;
            font-weight: 500;
            z-index: 1000;
            animation: slideInRight 0.3s ease;
            max-width: 300px;
            word-wrap: break-word;
        `;

        // Set background color based on type
        const colors = {
            success: '#2ed573',
            error: '#ff4757',
            info: '#5352ed'
        };
        alert.style.backgroundColor = colors[type] || colors.info;

        // Add CSS animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideInRight {
                from {
                    opacity: 0;
                    transform: translateX(100%);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
        `;
        document.head.appendChild(style);

        document.body.appendChild(alert);

        // Auto remove after 3 seconds
        setTimeout(() => {
            if (alert.parentNode) {
                alert.style.animation = 'slideInRight 0.3s ease reverse';
                setTimeout(() => alert.remove(), 300);
            }
        }, 3000);
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new TodoApp();
});

// Add some sample todos for demonstration (only if no todos exist)
document.addEventListener('DOMContentLoaded', () => {
    const existingTodos = JSON.parse(localStorage.getItem('todos'));
    if (!existingTodos || existingTodos.length === 0) {
        const sampleTodos = [
            {
                id: Date.now() - 3,
                text: 'Welcome to your Todo List! 🎉',
                completed: false,
                createdAt: new Date().toLocaleString()
            },
            {
                id: Date.now() - 2,
                text: 'Click the checkbox to mark tasks as complete',
                completed: true,
                createdAt: new Date().toLocaleString()
            },
            {
                id: Date.now() - 1,
                text: 'Use the filter buttons to view different task categories',
                completed: false,
                createdAt: new Date().toLocaleString()
            }
        ];
        localStorage.setItem('todos', JSON.stringify(sampleTodos));
    }
});
