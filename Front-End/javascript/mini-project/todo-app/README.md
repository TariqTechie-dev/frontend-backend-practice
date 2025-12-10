# Pro Todo App

Lightweight, accessible Todo web app you can open locally. Stores tasks in `localStorage` so data persists in your browser.

Features
- Add tasks with optional due date and priority
- Edit, delete, mark complete
- Filter (All / Active / Completed) and search
- Export JSON to clipboard
- Mobile-first responsive design and keyboard-friendly

Files
- `index.html` — main UI
- `style.css` — styling
- `app.js` — app logic (ES module)

How to run
1. Open `index.html` directly in your browser (double-click). For best dev experience serve it with a local server.

Quick local server (PowerShell):
```powershell
# from the todo-app folder
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

Notes
- Tasks are saved in `localStorage` under key `pro-todo.tasks.v1`.
- If you want private sync or GitHub integration, we can add an MCP server endpoint to return repo counts or to backup tasks remotely.
