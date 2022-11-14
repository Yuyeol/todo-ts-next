import styled from '@emotion/styled';
import { Common } from 'styles/GlobalStyle';
import { FaBars, FaPlus } from 'react-icons/fa';
import { useRouter } from 'next/router';

const BlankBox = styled.div`
  height: 40px;
`;
const Container = styled.div`
  background: white;
  width: 100%;
  max-width: 500px;
  box-shadow: ${Common.shadows.main};
  padding: 0.5rem 1rem;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const IconWrapper = styled.div``;

const Title = styled.div`
  font-family: ${Common.fonts.Pretendard700};
`;

const Header = () => {
  const router = useRouter();
  return (
    <>
      <BlankBox />
      <Container>
        <IconWrapper>
          <FaBars />
        </IconWrapper>
        <Title>TODO LIST</Title>
        <IconWrapper>
          <FaPlus onClick={() => router.push('/create')} />
        </IconWrapper>
      </Container>
    </>
  );
};

export default Header;
