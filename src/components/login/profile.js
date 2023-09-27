import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { LogoutButton } from './logout';

export const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return (
            <div>Loading...</div>
          )
    }

    return (
        isAuthenticated && (
            <div className='profile'>
                <div className='profile__left'>
                    <img src={user.picture} alt={user.name} />
                    <p>Email: {user.email}</p>
                </div>
                <div className='profile__right'>
                    <h2>{user.name}</h2>
                    <LogoutButton />
                </div>
                
            </div>
        )
      )
}
