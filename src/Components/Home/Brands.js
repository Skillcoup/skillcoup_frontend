import React from 'react';
import brandimg from '../../assets/brandimgall.png';
const Brands = () => {
    return (
        <>
            <div class="section-headline centered margin-top-0 margin-bottom-25">
                <h3>Trusted By</h3>
            </div>
            <div className="container">
                <img src={brandimg} alt="" />
            </div>
        </>
    );
}
export default Brands;