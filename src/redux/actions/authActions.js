// 액션 유형
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

// 액션 생성자 함수
export const loginSuccess = (user) => {
    return {
        type: LOGIN_SUCCESS,
        payload: user,
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