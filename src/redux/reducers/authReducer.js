import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../actions/authActions";

// 초기 상태
const initialState = {
    isLoggedIn: false,
    user: {
        accessToken: "",
        username: "",
    },
};

// 리듀서 함수
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                user: {
                    accessToken: action.payload.accessToken,
                    username: action.payload.username,
                },
            };
        case LOGOUT_SUCCESS:
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            };
        default:
            return state;
    }
};

export default authReducer;

/* 초기 상태를 정의하고 로그인 상태와 사용자 정보를 포함
리듀서 함수를 작성 리듀서는 현재 상태와 액션을 받아 새로운 상태를 반환하는 함수 스위치문 사용해 액션 유형(authActions)에 따라 상태 변경
*/
