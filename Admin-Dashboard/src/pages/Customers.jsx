import React from "react";
const Customers = () => {
    const customers = [
      { id: 1, name: 'Alice', email: 'alice@example.com' },
      { id: 2, name: 'Bob', email: 'bob@example.com' },
      { id: 3, name: 'Charlie', email: 'charlie@example.com' },
    ]
  
    return (
      <div>
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">👥 Customer List</h2>
        <ul className="space-y-4">
          {customers.map(c => (
            <li
              key={c.id}
              className="bg-white dark:bg-gray-800 p-4 rounded shadow hover:shadow-md transition"
            >
              <p className="font-semibold text-gray-800 dark:text-white">{c.name}</p>
              <p className="text-gray-600 dark:text-gray-300">{c.email}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
  
  export default Customers
  