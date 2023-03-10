import React from 'react'
import { Link } from 'react-router-dom'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="bg-gradient-to-r from-slate-500 to-slate-700 h-64 flex items-center justify-center text-slate-100 text-2xl font-bold">
        <h1>Welcome to Our Online Store</h1>
      </div>
      <div className="max-w-4xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 ">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Compra Nuestros Ultimos Productos
        </h2>
        <p className="mt-4 text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="mt-16">
          <Link
            to="/auth/register"
            className="w-full bg-gray-800 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-lg font-medium text-white hover:bg-gray-700"
          >
            Compra ahora
          </Link>
        </div>
      </div>
    </div>
  )
}
