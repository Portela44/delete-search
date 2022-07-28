import React from 'react'

export default function Product(props) {
    const {product: {name, price, _id}, onDelete} = props;
    return (
        <div>
            <p>{name}</p>
            <button className="delete-btn" onClick={() => onDelete(_id)}>Delete</button>
        </div>
    )
}
