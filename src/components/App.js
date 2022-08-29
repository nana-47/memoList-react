import { useCallback, useState } from 'react';
import styled from 'styled-components';
import { MemoList } from './MemoList';

export const App = () => {
  
  const [text, setText] = useState("");
  const [memos, setMemos] = useState([]);

  const onChangeText = (e) => setText(e.target.value);

  const onClickAdd = () => {
    const newMemos = [...memos];
    newMemos.push(text);
    setMemos(newMemos);
    setText("");
  };

  const onClickDelete = useCallback((index) => {
    const newMemos = [...memos];
    newMemos.splice(index, 1);
    setMemos(newMemos);
  }, [memos]);

  return (
    <div>
      <h1>簡単メモアプリ</h1>
      <input type="text" value={text} onChange={onChangeText} />
      <SButton onClick={onClickAdd}>追加</SButton>
      <MemoList memos={memos} onClickDelete={onClickDelete} />
    </div>
  );
};

const SButton = styled.button`
  margin-left: 16px;
`;
