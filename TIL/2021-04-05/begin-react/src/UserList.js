import React from 'react';

// 각각의 User component
const User = React.memo(({ user, onRemove, onToggle }) => {
  // useEffect(() => {
  //   console.log('user 값이 설정됨');
  //   console.log(user);
  //   return () => {
  //     console.log('user 가 바뀌기 전..');
  //     console.log(user);
  //   }
  // }, [user]);

  return (
    <div>
      <b
        style={{
          cursor: 'pointer',
          color: user.active
            ? 'green'
            : 'black'
          }}
        onClick={() => onToggle(user.id)}
      >{ user.username }</b> <span>({ user.email })</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
});

// User component를 묶어주는 component
const UserList = ({ users, onRemove, onToggle }) => {
  return (
    <div>
      {users.map(user => (
        <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />
      ))}
    </div>
  );
};

export default React.memo(UserList);