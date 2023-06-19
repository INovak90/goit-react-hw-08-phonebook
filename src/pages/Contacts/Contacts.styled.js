import styled from 'styled-components';

export const ListContacts = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 60px;
  gap: 10px;
  margin-top: 10px;
`;
export const ListItem = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;
  border: 2px solid gray;
  border-radius: 10px;
  padding: 10px;
`;
export const Delete = styled.button`
  font-size: 14px;
  background-color: white;
  border: 2px solid grey;
  border-radius: 5px;
  padding: 2px 10px;
  &:hover {
    cursor: pointer;
    background-color: orange;
  }
`;
export const Text = styled.p`
  color: white;
  display: flex;
  gap: 5px;
  align-items: center;
`;
export const Section = styled.section`
  padding-left: 80px;
`;
