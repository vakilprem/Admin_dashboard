import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import { Toaster } from "react-hot-toast";


const Dashboard = lazy(() => import("./pages/Dashboard"));
const Products = lazy(() => import("./pages/Products"));
const Orders = lazy(() => import("./pages/Orders"));
const Customers = lazy(() => import("./pages/Customers"));
const Settings = lazy(() => import("./pages/Settings"));
const Profile = lazy(() => import("./pages/Profile"));
const Login = lazy(() => import("./pages/Login"));
const Contact = lazy(() => import("./pages/Contact"));
const ChatPanel = lazy(() => import("./pages/ChatPanel"));
function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Router>
        <Suspense
          fallback={
            <div className="text-center mt-10 text-lg">⏳ Loading...</div>
          }
        >
          <Routes>
            <Route path="/login" element={<Login />} />

            <Route
              path="*"
              element={
                <ProtectedRoute>
                  <Layout>
                    <Routes>
                      <Route path="/" element={<Dashboard />} />
                      <Route path="/products" element={<Products />} />
                      <Route path="/orders" element={<Orders />} />
                      <Route path="/customers" element={<Customers />} />
                      <Route path="/settings" element={<Settings />} />
                      <Route path="/profile" element={<Profile />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="/chat" element={<ChatPanel />} />
                    </Routes>
                  </Layout>
                </ProtectedRoute>
              }
            />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
