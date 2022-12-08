import React from 'react'
import * as S from './styles';

export default function Input({value, onChange}) {
  return (
    <S.InputContainer>
        <input value={value} onChange={onChange} placeholder="users/repoName"/>
    </S.InputContainer>
  );
};
