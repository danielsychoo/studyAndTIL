import { useCallback } from "react";
import Swal from "sweetalert2";

const useSwal = () => {
  const swal_emptyInput = useCallback(() => {
    Swal.fire({
      icon: "error",
      title: "빈칸이 존재합니다.",
      text: "모든 칸을 채워주세요.",
    });
  }, []);

  const swal_wrongPassword = useCallback(() => {
    Swal.fire({
      icon: "error",
      title: "비밀번호가 동일하지 않습니다.",
      text: "비밀번호를 확인하세요.",
    });
  }, []);

  const swal_wrongEmail = useCallback(() => {
    Swal.fire({
      icon: "error",
      title: "잘못된 이메일 형식입니다.",
      text: "이메일을 확인하세요.",
    });
  }, []);

  const swal_existId = useCallback(() => {
    Swal.fire({
      icon: "error",
      title: "이미 존재하는 ID 입니다.",
      text: "다른 ID를 선택하세요.",
    });
  }, []);

  const swal_loginWrongInfo = useCallback(() => {
    Swal.fire({
      icon: "error",
      title: "정보가 틀립니다.",
      text: "아이디와 비밀번호를 확인하세요.",
    });
  }, []);

  const swal_loginToWrite = useCallback(() => {
    Swal.fire({
      icon: "error",
      title: "로그인 하세요.",
      text: "로그인 후 작성할 수 있습니다.",
    });
  }, []);

  const swal_loginToRead = useCallback(() => {
    Swal.fire({
      icon: "error",
      title: "로그인 하세요.",
      text: "로그인 후 글을 읽을 수 있습니다.",
    });
  }, []);

  const swal_subjectIsBlank = useCallback((subjectInputDOM) => {
    Swal.fire({
      icon: "error",
      title: "제목이 비어있습니다.",
      text: "제목을 채워주세요.",
      didClose: () => {
        subjectInputDOM.focus();
      },
    });
  }, []);

  const swal_contentIsBlank = useCallback((contentInputDOM) => {
    Swal.fire({
      icon: "error",
      title: "본문이 비어있습니다.",
      text: "본문을 채워주세요.",
      didClose: () => {
        contentInputDOM.focus();
      },
    });
  }, []);

  const swal_youAreNotWriter = useCallback(() => {
    Swal.fire({
      icon: "error",
      title: "지울 수 없습니다.",
      text: "자신이 쓴 글만 지울 수 있습니다.",
    });
  }, []);

  const swal_youCantModifyContent = useCallback(() => {
    Swal.fire({
      icon: "error",
      title: "수정할 수 없습니다.",
      text: "자신이 쓴 글만 수정할 수 있습니다.",
    });
  }, []);
  const swal_didntChangeComment = useCallback(() => {
    Swal.fire({
      icon: "error",
      title: "변경사항이 없습니다.",
    });
  }, []);

  const swal_commentIsBlank = useCallback((commentInputDOM) => {
    Swal.fire({
      icon: "error",
      title: "댓글 내용이 없습니다.",
      text: "댓글 내용을 입력하세요.",
      didClose: () => {
        commentInputDOM.focus();
      },
    });
  }, []);

  const swal_alertItsFirstPage = useCallback(() => {
    Swal.fire({
      icon: "error",
      title: "첫 페이지 입니다.",
    });
  }, []);

  const swal_alertItsLastPage = useCallback(() => {
    Swal.fire({
      icon: "error",
      title: "마지막 페이지 입니다.",
    });
  }, []);

  return {
    swal_emptyInput,
    swal_wrongPassword,
    swal_wrongEmail,
    swal_existId,
    swal_loginWrongInfo,
    swal_loginToWrite,
    swal_loginToRead,
    swal_subjectIsBlank,
    swal_contentIsBlank,
    swal_youAreNotWriter,
    swal_youCantModifyContent,
    swal_didntChangeComment,
    swal_commentIsBlank,
    swal_alertItsFirstPage,
    swal_alertItsLastPage,
  };
};

export default useSwal;
