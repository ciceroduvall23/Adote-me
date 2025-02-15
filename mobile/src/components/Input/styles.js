import styled from "styled-components/native";

export const SimpleInput = styled.View`
  padding-top: 45;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "rgba(255,0,0)",
})`
  width: 439px;
  font-size: 17px;
  margin-bottom: 15px;
  padding: 20px;
  border-radius: 10px;
  border: black;
  position: relative;
`;
export const ButtonLogin = styled.TouchableOpacity`
  position: absolute;
  width: 308px;
  height: 53px;
  flex-direction: row;
  max-height: 100px;
  left: 65px;
  border-radius: 8;
  align-items: center;
  justify-content: center;
  background-color: #723d2b;
  top: 230px;
`;

export const ButtonGmail = styled.TouchableOpacity`
  width: 308px;
  height: 53px;
  flex-direction: row;
  position: relative;
  max-height: 100px;
  left: 65px;
  border-radius: 8;
  align-items: center;
  justify-content: center;
  background-color: #723d2b;
  top: 80px;
`;
export const ButonRegister = styled.TouchableOpacity`
  width: 308px;
  height: 53px;
  flex-direction: row;
  position: relative;
  max-height: 100px;
  left: 65px;
  border-radius: 8;
  align-items: center;
  justify-content: center;
  background-color: #723d2b;
  top: 95px;
`;



export const ButtonText = styled.Text`
  font-size: 20px;
  color: ${(props) => props.color};
  font-style: italic;
`;
export const TextFooter = styled.Text`
  font-size: 20px;
  top:300px;
  text-align:center;
  color: ${(props) => props.color};
  font-style: italic;
`;