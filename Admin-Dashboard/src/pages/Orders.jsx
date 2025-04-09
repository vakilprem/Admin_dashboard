import React from "react";
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Pencil, Trash2 } from 'lucide-react'
import toast from 'react-hot-toast'

const Orders = () => {
  const [orders, setOrders] = useState([])
  const [search, setSearch] = useState('')
  const [editItem, setEditItem] = useState(null)
  const [editedTitle, setEditedTitle] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => setOrders(res.data))
  }, [])

  const handleDelete = (id) => {
    setOrders(orders.filter(order => order.id !== id))
    toast.success('Deleted successfully')
  }

  const handleEdit = (item) => {
    setEditItem(item.id)
    setEditedTitle(item.title)
  }

  const handleUpdate = (id) => {
    setOrders(orders.map(order => order.id === id ? { ...order, title: editedTitle } : order))
    setEditItem(null)
    toast.success('Updated successfully')
  }

  const filtered = orders.filter(order =>
    order.title.toLowerCase().includes(search.toLowerCase())
  )

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filtered.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil(filtered.length / itemsPerPage)

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Orders</h2>

      <input
        type="text"
        placeholder="Search orders..."
        className="px-4 py-2 border rounded w-full md:w-1/3"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value)
          setCurrentPage(1)
        }}
      />

      <div className="overflow-auto">
        <table className="min-w-full bg-white dark:bg-gray-800 text-left rounded">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">#</th>
              <th className="py-2 px-4 border-b">Product</th>
              <th className="py-2 px-4 border-b">Price</th>
              <th className="py-2 px-4 border-b">Category</th>
              <th className="py-2 px-4 border-b text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, i) => (
              <tr key={item.id} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                <td className="py-2 px-4 border-b">{indexOfFirstItem + i + 1}</td>
                <td className="py-2 px-4 border-b">
                  {editItem === item.id ? (
                    <input
                      value={editedTitle}
                      onChange={(e) => setEditedTitle(e.target.value)}
                      className="border px-2 py-1 rounded w-full"
                    />
                  ) : (
                    item.title
                  )}
                </td>
                <td className="py-2 px-4 border-b">${item.price}</td>
                <td className="py-2 px-4 border-b capitalize">{item.category}</td>
                <td className="py-2 px-4 border-b text-center space-x-2">
                  {editItem === item.id ? (
                    <button
                      onClick={() => handleUpdate(item.id)}
                      className="bg-green-500 text-white px-3 py-1 rounded text-sm"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => handleEdit(item)}
                      className="text-blue-600 hover:underline"
                    >
                      <Pencil size={16} />
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-red-600 hover:underline"
                  >
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 border rounded ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-white dark:bg-gray-700 dark:text-white'}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Orders
