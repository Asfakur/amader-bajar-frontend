import React from 'react';
import { useParams } from 'react-router';

function ProductDetails() {

    const { id } = useParams();
    console.log(id);
    return (
        
        <div>
            <h1>This is product details</h1>    
        </div>
    );
}

    <h1>This is product details</h1>
export default ProductDetails;