import styled from '@emotion/styled';
import { Common } from 'styles/GlobalStyle';

const Container = styled.div`
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 40px;
  width: 100%;
  height: 100%;
  max-width: 500px;
  overflow: hidden;
  opacity: 1;
  /* display: block; */
  display: none;
  transition: opacity 0.3s, display 0.3s;
`;
const List = styled.div`
  background: white;
  box-shadow: ${Common.shadows.main};
  height: calc(100% - 40px);
  min-height: calc(100vh - 40px);
  width: 200px;
  padding: 0.5rem;
  transform: translateX(0%);
  transition: transform 0.3s;
`;
const Item = styled.div`
  font-weight: ${Common.fonts.Pretendard700};
`;

const Menu = () => {
  return (
    <Container>
      <List>
        <Item>태그</Item>
      </List>
    </Container>
  );
};

export default Menu;
