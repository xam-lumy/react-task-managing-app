import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../FireAuth/fireAuth";
import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, reload, signOut } from "firebase/auth";

export const createANewUser = createAsyncThunk(
    'userData/createANewUser',
    async ({ email, password, additionalData }, thunkAPI) => {

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            const user = userCredential.user
            console.log(user)
            sendEmailVerification(user).then(() => {

                signOut(auth).then(() => {
                    console.log('successsfully signed out')
                }).catch((error) => error.message)
            }).catch((error) => error.message)
            const response = await fetch('http://localhost:5000/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify( {
                    firstName: additionalData.firstName,
                    lastName: additionalData.lastName,
                    email: user.email,
                    password: password
                })
            })
            const data = await response.json()
            console.log(data)
            return data

        }
        catch (error) {
            thunkAPI.rejectWithValue(error.message)
        }
    })

//login user

export const loginAUser = createAsyncThunk('userData/loginAUser', async ({ email, password }, { rejectWithValue }) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        const user = userCredential.user
        console.log(user)
        if (!user.emailVerified) {
            console.log('user is not verified')
            return user.emailVerified
        } else {
            console.log('user is verified')
            
            const response = await fetch('http://localhost:5000/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: user.email,
                    password: password
                })
            })
            const data = await response.json()
            console.log(data)
            console.log(user.emailVerified)
            return data
              
                
            
        }
    } catch (error) {
        return rejectWithValue(error.message)
    }
})



const initialState = {
    user: null,
    loading: false,
    isAuthenticated: false,
    error: null,
    isVerified: false

}

const userSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        logout(state) {
            state.user = null;
            state.isAuthenticated = false
        }
    },
    extraReducers: (builder) => {

        builder
            .addCase(createANewUser.pending, (state) => {
                state.loading = true;
                state.error = null;


            })
            .addCase(createANewUser.fulfilled, (state) => {
                state.loading = false;
                state.error = null;
                state.isAuthenticated = true;
                state.user = null
            })
            .addCase(createANewUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.isAuthenticated = false

            })
            //login reducers
            .addCase(loginAUser.pending, (state) => {
                state.loading = true;
                state.error = null
            })
            .addCase(loginAUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload === false? null : action.payload
                state.isVerified = action.payload === false ? false: true
            })
            .addCase(loginAUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload 
                state.isVerified = false
                state.user = null
            })
        // storing data

    }
})

export const { logout } = userSlice.actions

export default userSlice.reducer