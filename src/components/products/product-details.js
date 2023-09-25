import React, { useContext, useState, useEffect } from 'react';
import { DataContext } from '../../context/dataProvider';
import { useParams } from 'react-router-dom';
import { ProductItem } from './product-item';

export const ProductDetails = () => {
    
    const value =useContext(DataContext);
    const [products] = value.products;
    const addCart = value.addCart;
    const [detail, setDetail] = useState([]);
    const [url, setUrl] = useState(0);
    const [images, setImages] = useState('');
    const params = useParams();
    let item = 0;


    useEffect(() => {
        products.forEach(product => {
            item = 0;
            if (product.id === parseInt(params.id)) {
                setDetail(product);
                setUrl(0);
            }

        })
    },[params.id, products])

    useEffect(() => {
        const values = `${detail.img1}${url}${detail.img2}`;
        setImages(values);
    },[url, params.id]);

    const handleImput = e => {
        const number = e.target.value.toString().padStart(2, '01');
        setUrl(number);
        console.log(number);
    }

    if(detail.length < 1) return null;

    return (
        <div>
            {
                <div className='details'>
                    <h2>{detail.title}</h2>
                    <p className='price'>${detail.price}</p>
                    <div className='detail__grid'>
                        <p className='new'>New</p>
                        <div className='size'>
                            <select placeholder='Tamaño'>
                                <option value='1'>1</option>
                                <option value='1'>2</option>
                                <option value='1'>3</option>
                                <option value='1'>4</option>
                                <option value='1'>5</option>
                                <option value='1'>6</option>
                                <option value='1'>7</option>
                                <option value='1'>8</option>
                                <option value='1'>9</option>
                            </select>
                            <p>Size</p>
                        </div>
                    </div>
                    <button onClick={()=> addCart(detail.id)}>Add to cart</button>
                    {
                        url ? <img src={images} alt={detail.title}/>:<img src={detail.image} alt={detail.title}/>
                    }
                    <input type='range' min='1' max='36' value={url} onChange={handleImput}/>
                    <div className='description'>
                        <p><b>description:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Vestibulum faucibus imperdiet orci, gravida iaculis ex vehicula a. 
                        Morbi sit amet tincidunt metus. Morbi varius facilisis dignissim. 
                        Phasellus vel est eu. <br/> <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Vivamus nibh dolor, blandit nec sem ac, accumsan interdum urna. 
                        Nam id ligula malesuada tortor semper porta.</p>
                    </div>
                </div>
            }

            <h2 className='related'>Related Products</h2>
            <div className='products'>
                {
                    
                    products.map(product => {
                        if ((item < 6)&&(detail.category === product.category)) {
                            item++;
                            return(
                                <ProductItem 
                                    key={product.id}
                                    id={product.id}
                                    title={product.title}
                                    price={product.price}
                                    image={product.image}
                                    category={product.category}
                                    cantidad={product.cantidad}
                                />
                            );
                        }
                    })
                    
                    
                }
            </div>
        </div>
    )
}
