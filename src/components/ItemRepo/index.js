import React from 'react'
import Trash from '../../assets/trash-can.png'
import * as S from './styles';

export default function ItemRepo({repo, handleRemoveRepo}) {

  const handleRemove = () => {
    handleRemoveRepo(repo.id)
  }

  return (
    <S.ItemContainer >
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <S.BtnBox>
          <button>
            <a href={repo.html_url} rel="noreferrer" target="_blank">Repositório</a>
          </button>
          <button onClick={handleRemove} className="remover">
            <img src={Trash} alt="Delete" title="Delete" />
          </button>
        </S.BtnBox>
        <hr />
    </S.ItemContainer>
  )
};
