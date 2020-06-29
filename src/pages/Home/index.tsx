import React, { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import { MdAddShoppingCart } from 'react-icons/md';

import { formatPrice } from '../../utils/format';
import api from '../../services/api';

import { ProductList } from './styles';

interface Products {
  id: number;
  title: string;
  price: number;
  image: string;
  priceFormatted: string;
}

const Home: React.FC = () => {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    async function loadProduct() {
      const response = await api.get<Products[]>('/products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data as Products[]);
    }

    loadProduct();
  }, []);

  return (
    <ProductList>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>

          <button type="button">
            <div>
              <MdAddShoppingCart size={16} color="#fff" />
              <div className="loading">
                <Loader type="Oval" color="#FFF" width={18} height={18} />
              </div>
            </div>
            <span>ADD TO CART</span>
          </button>
        </li>
      ))}
      
    </ProductList>
  );
}

export default Home;