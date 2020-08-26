import React from 'react';
import './Collection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, fauserplus, fa, faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Collection = (props) => {
    // console.log(props);
    const { name, img, address, email, phone, income } = props.collection;
    return (
        <div className="collection">
            <div>
                <img className="img" src={img} alt="" />
            </div>
            <div>
                <h4 className="name">Name: {name}</h4>
                <h4>From: <br />
                    {address.suite}, City: {address.city}, street: {address.street}</h4>
                <h6>email: {email}
                    <br />
                Phone: {phone}
                </h6>
                <h4>Net Income: ${income}</h4>
            </div>
            <div>
                <button onClick={() => props.handleaddFriend(props.collection)}
                    className="button" ><FontAwesomeIcon icon={faUserPlus} /> Add friend</button>
            </div>

        </div>
    );
};

export default Collection;