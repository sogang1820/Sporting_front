import { combineReducers } from "redux";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
    auth: authReducer,
});

export default rootReducer;
/*
combineReducers 함수를 사용하여 여러 개의 리듀서를 결합
authReducer를 포함하는 rootReducer를 생성
*/
