import React from 'react'
import { Navigate } from 'react-router-dom'

export default function AdminRoute({ children }) {
  try {
    const token = localStorage.getItem('adminToken')
    if (token && token !== 'undefined') return children
  } catch (e) {
    // ignore
  }
  return <Navigate to="/admin-login" replace />
}
