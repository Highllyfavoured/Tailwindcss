import React, { useState } from 'react';

const App = () => {
  const products = [
    { id: 1, name: 'Jollof Rice', price: '1,500', image: '🍚', category: 'Food' },
    { id: 2, name: 'Ankara Fabric', price: '5,000', image: '👗', category: 'Fashion' },
    { id: 3, name: 'Suya Spice', price: '800', image: '🌶️', category: 'Food' },
    { id: 4, name: 'Aso-Ebi', price: '15,000', image: '🥻', category: 'Fashion' },
    { id: 5, name: 'Palm Wine', price: '1,200', image: '🍶', category: 'Drinks' },
    { id: 6, name: 'Agbada', price: '25,000', image: '🎩', category: 'Fashion' },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const stats = [
    { title: 'Total Sales', value: '₦2.5M', change: '+12%', icon: '💰', color: 'blue' },
    { title: 'Orders', value: '1,234', change: '+8%', icon: '📦', color: 'green' },
    { title: 'Customers', value: '567', change: '+23%', icon: '👥', color: 'purple' },
    { title: 'Revenue', value: '₦4.2M', change: '+15%', icon: '📈', color: 'red' },
  ];

  return (
    <div>
      {/* ====== Product Grid ====== */}
      First
      <div className="bg-gray-50 min-h-screen py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Nigerian Products</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-6xl">
                  {product.image}
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                      {product.category}
                    </span>
                  </div>

                  <p className="text-2xl font-bold text-green-600 mb-4">₦{product.price}</p>

                  <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
            SECOND
      {/* ====== Responsive Layout Examples ====== */}
      <div className="p-4">
        <h1 className="text-base md:text-lg lg:text-2xl">Responsive Text Size</h1>

        <div className="p-4 lg:p-8 bg-blue-500 text-white mt-4">Responsive Padding</div>

        <div className="block lg:flex gap-4 mt-4">
          <div className="bg-green-500 p-4 text-white">Item 1</div>
          <div className="bg-green-500 p-4 text-white">Item 2</div>
        </div>
      </div>

      {/* ====== Responsive Grid ====== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="bg-blue-500 p-8 text-white">
            {i + 1}
          </div>
        ))}
      </div>

      {/* ====== Visibility Examples ====== */}
      <div className="p-4">
        <div className="hidden lg:block bg-blue-500 p-4 text-white mb-4">
          Only visible on large screens
        </div>

        <div className="block lg:hidden bg-green-500 p-4 text-white mb-4">
          Only visible on mobile
        </div>

        <div className="bg-red-500 p-4 text-white">
          <span className="block sm:hidden">📱 Mobile View</span>
          <span className="hidden sm:block md:hidden">📱 Tablet View</span>
          <span className="hidden md:block">💻 Desktop View</span>
        </div>
      </div>

      {/* ====== Navigation Bar ====== */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                N
              </div>
              <span className="text-xl font-bold text-gray-800">NaijaStore</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-gray-700 hover:text-green-600 font-medium">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-green-600 font-medium">
                Products
              </a>
              <a href="#" className="text-gray-700 hover:text-green-600 font-medium">
                About
              </a>
              <a href="#" className="text-gray-700 hover:text-green-600 font-medium">
                Contact
              </a>
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700">
                Login
              </button>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-700 text-2xl font-bold"
            >
              {isOpen ? '✕' : '☰'}
            </button>
          </div>

          {isOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col gap-4">
                <a href="#" className="text-gray-700 hover:text-green-600 font-medium">Home</a>
                <a href="#" className="text-gray-700 hover:text-green-600 font-medium">Products</a>
                <a href="#" className="text-gray-700 hover:text-green-600 font-medium">About</a>
                <a href="#" className="text-gray-700 hover:text-green-600 font-medium">Contact</a>
                <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 text-left">
                  Login
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* ====== Dashboard Section ====== */}
      <div className="min-h-screen bg-gray-100">
        <aside
          className={`fixed top-0 left-0 h-full w-64 bg-green-600 text-white transform transition-transform duration-300 z-20
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
        >
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-8">🇳🇬 Dashboard</h2>
            <nav className="space-y-2">
              {['Dashboard', 'Products', 'Orders', 'Customers', 'Analytics', 'Settings'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block py-3 px-4 rounded-lg hover:bg-green-700 transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-10 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}

        <div className="lg:ml-64">
          <header className="bg-white shadow-sm sticky top-0 z-10">
            <div className="flex items-center justify-between px-4 py-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden text-gray-600"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>

              <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>

              <div className="flex items-center gap-4">
                <button className="relative">
                  <svg
                    className="w-6 h-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    3
                  </span>
                </button>

                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                  C
                </div>
              </div>
            </div>
          </header>

          {/* Stats Section */}
          <main className="p-4 lg:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl bg-${stat.color}-100`}
                    >
                      {stat.icon}
                    </div>
                    <span
                      className={`text-sm font-semibold ${
                        stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                      }`}
                    >
                      {stat.change}
                    </span>
                  </div>
                  <h3 className="text-gray-600 text-sm font-medium">{stat.title}</h3>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Placeholder Charts */}
            <div className="grid lg:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Sales Overview</h3>
                <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                  Chart Placeholder
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Revenue by Category</h3>
                <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                  Chart Placeholder
                </div>
              </div>
            </div>

            {/* Orders Table */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-xl font-bold text-gray-900">Recent Orders</h3>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order ID</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Product</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">#12345</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Chidi Okafor</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Jollof Rice</td>
                      <td className="px-6 py-4 text-sm text-gray-900">₦1,500</td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full">
                          Completed
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">#12346</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Amaka Nwosu</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Ankara Fabric</td>
                      <td className="px-6 py-4 text-sm text-gray-900">₦5,000</td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 text-xs font-semibold text-yellow-800 bg-yellow-100 rounded-full">
                          Processing
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">#12347</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Tunde Bakare</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Suya</td>
                      <td className="px-6 py-4 text-sm text-gray-900">₦1,000</td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full">
                          Shipped
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
