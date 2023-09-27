import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { LoginButton } from '../login/login';
import { Profile } from '../login/profile';

export const SubHeader = () => {

    const {isAuthenticated} = useAuth0();

    return (
        <div className='subheader'>
            {
                isAuthenticated?(<Profile />):(<LoginButton />)
            }
        </div>
    )
}
