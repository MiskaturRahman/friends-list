import React from 'react';
import './FriendList.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const FriendList = (props) => {
    const addfriend = props.addfriend;
    console.log(addfriend);
    const total = addfriend.reduce((total, inc) => total + inc.income, 0)

    //for loop method
    // let total = 0;
    // for (let i = 0; i < addfriend.length; i++) {
    //     const money = addfriend[i];
    //     total += money.income;
    // }

    return (
        <div>
            <h3>Friend List</h3>
            <h4>Added friend: {addfriend.length}</h4>
            <h5>Yearly cumulative income: {total}</h5>
        </div>
    );
};

export default FriendList;