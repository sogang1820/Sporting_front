import {
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    FETCH_USER_INFO_REQUEST,
    FETCH_USER_INFO_SUCCESS,
    FETCH_USER_INFO_FAILURE,
} from "../actions/authActions";

// 초기 상태
const initialState = {
    isLoggedIn: false,
    user: {
        accessToken: "",
        user_id: "",
        userInfo: null,
    },
    isFetchingUserInfo: false,
    userInfoError: null,
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
                    user_id: action.payload.user_id,
                    userInfo: action.payload.userInfo,
                },
            };
        case LOGOUT_SUCCESS:
            return {
                ...state,
                isLoggedIn: false,
                user: {
                    accessToken: "",
                    username: "",
                    userInfo: null, // 로그아웃 시 개인정보 초기화
                },
            };
        case FETCH_USER_INFO_REQUEST:
            return {
                ...state,
                isFetchingUserInfo: true,
                userInfoError: null,
            };
        case FETCH_USER_INFO_SUCCESS:
            console.log("userInfo-reducer: ", action.payload);
            return {
                ...state,
                isFetchingUserInfo: false,
                user: {
                    ...state.user,
                    userInfo: action.payload, // 받아온 개인정보로 상태 업데이트
                },
            };
        case FETCH_USER_INFO_FAILURE:
            return {
                ...state,
                isFetchingUserInfo: false,
                userInfoError: action.payload,
            };
        default:
            return state;
    }
};

export default authReducer;

/* 초기 상태를 정의하고 로그인 상태와 사용자 정보를 포함
리듀서 함수를 작성 리듀서는 현재 상태와 액션을 받아 새로운 상태를 반환하는 함수 스위치문 사용해 액션 유형(authActions)에 따라 상태 변경
*/
