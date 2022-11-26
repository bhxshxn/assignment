import "./App.css";
import {
  Div,
  InsideDiv,
  StyledH1,
  StyledImg,
  StyledButton,
  StyledInput,
  StyledText,
  NormalDiv,
  NormalText,
  NormalTextOrange,
  HiddenDiv
} from "./styles/allStyles";
import pathImage from "./styles/assests/Group 3608.png";

function App() {
  return (
    <>
      <Div>
        <HiddenDiv>
          <StyledImg src={pathImage} alt="lol" />
        </HiddenDiv>
        <InsideDiv orientaion="column">
          <StyledH1>Login</StyledH1>
          <StyledText>Login ID</StyledText>
          <StyledInput placeholder="Enter Login ID"></StyledInput>
          <StyledText>Password</StyledText>
          <StyledInput placeholder="Enter Password"></StyledInput>
          <NormalDiv>
            <div>
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <NormalText>Remember Me</NormalText>
            </div>
            <NormalTextOrange>Change Password</NormalTextOrange>
          </NormalDiv>
          <NormalDiv><div><NormalText>Agree to </NormalText><NormalTextOrange>Terms & Conditions</NormalTextOrange></div></NormalDiv>
          <StyledButton>Login</StyledButton>
          <div><NormalText>Don’t have an account?</NormalText><NormalTextOrange>Register Here</NormalTextOrange></div>
        </InsideDiv>
      </Div>
    </>
  );
}

export default App;
