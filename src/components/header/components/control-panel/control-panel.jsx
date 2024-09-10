
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "../../../../components";
import styled from "styled-components";

const RightALigned = styled.div`
  display: flex;
  justify-content: flex-end;

`;

const StyledLink = styled(Link)`
display: flex;
justify-content: center;
justify-items:center;
  font-size: 18px;
  width: 100px;
  height: 30px;
  border: solid 1px #000;
  background-color: #eee;
`;

const StyledButton = styled.div`
&:hover{
cursor:pointer}`

const ControlPanelContainer = ({ className }) => {
   const navigate = useNavigate();
  return (
    <div className={className}>
      <RightALigned>
        <StyledLink to="/login">Login</StyledLink>
      </RightALigned>
      <RightALigned>
        <StyledButton onClick={() => navigate(-1)}>
          <Icon id="fa-backward" margin="10px 0 0 0" />
        </StyledButton>
        <Link to="/post">
          <Icon id="fa-file-text-o" margin="10px 0 0 16px" />
        </Link>
        <Link to="/users">
          <Icon id="fa-users" margin="10px 0 0 16px" />
        </Link>
      </RightALigned>
    </div>
  );
};
export const ControlPanel = styled(ControlPanelContainer)``;


