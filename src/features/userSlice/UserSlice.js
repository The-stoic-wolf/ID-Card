import { createSlice} from "@reduxjs/toolkit";

const initialState ={
    Name : '',
    FatherName : '',
    CNICNo : '',
    DOB : '',
    Gender : '',
    Address : '',
    Issue : '',
    Expiry : ''
}

export const UserSlice = createSlice({
   name : 'user',
   initialState,
   reducers :{
    SetUserName :(state ,action) =>{
      state.Name = action.payload ;
    },
    SetUserFatherName :(state ,action) =>{
      state.FatherName = action.payload
    },
    SetUserCnic :(state ,action) =>{
      state.CNICNo = action.payload
    },
    SetUserDob :(state ,action) =>{
      state.DOB = action.payload
    },
    SetUserGender :(state ,action) =>{
     state.Gender = action.payload
    },
    SetUserAddress :(state ,action) =>{
     state.Address = action.payload
    },
    SetUserIssue :(state ,action) =>{
     state.Issue = action.payload
    },
    SetUserExpiry :(state ,action) =>{
     state.Expiry = action.payload
    }
   }
})

export const {SetUserName ,SetUserFatherName ,SetUserCnic ,SetUserDob ,SetUserGender ,SetUserAddress ,SetUserIssue ,SetUserExpiry} = UserSlice.actions
export default UserSlice.reducer

