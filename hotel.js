import React, { useState } from 'react';

const menuItems = [
  { id: 1, name: 'Veg Biryani', description: 'Mixed vegetable biryani', price: 150, category: 'Rice' },
  { id: 2, name: 'Palak Paneer', description: 'Spinach curry with paneer', price: 180, category: 'Curries' },
  { id: 3, name: 'Veg Manchurian', description: 'Deep-fried vegetable balls in Manchurian sauce', price: 120, category: 'Chinese' },
  // Add other items here (ensure unique `id` values)
  { id: 4, name: 'Dal Makhani', description: 'Black lentil curry with kidney beans', price: 100, category: 'Curries' },
  { id: 5, name: 'Mattar Paneer', description: 'Peas and paneer curry', price: 180, category: 'Curries' },
  { id: 6, name: 'Veg Spring Rolls', description: 'Deep-fried vegetable spring rolls', price: 80, category: 'Chinese' },
  { id: 7, name: 'Rajma Masala', description: 'Kidney bean curry', price: 120, category: 'Curries' },
  { id: 8, name: 'Samosas', description: 'Deep-fried or baked pastry filled with spiced potatoes and peas', price: 60, category: 'Snacks' },
  { id: 9, name: 'Idli', description: 'Steamed rice cake', price: 40, category: 'South Indian' },
  { id: 10, name: 'Dosa', description: 'Fermented rice and lentil crepe', price: 60, category: 'South Indian' },
  { id: 11, name: 'Vada Pav', description: 'Deep-fried doughnut sandwich', price: 40, category: 'Street Food' },
  { id: 12, name: 'Pav Bhaji', description: 'Mixed vegetable curry with bread', price: 80, category: 'Street Food' },
  { id: 13, name: 'Kachoris', description: 'Deep-fried bread puffs filled with spiced potatoes and peas', price: 60, category: 'Snacks' },
  { id: 14, name: 'Gujarati Thali', description: 'Mixed vegetable platter with rice, roti, and dal', price: 200, category: 'Thalis' },
  { id: 15, name: 'South Indian Thali', description: 'Mixed vegetable platter with rice, roti, and sambar', price: 220, category: 'Thalis' },
  { id: 16, name: 'Chana Masala', description: 'Chickpea curry', price: 120, category: 'Curries' },
  { id: 17, name: 'Saag Aloo', description: 'Spinach curry with potatoes', price: 100, category: 'Curries' },
  { id: 18, name: 'Baingan Bharta', description: 'Roasted eggplant mash', price: 80, category: 'Curries' },
  { id: 19, name: 'Kadai Paneer', description: 'Paneer curry with bell peppers and onions', price: 180, category: 'Curries' },
  { id: 20, name: 'Malai Kofta', description: 'Deep-fried vegetable dumplings in creamy sauce', price: 200, category: 'Curries' },
  { id: 21, name: 'Sag Paneer', description: 'Spinach curry with paneer', price: 180, category: 'Curries' },
  { id: 22, name: 'Tinda Masala', description: 'Baby pumpkin curry', price: 100, category: 'Curries' },
  { id: 23, name: 'Bhindi Masala', description: 'Okra curry', price: 100, category: 'Curries' },
  { id: 24, name: 'Aloo Gobi', description: 'Potato and cauliflower curry', price: 80, category: 'Curries' },
  { id: 25, name: 'Mushroom Masala', description: 'Mushroom curry', price: 150, category: 'Curries' },
  { id: 26, name: 'Veg Jalfrezi', description: 'Stir-fried mixed vegetables', price: 120, category: 'Chinese' },
  { id: 27, name: 'Veg Chowmein', description: 'Stir-fried noodles with mixed vegetables', price: 100, category: 'Chinese' },
  { id: 28, name: 'Ras Malai', description: 'Deep-fried paneer in creamy sauce', price: 150, category: 'Desserts' },
  { id: 29, name: 'Gulab Jamun', description: 'Deep-fried dumplings in rose syrup', price: 100, category: 'Desserts' },
  { id: 30, name: 'Jalebi', description: 'Deep-fried fermented batter in syrup', price: 80, category: 'Desserts' },
  { id: 31, name: 'Kulfi', description: 'Indian-style ice cream', price: 60, category: 'Desserts' },
  { id: 32, name: 'Lassi', description: 'Yogurt-based drink', price: 40, category: 'Beverages' },
  { id: 33, name: 'Chai', description: 'Spiced tea', price: 20, category: 'Beverages' },
  { id: 34, name: 'Coffee', description: 'Hot coffee', price: 30, category: 'Beverages' },
  { id: 35, name: 'Falooda', description: 'Cold dessert drink with vermicelli noodles', price: 80, category: 'Beverages' },
];

const IshwaryasFoodParadise = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };

  const handleRemoveFromCart = (item) => {
    const index = cart.findIndex((i) => i.id === item.id);
    if (index > -1) {
      const newCart = [...cart];
      newCart.splice(index, 1);
      setCart(newCart);
    }
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const formatCurrency = (value) => `₹${value.toFixed(2)}`;

  return (
    <div style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
      <h1 style={{ fontSize: '2rem', color: '#28a745', marginBottom: '10px' }}>Ishwarya's Food Paradise</h1>
      <h2 style={{ fontSize: '1.5rem', color: '#28a745', marginBottom: '20px' }}>Vegetarian Menu</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {menuItems.map((item) => (
          <div
            key={item.id}
            style={{
              backgroundColor: '#fff',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              padding: '20px',
              margin: '10px',
              width: '200px',
            }}
          >
            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{item.name}</h3>
            <p>{item.description}</p>
            <p style={{ fontWeight: 'bold' }}>{formatCurrency(item.price)}</p>
            <button
              onClick={() => handleAddToCart(item)}
              style={{
                backgroundColor: '#28a745',
                color: '#fff',
                padding: '10px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <h2 style={{ fontSize: '1.5rem', color: '#28a745', margin: '20px 0' }}>Cart</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {cart.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            style={{
              backgroundColor: '#fff',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              padding: '20px',
              margin: '10px',
              width: '200px',
            }}
          >
            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{item.name}</h3>
            <p style={{ fontWeight: 'bold' }}>{formatCurrency(item.price)}</p>
            <button
              onClick={() => handleRemoveFromCart(item)}
              style={{
                backgroundColor: '#dc3545',
                color: '#fff',
                padding: '10px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Total: {formatCurrency(total)}</p>
    </div>
  );
};

export default IshwaryasFoodParadise;
