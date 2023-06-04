import React from "react";

const MyPageReservationPost = ({ post }) => {
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            {/* 게시글의 기타 정보를 렌더링하는 코드 추가 */}
        </div>
    );
};

export default MyPageReservationPost;
