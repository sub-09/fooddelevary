import React, { useContext } from 'react';
import "./FoodItem.css";
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, image, name, description, price }) => {
    const { cartItem, addToCart, removeFromCart } = useContext(StoreContext);

    return (
        <div className='foodItem'>
            <div className="foodItemImageContainer">
                <img className='foodItemImage' src={image} alt="" />
                {
                    !cartItem[id] ?
                        <img
                            className='add'
                            onClick={() => addToCart(id)}
                            src={assets.add_icon_white}
                            alt="Add Icon"
                        />
                        :
                        <div className='foodItemCounter'>
                            <img
                                onClick={() => removeFromCart(id)}
                                src={assets.remove_icon_red}
                                alt="Remove Icon"
                            />
                            <p>{cartItem[id]}</p>
                            <img
                                onClick={() => addToCart(id)}
                                src={assets.add_icon_green}
                                alt="Add Icon"
                            />
                        </div>
                }
            </div>
            <div className="foodItemInfo">
                <div className="foodItemNameRating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="Rating" />
                </div>
                <p className='foodItemDescription'>
                    {description}
                </p>
                <p className='foodItemPrice'>${price}</p>
            </div>
        </div>
    );
}

export default FoodItem;
