import React, { useContext } from 'react'
import Card from '../../images/img08.jpg';
import { DataContext } from '../../context/dataProvider';

export const Cart = () => {

    const value = useContext(DataContext);
    const [menu, setMenu] = value.menu;
    const [cart, setCart] = value.cart;
    const [total] = value.total;

    const tooglefalse = () => {
        setMenu(false);
    }

    const show1 = menu ? 'carts show':'carts';
    const show2 = menu ? 'cart show':'cart';

    const subtract = id => {
        cart.forEach(item => {
            if (item.id === id) {
                item.cantidad === 1 ? item.cantidad = 1 : item.cantidad -=1;
            }
            setCart([...cart]);
        });
    }

    const addition = id => {
        cart.forEach(item => {
            if (item.id === id) {
                item.cantidad +=1;
            }
            setCart([...cart]);
        });
    }

    const removeProduct = id => {
        if (window.confirm("Are you sure to remove the product?")) {
            cart.forEach((item, index) => {
                if (item.id === id) {
                    item.cantidad = 1;
                    cart.splice(index, 1);

                }
            });
            setCart([...cart]);
        }
    }

    return (
        <div className={show1}>
            <div className={show2}>
                <div className='cart__close' onClick={tooglefalse}>
                    <box-icon name='x'></box-icon>
                </div>

                <h2>Your cart</h2>
                
                <div className='cart__center'>
                    {
                        cart.length === 0 ? <h2 style={{ 
                            textAlign: 'center', 
                            fontSize: '3rem'
                        }}>It`s empty</h2>:
                        (
                            cart.map(product => (
                                <div className='cart__item' key={product.id}>
                                    <img src={product.image} alt='' />
                                    <div>
                                        <h3>{product.title}</h3>
                                        <p className='price'>${product.price}</p>
                                    </div>
                                    <div>
                                        <box-icon name='up-arrow' type='solid' onClick={() => addition(product.id)}></box-icon>
                                        <p className='amount'>{product.cantidad}</p>
                                        <box-icon name='down-arrow' type='solid'onClick={() => subtract(product.id)}></box-icon>
                                    </div>
                                    <div className='remove__item' onClick={() => removeProduct(product.id)}>
                                        <box-icon name='trash'></box-icon>
                                    </div>
                                </div>
                            ))
                        )
                        
                    }
                </div>
                
                <div className='cart__footer'>
                    <h3>Total: ${total}</h3>
                    <button className='btn'>Payment</button>
                </div>
            </div>
        </div>
    )
}
