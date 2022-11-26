import styled from "styled-components";

interface flexProps {
  orientaion?: String;
  jusitfy?: String;
}

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;
export const HiddenDiv=styled.div`display: flex;
flex-direction: ${(p: flexProps) => (p.orientaion ? "column" : "row")};
justify-content: center;
align-items: center;
height: 100%;
width: 100%;
@media (max-width: 768px) {
    display:none;
  }`
export const InsideDiv = styled.div<flexProps>`
  display: flex;
  flex-direction: ${(p: flexProps) => (p.orientaion ? "column" : "row")};
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const StyledImg = styled.img`
  width: 543.22px;
  height: 633.6px;
  
`;

export const StyledH1 = styled.h1``;
export const StyledInput = styled.input`
  border: 1px solid rgba(4, 7, 47, 0.4);
  border-radius: 8px;
  width: 70%;
  height: 30px;
  margin: 0px 0px 15px 0px;
  color: #737b86;
  padding: 0px 10px;
`;
export const InputDiv = styled.div``;
export const StyledButton = styled.button`
  background: #1575a7;
  border-radius: 8px;
  height: 36px;
  width: 60%;
  color: #ffffff;
  margin:20px 0px;
`;
export const StyledText = styled.h3`
  margin: 10px 0px 5px 0px;
  align-self: flex-start;
  margin-left: 15%;
  font-size: 18px;
`;

export const NormalDiv = styled.div<flexProps>`
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  width:70%;
  margin:8px 0px;
`;

export const NormalText = styled.span``;
export const NormalTextOrange = styled.span`color: #F78719;`;
