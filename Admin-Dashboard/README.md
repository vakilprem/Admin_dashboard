# 🧑‍💻 React Admin Dashboard

This is a feature-rich admin dashboard built using **React.js**, **Vite**, **Tailwind CSS**, **Lucide Icons**, **Recharts**, and **Redux Toolkit** (selectively).

---

## 🔄 State Management Strategy

We are showcasing **two different approaches** for managing state:

### ✅ Products Page (Local State)
- Implemented with **React's useState and useEffect**
- Fetches data using Axios directly inside the component
- Uses local state for filtering, editing, and deleting
- Ideal for **simple, isolated components**

📁 File: `src/pages/Products.jsx`

---

### 🔁 Orders Page (Redux Toolkit)
- Uses **Redux Toolkit** for state management
- Centralized actions like `fetchOrders`, `updateOrder`, `deleteOrder`
- Makes use of `createSlice` and `createAsyncThunk`
- Ideal for **shared, complex, or growing features**

📁 File: `src/pages/Orders.jsx`  
📁 Slice: `src/redux/features/ordersSlice.js`  
📁 Store: `src/redux/store.js`

---

## 🧪 Why This Approach?
By keeping **Products** in plain React and using **Redux Toolkit** for **Orders**, we can:
- Compare local vs global state management
- Demonstrate practical Redux usage without overcomplicating the whole app
- Showcase flexibility for different component needs

---

## 🛠 Stack
- React + Vite
- Tailwind CSS
- Redux Toolkit
- Recharts (for dashboard metrics)
- Axios
- Lucide Icons

---

## 🚀 Coming Soon
- Auth + Role-Based Routing
- Team Management with Redux
- Contact/Support Form
- File Upload with Preview
- Code Splitting + Performance Optimizations
