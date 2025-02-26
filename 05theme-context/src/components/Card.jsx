import React from 'react'

function Card() {
    return (
        <div className="card mx-auto my-2" style={{ width: '18rem' }}>
            <a href="/">
                <img
                    src="https://images.pexels.com/photos/4965011/pexels-photo-4965011.jpeg?auto=compress&cs=tinysrgb&w=600"
                    className="card-img-top"
                    alt="product_image1"
                />
            </a>
            <div className="card-body">
                <h6 className="card-title">
                    Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                </h6>
                <div className="d-flex justify-content-between align-items-center">
                    <span className="h5 rate">$599</span>
                    <a href="/" className="btn btn-theme">Add to cart</a>
                </div>
            </div>
        </div>
    );
}

export default Card
