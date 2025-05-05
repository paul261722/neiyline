import './SingleProducts.css';

const products = [
  {
    id: 1,
    product_name: "Premium Headphones",
    product_cost: "4500",
    product_desc: "High-quality wireless headphones with noise cancellation",
    product_photo: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 2,
    product_name: "Smart Watch",
    product_cost: "12000",
    product_desc: "Fitness tracker with heart rate monitor",
    product_photo: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 3,
    product_name: "Wireless Speaker",
    product_cost: "6000",
    product_desc: "Portable Bluetooth speaker with 20h battery",
    product_photo: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D"
  }
];

const SingleProduct = () => {
  return (
    <div className="single-product-container">
      <h2 className="text-center mb-4">Our Products</h2>
      <div className="row justify-content-center">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card shadow single-product-card h-100">
              <img 
                src={product.product_photo} 
                alt={product.product_name} 
                className="card-img-top product-image"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h3 className="card-title">{product.product_name}</h3>
                <h4 className="text-warning">KSh {product.product_cost}</h4>
                <p className="card-text text-muted">{product.product_desc}</p>
                
                <form className="mt-3">
                  <input
                    type="text"
                    placeholder="amount"
                    readOnly
                    value={`KSh ${product.product_cost}`}
                    className="form-control mb-2"
                  />
                  <input
                    type="tel"
                    placeholder="Enter Mpesa No 2547xxxxxxxx"
                    className="form-control mb-3"
                  />
                  <button className="btn btn-primary w-100">Pay Now 💳</button> 
                </form>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleProduct;