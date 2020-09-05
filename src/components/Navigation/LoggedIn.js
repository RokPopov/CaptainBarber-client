import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/user/actions";
import Button from "react-bootstrap/Button";
import { selectUser } from "../../store/user/selectors";
import Nav from "react-bootstrap/Nav";

export default function LoggedIn() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <>
      <Nav.Item style={{ padding: ".5rem 1rem" }}>{user.email}</Nav.Item>
      <Button
        onClick={() => dispatch(logOut())}
        style={{
          backgroundColor: "#495057",
          borderColor: "#495057",
          textShadow: "1px 1px 3px #000000",
        }}
      >
        Logout
      </Button>
    </>
  );
}
