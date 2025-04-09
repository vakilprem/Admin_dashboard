import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    LineChart,
    Line,
    CartesianGrid,
    PieChart,
    Pie,
    Cell,
    Legend,
  } from 'recharts'
  import CountUp from 'react-countup'
  import { motion } from 'framer-motion'
  import {
    FiUsers,
    FiShoppingCart,
    FiDollarSign,
    FiTrendingUp,
  } from 'react-icons/fi'
  
  const barData = [
    { month: 'Jan', sales: 4000 },
    { month: 'Feb', sales: 3000 },
    { month: 'Mar', sales: 5000 },
    { month: 'Apr', sales: 4500 },
  ]
  
  const lineData = [
    { name: 'Week 1', users: 400 },
    { name: 'Week 2', users: 800 },
    { name: 'Week 3', users: 600 },
    { name: 'Week 4', users: 1000 },
  ]
  
  const pieData = [
    { name: 'Mobile', value: 40 },
    { name: 'Desktop', value: 35 },
    { name: 'Tablet', value: 25 },
  ]
  
  const COLORS = ['#3b82f6', '#10b981', '#f59e0b']
  
  const stats = [
    {
      title: 'Total Users',
      value: 1200,
      color: 'bg-blue-500',
      icon: <FiUsers />,
      prefix: '',
    },
    {
      title: 'Sales',
      value: 32000,
      color: 'bg-green-500',
      icon: <FiShoppingCart />,
      prefix: '$',
    },
    {
      title: 'Orders',
      value: 850,
      color: 'bg-purple-500',
      icon: <FiTrendingUp />,
      prefix: '',
    },
    {
      title: 'Revenue',
      value: 120000,
      color: 'bg-pink-500',
      icon: <FiDollarSign />,
      prefix: '$',
    },
  ]
  
  const Dashboard = () => {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Welcome, Admin 👋
        </h2>
  
        {/* === Animated Stats === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              className={`p-4 rounded shadow text-white ${item.color} hover:shadow-lg transition-all`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-lg">{item.title}</h4>
                <div className="text-2xl">{item.icon}</div>
              </div>
              <p className="text-2xl font-bold">
                <CountUp
                  end={item.value}
                  duration={2}
                  prefix={item.prefix}
                  separator=","
                />
              </p>
              <span className="text-sm mt-1 text-white/80 block">
                ⬆ {5 + i * 3}% from last month
              </span>
            </motion.div>
          ))}
        </div>
  
        {/* === Charts Section === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Bar Chart */}
          <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
              Monthly Sales
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sales" fill="#3b82f6" radius={[10, 10, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
  
          {/* Line Chart */}
          <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
              Weekly Active Users
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="users"
                  stroke="#10b981"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
  
          {/* Pie Chart */}
          <div className="bg-white dark:bg-gray-800 p-4 rounded shadow md:col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
              Platform Distribution
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={100}
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Legend />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    )
  }
  
  export default Dashboard
  