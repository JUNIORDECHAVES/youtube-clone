import {styled} from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.54); 
  padding: 10px 0;
  box-sizing: border-box;
  position: sticky;
  width: calc(100vw - 350px);
  top: 55px;
  /* 
  background-color: #ffffff;
   */

`;

export const ContainerFilterCategory = styled.div`
  display: flex;
  align-items: center;
  /* 
  position: relative;
  width: 100%; */
`;

export const ButtonScroll = styled.button`

`;

export const ScrollContainer = styled.div`

`;

export const CategoryList = styled.ul`
    display: flex;
    width: calc(94vw - 320px);
    list-style: none;
    overflow-x: auto; 
    gap: 20px;

  `;

export const CategoryItem = styled.li<{ isActive: boolean }>`
  flex: 1;
  white-space: nowrap;
  /*
  font-size: 14px;
  margin: 0 8px;
  font-weight: 500;
  cursor: pointer;
  border-radius: 2px;
  background-color: ${(props) => (props.isActive ? '#4f8f96' : 'transparent')};
  color: ${(props) => (props.isActive ? '#ffffff' : '#606060')};
  transition: background-color 0.3s, color 0.3s;
  &:hover {
    background-color: #f1f1f1;
    color: #000000;
  } */
`;
