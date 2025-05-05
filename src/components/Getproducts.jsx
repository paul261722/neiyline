import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import games005 from '../assets/images/games005.jpg';
import games008 from '../assets/images/games008.jpg';
import games002 from '../assets/images/games002.jpg';

const ProductItem = ({ product, onAddToCart }) => (
  <div className="col-md-4 mb-4">
    <div className="card h-100 shadow-sm">
      <img 
        src={product.image} 
        alt={product.name}
        className="card-img-top"
        style={{ height: '200px', objectFit: 'cover' }}
        onError={(e) => { 
          e.target.src = 'https://via.placeholder.com/200'; // Fallback image
        }} 
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.name}</h5>
        <div className="mb-2 text-warning">
          {'★'.repeat(Math.floor(product.rating))}
          {product.rating % 1 >= 0.5 && '½'}
          {'☆'.repeat(5 - Math.ceil(product.rating))}
          <span className="text-muted ms-2">({product.rating})</span>
        </div>
        <p className="card-text text-muted">{product.description}</p>
        <p className="mt-auto fw-bold text-primary">{product.price}</p>
        <button 
          className="btn btn-primary mt-2"
          onClick={() => onAddToCart(product.id)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
);

const products = [
  {
    id: 1,
    name: "Mortal kombat x",
    description: "A legendary sword with unmatched power.",
    price: "500 gold",
    image: games005,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Pes 2015",
    description: "Restores 50 HP instantly.",
    price: "50 gold",
    image: games008,
    rating: 4.0,
  },
  {
    id: 3,
    name: "Fc 25",
    description: "Bellingham",
    price: "100 gold",
    image: games002,
    rating: 4.8,
  },
];

const ProductGrid = () => {
  const [showAlert, setShowAlert] = React.useState(false);
  const [alertMessage, setAlertMessage] = React.useState('');

  const handleAddToCart = (productId) => {
    const product = products.find(p => p.id === productId);
    setAlertMessage(`Added ${product.name} to cart!`);
    setShowAlert(true);

    setTimeout(() => setShowAlert(false), 3000); // Hide after 3 seconds
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5">Featured Products</h2>
      
      {showAlert && (
        <div 
          className="alert alert-success position-fixed top-0 end-0 m-3" 
          style={{ zIndex: 1000 }}
        >
          {alertMessage}
          <button 
            type="button" 
            className="btn-close" 
            onClick={() => setShowAlert(false)}
            aria-label="Close"
          ></button>
        </div>
      )}
      
      <div className="row">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
      
      
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ProductGrid;
