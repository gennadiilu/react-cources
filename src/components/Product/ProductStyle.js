import styled from 'styled-components';

const ProductStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border: 1px solid ${({ theme }) => theme.borderColor};

  @media {
  }
`;

export default ProductStyle;
