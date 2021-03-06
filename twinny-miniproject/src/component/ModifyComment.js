import React, { useState, useEffect, useRef } from "react";
import { useAxios, useOnChange, useSwal } from "../hooks";
import "../scss/ModifyComment.scss";

const ModifyComment = ({
  comment_id,
  setContentComments,
  commentClickedPage,
  handleModal,
  setIsLoading,
}) => {
  const { axios_getModifyComment, axios_postModifyComment } = useAxios();
  const [modifyCommentData, setModifyCommentData] = useState({});
  const { swal_didntChangeComment } = useSwal();

  useEffect(() => {
    axios_getModifyComment(comment_id, setModifyCommentData);
  }, [comment_id, setModifyCommentData, axios_getModifyComment]);

  const { state, onChange, onReset } = useOnChange(null);

  const commentInputDOM = useRef();

  return (
    <div id="modify-comment-wrapper">
      <textarea
        id="comment-textbox"
        name="comment"
        value={state ? state.comment : modifyCommentData.comment}
        onChange={onChange}
        ref={commentInputDOM}
      />
      <div id="modify-btn-wrapper">
        <button onClick={handleModal}>수정 취소</button>
        <button
          onClick={
            state === null
              ? () => swal_didntChangeComment()
              : () =>
                  axios_postModifyComment(
                    comment_id,
                    state.comment,
                    onReset,
                    modifyCommentData.subject_id,
                    commentClickedPage,
                    setContentComments,
                    handleModal,
                    commentInputDOM.current,
                    setIsLoading
                  )
          }
        >
          수정 완료
        </button>
      </div>
    </div>
  );
};

export default ModifyComment;
