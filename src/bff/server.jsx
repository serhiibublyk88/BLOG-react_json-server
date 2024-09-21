import {
  authorize,
  logout,
  fetchUsers,
  fetchRoles,
  register,
  updateUserRole,
  removeUser,
} from "./operations";

export const server = {
  authorize,
  logout,
  register,
  fetchUsers,
  fetchRoles,
  updateUserRole,
  removeUser,
};
