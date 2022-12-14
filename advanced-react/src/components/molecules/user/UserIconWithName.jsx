import { memo, useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '../../providers/UserProvider';
import { useRecoilValue } from 'recoil';
import { userState } from '../../../store/userState';

export const UserIconWithName = memo((props) => {
  console.log('UserIconWithName');
  const { image, name } = props;
  // const { userInfo } = useContext(UserContext);
  const userInfo = useRecoilValue(userState);
  const isAdmin = userInfo ? userInfo.isAdmin : false;

  return (
    <SContainer>
      <SImg src={image} alt={name} width={160} height={160}/>
      <SName>{name}</SName>
      {isAdmin && <SEdit>編集</SEdit>}
    </SContainer>
  );
});

const SContainer = styled.div`
  text-align: center;
`;

const SImg = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
`;

const SEdit = styled.span`
  cursor: pointer;
  color: #aaa;
  text-decoration: underline;
`;
