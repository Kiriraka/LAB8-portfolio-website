# React.js Fundamentals – LAB 08 Experiment 2

## 📂 โครงสร้างไฟล์
    LAB-08/experiment2/
    ├── src/
    │ ├── App.jsx
    │ ├── App.css
    │ ├── Welcome.jsx
    │ ├── Counter.jsx
    │ ├── TodoForm.jsx
    │ ├── TodoList.jsx #
    │ ├── TodoItem.jsx #
    │ ├── context/
    │ │ └── TodoContext.jsx
    │ └── main.jsx 
    └── README.md

---

## 📝 เนื้อหา Workshop

### 1. Components & JSX
- **Component** = หน่วยย่อย UI เช่น Navbar, Sidebar, Post  
- **JSX** = Syntax เขียน UI คล้าย HTML ใน JavaScript  
- ตัวอย่าง: `App.jsx` เรียก `Welcome.jsx`

---

### 2. State & Props
- **Props** → ส่งค่าจาก Parent → Child (เปลี่ยนไม่ได้)  
- **State** → เก็บค่าใน Component (เปลี่ยนได้ด้วย `useState`)  
- ตัวอย่าง: `Welcome` รับ `name`, `Counter` มี state `count`

---

### 3. Event Handling
- ใช้ attribute เช่น `onClick`, `onChange`  
- ตัวอย่าง: `Counter` มีปุ่มเพิ่ม/ลดค่า

---

### 4. useEffect
- จัดการ **Side Effects** เช่น API, document.title, setInterval  
- ตัวอย่าง: เปลี่ยน `document.title` ตามค่า count

---

### 5. Mini Project: To-Do List
- **App.jsx** → รวม state และ logic จัดการ todos  
- **TodoForm.jsx** → Input + ปุ่ม เพิ่ม todo  
- **TodoList.jsx** → แสดง todos + ลบได้  
- **App.css** → ตกแต่ง UI

---

## 🚀 Challenge Activities
1. **Toggle Completed** → คลิกเพื่อ mark งานเสร็จ (ขีดฆ่า)  
2. **Edit To-Do** → แก้ไขข้อความ todo ได้  
3. **useContext** → แก้ปัญหา prop drilling โดยใช้ `TodoContext`  
4. **Container / Presentational Pattern**  
   - Container = จัดการ logic/state (เช่น `App.jsx`)  
   - Presentational = UI อย่างเดียว (เช่น `TodoForm`, `TodoList`)  

---

## ✅ Key Takeaways
- เข้าใจการใช้ **JSX** และ **Component-Based Architecture**  
- รู้จักการทำงานของ **State & Props**  
- ตอบสนองผู้ใช้ด้วย **Event Handling**  
- จัดการ side effects ด้วย **useEffect**  
- ทำ Mini Project → **To-Do List App** รวมทุกแนวคิด  
- ฝึก Challenge → Toggle, Edit, useContext, Design Pattern  

---

## ▶️ การรันโปรเจกต์
```bash
npm install
npm run dev
