import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOrders, deleteOrder, updateOrder } from '../redux/ordersSlice'
import { Pencil, Trash2, X } from 'lucide-react'
import toast from 'react-hot-toast'

const Orders = () => {
  const dispatch = useDispatch()
  const { list: orders, status } = useSelector(state => state.orders)

  const [search, setSearch] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)
  const [editedTitle, setEditedTitle] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5

  // Fetch orders from API
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchOrders())
    }
  }, [status, dispatch])

  const handleDelete = (id) => {
    dispatch(deleteOrder(id))
    toast.success('Deleted successfully')
  }

  const openEditModal = (item) => {
    setSelectedItem(item)
    setEditedTitle(item.title)
    setShowModal(true)
  }

  const handleUpdate = () => {
    dispatch(updateOrder({ id: selectedItem.id, title: editedTitle }))
    setShowModal(false)
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
    <div className="space-y-4 relative">
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

      {status === 'loading' ? (
        <p className="text-center text-gray-500 dark:text-white">Loading...</p>
      ) : (
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
                  <td className="py-2 px-4 border-b">{item.title}</td>
                  <td className="py-2 px-4 border-b">${item.price}</td>
                  <td className="py-2 px-4 border-b capitalize">{item.category}</td>
                  <td className="py-2 px-4 border-b text-center space-x-2">
                    <button
                      onClick={() => openEditModal(item)}
                      className="text-blue-600 hover:underline"
                    >
                      <Pencil size={16} />
                    </button>
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
      )}

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

      {/* === Edit Modal === */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-800 rounded shadow-lg w-[90%] max-w-md p-6 space-y-4 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-600 dark:text-gray-300 hover:text-red-500"
            >
              <X size={20} />
            </button>
            <h3 className="text-lg font-semibold">Edit Product Title</h3>
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              className="w-full border rounded px-4 py-2 dark:bg-gray-700 dark:text-white"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border rounded text-gray-600 dark:text-white"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdate}
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Orders
