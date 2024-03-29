import React, { useState, useEffect } from 'react';

const Termekek = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://jwt.sulla.hu/termekek', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); 

  return (
    <div>
      <h1>Termékek</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <strong>{product.name}</strong> - ${product.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Termekek;
