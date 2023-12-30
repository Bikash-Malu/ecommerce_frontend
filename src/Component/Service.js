import React from 'react'

const Service = () => {
  return (

    <div className='container'>
    <div class=" container jumbotron">
    <h1 class="display-4">Welcome to Our eCommerce Service!</h1>
    <p class="lead">Discover a wide range of products and services tailored just for you.</p>
    <a class="btn btn-primary btn-lg" href="#" role="button" style={{marginTop:'50px'}}>Shop Now</a>
</div>

<div class="container mt-5">
    <div class="row">
        <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
                {/* <img src="https://placekitten.com/300/200" class="card-img-top" alt="Product Image"> */}
                <div class="card-body">
                    <h5 class="card-title">Product 1</h5>
                    <p class="card-text">Description of Product 1 goes here.</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary">View Details</button>
                            <button type="button" class="btn btn-sm btn-outline-secondary">Add to Cart</button>
                        </div>
                        <small class="text-muted">$19.99</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
  )
}

export default Service
