// 액션 유형
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const FETCH_USER_INFO_REQUEST = "FETCH_USER_INFO_REQUEST";
export const FETCH_USER_INFO_SUCCESS = "FETCH_USER_INFO_SUCCESS";
export const FETCH_USER_INFO_FAILURE = "FETCH_USER_INFO_FAILURE";

export const fetchUserInfoRequest = () => {
    return {
        type: FETCH_USER_INFO_REQUEST,
    };
};

export const fetchUserInfoSuccess = (userInfo) => {
    return {
        type: FETCH_USER_INFO_SUCCESS,
        payload: userInfo,
    };
};

export const fetchUserInfoFailure = (error) => {
    return {
        type: FETCH_USER_INFO_FAILURE,
        payload: error,
    };
};

export const fetchUserInfo = (access_token, user_id) => {
    console.log("In fetchUserInfo: ", user_id);
    return async (dispatch) => {
        dispatch(fetchUserInfoRequest());
        console.log("In fetchUserInfo return: ");
        try {
            // 개인정보를 백엔드에서 가져온다고 가정하고 API 호출
            console.log("i'm trying fetchuserinfo");
            const response = await fetch(
                `http://localhost:8000/users/${user_id}/profile`,
                {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${access_token}`,
                        Accept: "application / json",
                    },
                }
            );
            console.log("is it success?");
            const userInfo = await response.json();
            dispatch(fetchUserInfoSuccess(userInfo));
            console.log("hello userInfo:", userInfo);
        } catch (error) {
            dispatch(fetchUserInfoFailure(error.message));
            console.log("Error in fetchUserInfo:", error);
        }
    };
};

// 액션 생성자 함수
export const loginSuccess = ({ accessToken, user_id }) => {
    return {
        type: LOGIN_SUCCESS,
        payload: { accessToken, user_id },
    };
};

export const logoutSuccess = () => {
    return {
        type: LOGOUT_SUCCESS,
    };
};

/*
액션 유형-로그인 성공, 로그아웃 등을 상수로 정의
액션 생성자 함수를 작성해 액션 객체 생성 타입과 데이터인 payload를 포함
*/
