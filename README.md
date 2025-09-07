# 📚 Mini Blog App
<img width="1888" height="861" alt="Mini Blog App" src="https://github.com/user-attachments/assets/399cac2c-756e-4def-bcc2-5364bf8b4da3" />
![Uploading Mini Blog App.png…]()

Учебное CRUD-приложение на **React**, демонстрирующее работу с состоянием, модальными окнами и фильтрацией списка постов.  
Проект — лёгкая версия блога, где можно создавать, удалять, сортировать и искать посты.


---

## 🚀 Функционал

- ➕ Создание постов через модальное окно  
- ❌ Удаление постов  
- 🔍 Поиск по названию  
- ↕️ Сортировка постов (по `title` или `description`)  
- 🎨 Адаптивный UI с кастомными компонентами (`Button`, `MyModal`)  
- ⚡ Оптимизация производительности с помощью `useMemo`  

---

## 🛠️ Стек технологий

- [React](https://react.dev/) (хуки: `useState`, `useMemo`)  
- TailwindCSS (оформление)  
- Собственные UI-компоненты  

---

## 📂 Структура проекта

```bash
src/
 ├── components/
 │   ├── PostList.jsx
 │   ├── PostForm.jsx
 │   ├── PostFilter.jsx
 │   └── ui/
 │       ├── MyModal/
 │       │   └── MyModal.jsx
 │       └── button/
 │           └── Button.jsx
 ├── App.jsx
 └── main.jsx

⚙️ Установка и запуск
# Клонируй репозиторий
git clone https://github.com/your-username/mini-blog.git

# Перейди в папку проекта
cd mini-blog

# Установи зависимости
npm install

# Запусти локальный сервер
npm run dev


После запуска проект будет доступен по адресу:
👉 http://localhost:5173
