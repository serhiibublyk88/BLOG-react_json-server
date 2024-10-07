import { useCallback } from "react";
import { selectUserSession } from "../selectors";
import { server } from "../bff";
import { useSelector } from "react-redux";

export const useServerRequest = () => {
  const session = useSelector(selectUserSession);

  return useCallback((operation, ...params) => {
    const request = ["register", "authorize", "fetchPost"].includes(operation)
      ? params
      : [session, ...params];

    return server[operation](...request);
  },[session]);
}; 