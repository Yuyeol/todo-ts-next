import styled from '@emotion/styled';

interface Props {
  children: React.ReactNode;
}
const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 500px;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const Layout = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default Layout;
