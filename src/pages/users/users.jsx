import { useEffect, useState } from "react";
import { H2, Content } from "../../components";
import { TableRow, UserRow } from "./components";
import { useServerRequest } from "../../hooks";
import styled from "styled-components";
import { ROLE } from "../../constans";

const UsersContainer = ({ className }) => {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [schouldUpdateUserList, setSchouldUpdateUserList] = useState(false);

  const requestServer = useServerRequest();

  useEffect(() => {
    Promise.all([
      requestServer("fetchUsers"),
      requestServer("fetchRoles"),
    ]).then(([usersRes, rolesRes]) => {
      if (usersRes.error || rolesRes.error) {
        setErrorMessage(usersRes.error || rolesRes.error);
        return;
      }

      setUsers(usersRes.res);
      setRoles(rolesRes.res);
    });
  }, [requestServer, schouldUpdateUserList]);

  const onUserRemove = (userId) => {
    requestServer("removeUser", userId).then(() => {
      
      setSchouldUpdateUserList(!schouldUpdateUserList);
    });
  };

  return (
    <div className={className}>
      <Content error={errorMessage}>
        <H2>Users</H2>
        <div>
          <TableRow>
            <div className="login-column">Login</div>
            <div className="regitered-at-column">Date of registration</div>
            <div className="role-column">Role</div>
          </TableRow>

          {users.map(({ id, login, registeredAt, roleId }) => (
            <UserRow
              key={id}
              id={id}
              login={login}
              registeredAt={registeredAt}
              roleId={roleId}
              roles={roles.filter(({ id: roleId }) => roleId !== ROLE.GUEST)}
              onUserRemove={()=>onUserRemove(id)}
            />
          ))}
        </div>
      </Content>
    </div>
  );
};

export const Users = styled(UsersContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 570px;
  font-size: 18px;
`;
