import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';
// Import images
import controler001 from '../assets/images/controller001.jpg';
import controler002 from '../assets/images/controler 002.jpg';
import controler003 from '../assets/images/controler003.jpg';
import controler004 from '../assets/images/contoler004.jpg';
import controlerx from '../assets/images/controler x.jpg';
import controlery from '../assets/images/controler y.jpg';


const Home = () => {
  const navigate = useNavigate();

  // Featured games data
  const featuredGames = [
    {
      id: 1,
      title: "mult-pad",
      price: 30.99,
      discount: 49.99,
      image: controler002,
      rating: 4.8,
      platforms: ['PS5', 'Xbox', 'PC', 'PS4']
    },
    {
      id: 2,
      title: "d-x",
      price: 20.99,
      image: controler001,
      rating: 4.9,
      platforms: ['PS3', 'PC']
    },
    {
      id: 3,
      title: "d-controler",
      price: 45.99,
      discount: 29.99,
      image: controler003,
      rating: 4.7,
      platforms: ['Switch', 'Xbox', 'PC']
    }
  ];

  // New releases
  const newReleases = [
    {
      id: 4,
      title: "x-pad",
      releaseDate: "Just Released",
      image: controlerx,
    },
    {
      id: 5,
      title: "juggle -pad",
      releaseDate: "New",
      image: controlery,
    },
    {
      id: 6,
      title: "j-pad",
      releaseDate: "Coming Soon",
      image: controler004,
    }
  ];

  return (
    // carousel starts here
    

    // carousel ends here
    <div className="container-fluid px-0">
      {/* Hero Section */}
      <div className="hero bg-dark text-white text-center p-5">
        <h1 className="display-4 fw-bold">Next Level Gaming Starts Here</h1>
        <p className="lead">Discover the hottest titles and exclusive deals</p>
        <Link to="/getproducts" className="btn btn-danger btn-lg mx-2">Shop Now</Link>
      </div>

      {/* Featured Games */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Featured controllers</h2>
        <div className="row">
          {featuredGames.map(game => (
            <div key={game.id} className="col-md-4 mb-4">
              <div className="card h-100">
                <img src={game.image} className="card-img-top" height={300} alt={game.title} />
                <div className="card-body">
                  <h5 className="card-title">{game.title}</h5>
                  <div className="mb-2">
                    {game.platforms.map((platform, i) => (
                      <span key={i} className="badge bg-secondary me-1">{platform}</span>
                    ))}
                  </div>
                  <div className="text-warning mb-2">
                    {'★'.repeat(Math.floor(game.rating))}
                    {'☆'.repeat(5 - Math.floor(game.rating))}
                    <span className="text-dark ms-1">{game.rating}</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      {game.discount ? (
                        <>
                          <span className="text-muted text-decoration-line-through me-2">${game.price}</span>
                          <span className="fw-bold text-danger">${game.discount}</span>
                        </>
                      ) : (
                        <span className="fw-bold">${game.price}</span>
                      )}
                    </div>
                    <button 
                      className="btn btn-primary btn-sm"
                      onClick={() => navigate("/Payments",{state: {game}})}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* New Releases */}
      <div className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Still available</h2>
          <div className="row">
            {newReleases.map(game => (
              <div key={game.id} className="col-md-4 mb-4">
                <div className="card h-100">
                  <img src={game.image} className="card-img-top" height={250} alt={game.title} />
                  <div className="card-body text-center ">
                    <h5 className="card-title">{game.title}</h5>
                    <span className={`badge ${game.releaseDate === 'Coming Soon' ? 'bg-info' : 'bg-success'}`}>
                      {game.releaseDate}
                    </span>
                    <div className="mt-3">
                      <button 
                        className="btn btn-dark"
                        onClick={() => navigate('/payments', { state: { game } })}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Special Offer */}
      <div className="bg-success text-white text-center py-5">
        <h2>SUMMER SALE</h2>
        <h3 className="display-5 fw-bold mb-3">Up to 50% Off</h3>
        <p className="lead">Selected titles only. Limited time offer.</p>
        <Link to="/getproducts" className="btn btn-light btn-lg">Shop Sale</Link>
      </div>

      
      
    
    </div>
  );
};

export default Home;