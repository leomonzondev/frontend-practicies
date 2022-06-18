import React, { useContext } from 'react'

import UserContext, { Context } from '../store/userContext'
import { User } from './interfaces';

export function usePoints(): [Context['state']['user']['points'], Context['actions']['addPoints']] {
    const { state: { user }, actions: { addPoints }} = useContext(UserContext)

    return [ user.points, addPoints ]
}

export function useUser(): Context["state"]["user"] {
    const { state: { user }, actions: { addPoints }} = useContext(UserContext)

    return user
}