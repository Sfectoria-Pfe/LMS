import { configureStore } from '@reduxjs/toolkit'
import { userInfo } from './UserInfo'
import { courses } from './courses'
import  coursesSlice from './courses'
import ProgramSlice from "./Program";
import auth from './auth';
import userSlice from './UserInfo'
import  lessonSlice  from './lesson';
import  sessionsSlice  from './sessions';


export const store = configureStore({
    reducer: {
        userSlice  , coursesSlice, sessionsSlice, ProgramSlice,auth, lessonSlice , 
    }
})