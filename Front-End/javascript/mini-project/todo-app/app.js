// Simple, modern Todo app with localStorage persistence
const STORAGE_KEY = 'pro-todo.tasks.v1'

const qs = s => document.querySelector(s)
const qsa = s => Array.from(document.querySelectorAll(s))

const listEl = qs('#todo-list')
const addForm = qs('#add-form')
const newText = qs('#new-text')
const newDue = qs('#new-due')
const newPriority = qs('#new-priority')
const searchInput = qs('#search-input')
const filters = qsa('.filter')
const statsEl = qs('#stats')
const clearBtn = qs('#clear-completed')
const exportBtn = qs('#export')

let tasks = []
let filter = 'all'

function load(){
  try{ tasks = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]') }catch(e){ tasks = [] }
}

function save(){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
}

function uid(){ return Date.now().toString(36) + Math.random().toString(36).slice(2,6) }

function createTask(title, due, priority){
  return { id: uid(), title: title.trim(), due: due || null, priority: priority || 'medium', completed:false, created: Date.now() }
}

function render(){
  listEl.innerHTML = ''
  const q = (searchInput.value || '').toLowerCase()
  const filtered = tasks.filter(t=>{
    if(filter==='active' && t.completed) return false
    if(filter==='completed' && !t.completed) return false
    if(q && !t.title.toLowerCase().includes(q)) return false
    return true
  }).sort((a,b)=>{
    if(a.completed !== b.completed) return a.completed?1:-1
    if(a.priority !== b.priority) return priorityValue(b.priority)-priorityValue(a.priority)
    return a.created - b.created
  })

  for(const t of filtered){
    const li = document.createElement('li')
    li.className = 'todo-item' + (t.completed? ' completed':'')
    li.dataset.id = t.id

    li.innerHTML = `
      <input type="checkbox" class="toggle" ${t.completed? 'checked':''} aria-label="Mark ${escapeHtml(t.title)} complete">
      <div class="title-wrap">
        <div class="title">${escapeHtml(t.title)}</div>
        <div class="meta">${t.due? `Due: ${escapeHtml(t.due)}`: ''} <span class="prio">${escapeHtml(t.priority)}</span></div>
      </div>
      <div class="actions">
        <button class="btn edit">Edit</button>
        <button class="btn delete">Delete</button>
      </div>
    `

    listEl.appendChild(li)
  }

  statsEl.textContent = `${tasks.filter(t=>!t.completed).length} active • ${tasks.filter(t=>t.completed).length} completed`;
}

function priorityValue(p){ return p==='high'?3: p==='medium'?2:1 }

function addFromForm(e){
  e.preventDefault();
  const title = newText.value.trim(); if(!title) return newText.focus();
  tasks.unshift(createTask(title, newDue.value || null, newPriority.value))
  newText.value = ''
  newDue.value = ''
  save(); render(); newText.focus()
}

function handleListClick(e){
  const li = e.target.closest('li'); if(!li) return
  const id = li.dataset.id
  if(e.target.matches('.toggle')){
    const t = tasks.find(x=>x.id===id); if(!t) return; t.completed = e.target.checked; save(); render();
  }else if(e.target.matches('.delete')){
    tasks = tasks.filter(x=>x.id!==id); save(); render();
  }else if(e.target.matches('.edit')){
    startEdit(id, li)
  }
}

function startEdit(id, li){
  const t = tasks.find(x=>x.id===id); if(!t) return;
  const input = document.createElement('input'); input.type='text'; input.value = t.title; input.className='edit-input'
  const dueInput = document.createElement('input'); dueInput.type='date'; dueInput.value = t.due || ''
  const prio = document.createElement('select'); prio.innerHTML = `<option value="low">Low</option><option value="medium">Medium</option><option value="high">High</option>`; prio.value = t.priority

  const saveBtn = document.createElement('button'); saveBtn.className='btn'; saveBtn.textContent='Save'
  const cancelBtn = document.createElement('button'); cancelBtn.className='btn'; cancelBtn.textContent='Cancel'

  const actions = li.querySelector('.actions'); const titleWrap = li.querySelector('.title-wrap')
  titleWrap.style.display = 'none'; actions.style.display = 'none'

  const editor = document.createElement('div'); editor.className='editor'; editor.append(input,dueInput,prio,saveBtn,cancelBtn)
  li.appendChild(editor)

  input.focus()

  saveBtn.onclick = ()=>{
    t.title = input.value.trim() || t.title; t.due = dueInput.value || null; t.priority = prio.value; save(); render();
  }
  cancelBtn.onclick = ()=>{ render() }
}

function escapeHtml(str){ return String(str).replace(/[&<>"']/g, s=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[s])) }

function attach(){
  addForm.addEventListener('submit', addFromForm)
  listEl.addEventListener('click', handleListClick)
  searchInput.addEventListener('input', render)
  filters.forEach(b=> b.addEventListener('click', (e)=>{ filters.forEach(x=>x.classList.remove('active')); e.target.classList.add('active'); filter = e.target.dataset.filter; render() }))
  clearBtn.addEventListener('click', ()=>{ tasks = tasks.filter(t=>!t.completed); save(); render() })
  exportBtn.addEventListener('click', ()=>{ const data = JSON.stringify(tasks,null,2); navigator.clipboard?.writeText(data); alert('JSON copied to clipboard') })

  // keyboard: Enter in search focuses add input
  searchInput.addEventListener('keydown', e=>{ if(e.key==='Enter') newText.focus() })

  // accessibility: Enter to submit when focused on add text
  newText.addEventListener('keydown', e=>{ if(e.key==='Escape'){ newText.value=''; newText.blur() } })
}

// Init
load(); attach(); render();

// expose for debugging
window.__proTodo = { tasks, save, load, render }
