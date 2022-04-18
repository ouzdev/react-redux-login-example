//Slice redux mantıksal ifadelerimizi oluşturmak için kullanılır.
//Bir slice nesnesi Redux Store'ının bir parçasıdır. Key/Value kısmını ifade eder.
import { createSlice } from '@reduxjs/toolkit';
export const loginSlices = createSlice({
    name: "user",
    initialState: {

        user: null
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        },
    },
});

//Slice ile actionlar otomatik olarak oluşturulur.
export const { login, logout } = loginSlices.actions;

export const selectUser = state => state.user.user;
export default loginSlices.reducer;