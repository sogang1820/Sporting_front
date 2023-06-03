import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

const store = configureStore({
    reducer: rootReducer,
});

export default store;

/*Redux의 createStore함수로 스토어 생성, 루트 리듀서로 인자 전달해 스토어 생성 */
/* 스토어는 state를 보유하고 액션을 디스패치하고 리듀서를 통해 상태를 업데이트하는 객체로 스토어는 단일한 전역 상태를 관리하며, Redux 애플리케이션에서 중앙 데이터 저장소 역할*/
