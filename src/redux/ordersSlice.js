import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchOrders = createAsyncThunk('orders/fetchOrders', async () => {
  const response = await axios.get('https://fakestoreapi.com/products')
  return response.data
})

const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
    list: [],
    status: 'idle',
  },
  reducers: {
    deleteOrder: (state, action) => {
      state.list = state.list.filter(order => order.id !== action.payload)
    },
    updateOrder: (state, action) => {
      const index = state.list.findIndex(order => order.id === action.payload.id)
      if (index !== -1) {
        state.list[index] = { ...state.list[index], title: action.payload.title }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.list = action.payload
        state.status = 'succeeded'
      })
      .addCase(fetchOrders.rejected, (state) => {
        state.status = 'failed'
      })
  }
})

export const { deleteOrder, updateOrder } = ordersSlice.actions
export default ordersSlice.reducer
