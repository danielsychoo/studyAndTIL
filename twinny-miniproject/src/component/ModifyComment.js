import React, { useState, useEffect } from "react";
import { useAxios, useOnChange } from "../hooks";
import "../scss/ModifyComment.scss";

const ModifyComment = ({
  comment_id,
  setContentComments,
  commentClickedPage,
  handleModal,
}) => {
  const { axios_getModifyComment, axios_postModifyComment } = useAxios();
  const [modifyCommentData, setModifyCommentData] = useState({});

  useEffect(() => {
    axios_getModifyComment(comment_id, setModifyCommentData);
  }, [comment_id, setModifyCommentData, axios_getModifyComment]);

  const { state, onChange, onReset } = useOnChange(null);

  return (
    <div id="modify-comment-wrapper">
      <textarea
        id="comment-textbox"
        name="comment"
        value={state ? state.comment : modifyCommentData.comment}
        onChange={onChange}
      />
      <button
        onClick={() =>
          axios_postModifyComment(
            comment_id,
            state.comment,
            onReset,
            modifyCommentData.subject_id,
            commentClickedPage,
            setContentComments,
            handleModal
          )
        }
      >
        수정 완료
      </button>
    </div>
  );
};

export default ModifyComment;
