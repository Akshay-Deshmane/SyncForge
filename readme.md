# SyncForge => (Real-Time Collaborative Code Editor)

A powerful **real-time collaborative coding platform** that enables multiple users to write, edit, and synchronize code simultaneously using **CRDTs and WebSockets**. This project demonstrates how modern distributed systems handle **concurrent editing without conflicts**.

---

## Overview =>

** SyncForge ** is a full-stack web application built to simulate tools like Google Docs or VS Code Live Share for developers.

It leverages :-

* **Yjs (CRDT Engine)** for conflict-free real-time synchronization
* **Socket.IO** for low-latency bidirectional communication
* **Monaco Editor** for a VS Code-like coding experience
* **React.js** for dynamic UI rendering

It solves a key problem in collaborative systems :-

> *Concurrent edits → Data conflicts & inconsistency*

By using CRDTs, SyncForge ensures **consistent, reliable, and real-time shared state across all users**.

---

## Features =>

* 1.Real-time collaborative code editing.
* 2.Live user presence tracking.
* 3.Instant synchronization across multiple clients.
* 4.Conflict-free editing using CRDT (Yjs).
* 5.WebSocket-based communication (Socket.IO).
* 6.VS Code-like editor using Monaco.
* 7.Dynamic user join via username.

---

## Project Architecture =>

```
User (Browser - React UI)
        ↓
Monaco Editor (Code Input)
        ↓
Yjs Document (Shared State)
        ↓
Socket.IO Provider (WebSocket Sync)
        ↓
Backend Server (Express + Socket.IO)
        ↓
Other Connected Clients (Real-time Updates)
```

---

## Tech Stack =>

| Technology    | Purpose                    |
| ------------- | -------------------------- |
| React.js      | Frontend UI                |
| Monaco Editor | Code editing environment   |
| Yjs           | CRDT-based synchronization |
| y-monaco      | Binding editor with Yjs    |
| Socket.IO     | Real-time communication    |
| Express.js    | Backend server             |
| Node.js       | Runtime environment        |

---

## Installation & Setup =>

```bash
# Clone the repository
git clone https://github.com/Akshay-Deshmane/syncforge.git

# Navigate to project directory
cd syncforge
```

---

### Backend Setup =>

```bash
cd backend
npm install
npm run dev
```

Server runs on:

```
http://localhost:3000
```

---

### Frontend Setup =>

```bash
cd frontend
npm install
npm run dev
```

---

### Run Application =>

```
http://localhost:5173?username=john
```

Open multiple tabs with different usernames to test real-time collaboration.

---

## Workflow Of SyncForge =>

### 1.User Join :-

User enters a username and joins the session :- 

```
?username=John
```

---

### 2.Shared Document Initialization :-

A **Yjs Document (Y.Doc)** is created :-

```js
const ydoc = new Y.Doc();
```

---

### 3.Editor Binding :-

Monaco editor is connected with Yjs :-

```js
new MonacoBinding(yText, editor.getModel(), new Set([editor]));
```

---

### 4.Real-Time Synchronization :-

Changes are:

* Updated in Yjs document
* Broadcast via Socket.IO
* Synced across all users instantly

---

### 5.User Presence Tracking :-

Yjs Awareness API tracks active users :-

```js
provider.awareness.setLocalStateField("user", { username });
```

---

## Key Engineering Concepts =>

### 1.CRDT (Conflict-free Replicated Data Types) :-

Ensures :-

* No merge conflicts
* Consistent state across all clients
* Offline/parallel editing capability

---

### 2.WebSocket Communication :-

Provides :-

* Low latency
* Real-time updates
* Persistent connection

---

### 3.Shared State Management :-

Yjs acts as :-

* Single source of truth
* Distributed synchronized state

---

## Project Structure =>

```
syncforge/
│
├── backend/
│   ├── server.js        # Express + Socket.IO server
│   ├── package.json
│  
├── frontend/
│   ├── App.jsx          # Main React logic
│   ├── App.css
│
└── readme.md
```

---

## Example Usage =>

```
User1: starts typing code
User2: sees changes instantly

User1: adds function
User2: edits same function simultaneously (no conflict)
```

---

## Limitations Of SyncForge =>

* No authentication system
* No persistent storage (data resets on refresh)
* Single shared room (no multi-room support)

---

## Future Enhancements / Future Scope =>

* 1.Authentication (JWT / OAuth)
* 2.Multi-room collaboration support
* 3.Database integration (MongoDB / Firebase)
* 4.Real-time chat feature
* 5.File system support (multiple files)
* 6.Deployment (Docker + Cloud)
* 7.Version control / history tracking

---
