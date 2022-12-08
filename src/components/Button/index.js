import React from 'react'
import * as S from './styles';

export default function Button({onClick}) {
  return (
    <S.ButtonContainer onClick={onClick}>
       Buscar
    </S.ButtonContainer>
  );
};
