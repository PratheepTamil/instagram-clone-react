# Instagram Clone 📸

A responsive Instagram-inspired web application built using React JS. This project recreates core Instagram features with a clean user interface and local JSON Server integration.

## ✨ Features

* 📱 Instagram-style home feed
* 📖 Stories section with story navigation
* ❤️ Posts with captions and comments
* 👤 Profile details and profile updates
* ➕ Follow and unfollow functionality
* 🔄 Data fetching and updates using Axios
* 🎨 Responsive UI with Bootstrap

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript
* React JS
* Vite
* Bootstrap
* Bootstrap Icons
* Axios
* JSON Server

## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
```

### 2. Navigate to the project folder

```bash
cd instagram
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the JSON Server

```bash
npx json-server db/db.json --port 3000
```

### 5. Start the React development server

Open another terminal and run:

```bash
npm run dev
```

Open the local URL displayed in your terminal to view the application.

## 📂 Project Structure

```text
instagram/
├── db/
│   └── db.json
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── Feed.jsx
│   ├── Posts.jsx
│   ├── Profile.jsx
│   ├── Sidebar.jsx
│   ├── Stories.jsx
│   ├── Suggestion.jsx
│   ├── ViewStory.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

## 🚀 Future Improvements

* User authentication
* Backend integration
* Improved mobile responsiveness
* Online deployment

## 👨‍💻 Author

Pratheep T.

## 📌 Note

This project uses JSON Server for local API development. The JSON Server must be running separately for API-dependent features to work.
