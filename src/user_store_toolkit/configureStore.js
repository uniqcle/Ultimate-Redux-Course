import { configureStore } from '@reduxjs/toolkit'
import reducer from './users'

export default function () {
    return configureStore({
        reducer
    })
}

