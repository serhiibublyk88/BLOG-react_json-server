import { useEffect, useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { Link,Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { server } from "../../bff";
import { Button, H2, Input } from "../../components";
import { setUser } from "../../actions";
import { selectUserRole} from '../../selectors'
import { ROLE } from "../../constans";


import styled from "styled-components";

const authFormSchema = yup.object().shape({
  login: yup
    .string()
    .required("Enter Login")
    .matches(
      /^\w+$/,
      "Login is incorrect- only letters and numbers are allowed."
    )
    .min(3, "Login is incorrect- min 3 characters")
    .max(15, "Login is incorrect- max 15 characters"),

  password: yup
    .string()
    .required("Enter Password")
    .matches(
      /^[\w#%]+$/,
      "Password is incorrect-letters, numbers and #% signs are allowed."
    )
    .min(4, "Password is incorrect- min 4 characters")
    .max(15, "Password is incorrect- max 15 characters"),
});

const StyledLink = styled(Link)`
  text-align: center;
  text-decoration: underline;
  margin: 20px 0;
  font-size: 18px;
`;
const Errormesage = styled.div`
  background-color: #fcadad;
  font-size: 18px;
  margin: 10px 0 0;
  padding: 10px;
`;

const AuthorizationContainer = ({ className }) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: "",
      password: "",
    },
    resolver: yupResolver(authFormSchema),
  });

  const [serverError, setServerError] = useState(null);

  const dispatch = useDispatch();
  const store = useStore();

  const roleId = useSelector(selectUserRole);

  useEffect(() => {
    let currentWasLogout = store.getState().app.wasLogout;

    return store.subscribe(() => {
      let previosWasLogout = currentWasLogout;
      currentWasLogout = store.getState().app.wasLogout;

      if (currentWasLogout !== previosWasLogout) {
        reset();
      }
    });
  }, [reset,store]);

  const onSubmit = ({ login, password }) => {
    server.authorize(login, password).then(({ error, res }) => {
      if (error) {
        setServerError(`Request error: ${error}`);
        return;
      }
      dispatch(setUser(res));
    });
  };

  const formError = errors?.login?.message || errors?.password?.message;
  const errorMessage = formError || serverError;


  if(roleId !== ROLE.GUEST){
    return <Navigate to="/"/> 
  }

  return (
    <div className={className}>
      <H2>Authorization</H2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          placeholder="Login..."
          {...register("login", {
            onChange: () => setServerError(null),
          })}
        />
        <Input
          type="password"
          placeholder="Password..."
          {...register("password", {
            onChange: () => setServerError(null),
          })}
        />
        <Button type="submit" disabled={!!formError}>
          Log In
        </Button>
        {errorMessage && <Errormesage>{errorMessage}</Errormesage>}
        <StyledLink to="/register">Registration </StyledLink>
      </form>
    </div>
  );
};

export const Authorization = styled(AuthorizationContainer)`
  display: flex;
  align-items: center;
  flex-direction: column;
  & > form {
    display: flex;
    flex-direction: column;
    width: 260px;
  }
`;