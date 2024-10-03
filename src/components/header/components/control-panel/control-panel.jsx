import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Icon, Button } from "../../../../components";
import styled from "styled-components";
import { ROLE } from "../../../../constans";
import {
  selectUserRole,
  selectUserLogin,
  selectUserSession,
} from "../../../../selectors";
import { logout } from "../../../../actions";

const RightALigned = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-height: 35px;
`;

const UserName = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const ControlPanelContainer = ({ className }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const roleId = useSelector(selectUserRole);
  const login = useSelector(selectUserLogin);
  const session = useSelector(selectUserSession);

  const onLogout = () => { dispatch(logout(session)); sessionStorage.removeItem("userData"); }


  return (
    <div className={className}>
      <RightALigned>
        {roleId === ROLE.GUEST ? (
          <Button>
            <Link to="/login">Login</Link>
          </Button>
        ) : (
          <>
            <UserName>{login}</UserName>

            <Icon id="fa-sign-out" margin="0 0 0 10px" onClick={onLogout} />
          </>
        )}
      </RightALigned>
      <RightALigned>
        <Icon
          onClick={() => navigate(-1)}
          id="fa-backward"
          margin="10px 0 0 0"
        />

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
