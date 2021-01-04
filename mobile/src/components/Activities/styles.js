import styled from 'styled-components/native'

export const Container = styled.View`
    margin-top:22px;   
    padding: 0 16px; 
`;

export const Header = styled.View`
    height:20px;
    justify-content:center;
`;

export const Title = styled.Text`
    color:#fff;
    font-size:14px;
    font-weight:bold;
`;

export const Card = styled.View`
    background:#1e222b;
    border-radius:8px;
    margin-top:20px;
    padding:15px;
`;
export const CardHeader = styled.View`
  flex-direction:row;
  align-items:center;  
`;
export const Avatar = styled.Image`

`;
export const Description = styled.Text`
    color:#fff;
    font-size:14px;
    margin-left:15px;
    font-weight:300;
`;
export const Bold = styled.Text`
    font-weight:bold;
`;
export const CardBody = styled.View`
    margin-top:10px;
`; 
export const UserName = styled.Text`
    color:#fff;
    font-size:17px;
`;

export const CardFooter = styled.View`
    margin-top:10px;
    flex-direction:row;
    justify-content:space-between;
`;

export const Details = styled.View`
    flex-direction:row;
    align-items:center;
`;

export const Value = styled.Text`
    color:#f75175;
    font-size:12px;
    font-weight:bold;
`;

export const Divider = styled.View`
    width:2px;
    height:15px;
    background:#ffffff99;
    margin:0 19px;
`;
export const Date = styled.Text`
    color:#fff;
    margin-left:5px;
`;
export const Actions = styled.View`
    flex-direction:row;

`;

export const Option = styled.TouchableOpacity`
margin-left:15px;
flex-direction:row;
align-items:center;
`;

export const OptionLabel = styled.Text`
    color:#fff;
    font-size:16px;
    margin-left:5px;
`;
