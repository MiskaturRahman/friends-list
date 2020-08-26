import React, { useState } from 'react';
import '../Friend/Friend.css';
import fakeData from '../fakeData/fakeData';
import Collection from '../fakeData/Collection';
import FriendList from '../FriendList/FriendList';

const Friend = () => {

    const friends = [...fakeData];
    const [friend15, setFriend15] = useState(friends);
    const [addfriend, setAddfriend] = useState([]);


    // console.log(friends);

    const handleaddFriend = (collection) => {
        console.log('friend added', collection);
        const newAdd = [...addfriend, collection];
        setAddfriend(newAdd);
    }

    return (
        <div className="friend-container">
            <div className="list-container">
                {
                    friend15.map(collection => <Collection
                        handleaddFriend={handleaddFriend}
                        collection={collection}></Collection>)
                }
            </div>
            <div className="add-container">
                <FriendList addfriend={addfriend}></FriendList>


            </div>

        </div>
    );
};

export default Friend;