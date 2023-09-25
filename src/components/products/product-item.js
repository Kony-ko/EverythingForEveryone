import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../../context/dataProvider';

export const ProductItem = ({
    
    id,
    title,
    price,
    image,
    category
}) => {

    const value = useContext(DataContext);
    const addCart =value.addCart;

    return (
        <div>
            <div className='product'>
                <Link to={`/product/${id}`}>
                    <div className='product__img'>
                        <img src={image} alt={title}/>
                    </div>
                </Link>
                <div className='product__footer'>
                    <h1>{title}</h1>
                    <p>{category}</p>
                    <p className='price'>${price}</p>
                </div>
                <div className='btn-wrapper'>
                    <button className='btn' onClick={() => addCart(id)}>
                        Add to cart
                    </button>
                    <div>
                        <Link to={`/product/${id}`} className='btn'>
                            View
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
