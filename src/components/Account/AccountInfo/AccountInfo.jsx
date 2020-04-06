import React from 'react';
import module from './AccountInfo.module.css';

const AccountInfo = () => {
    return (
        <div>
            <div className={module.AccountImage}>
                <img
                    src="https://images.pexels.com/photos/358482/pexels-photo-358482.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="accountImage"/>
            </div>
            <div>
                ava + description
            </div>
        </div>
    )
}

export default AccountInfo;
