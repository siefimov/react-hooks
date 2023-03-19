import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";

export const DivSources = styled.div`
  // width: 100vw;
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin: 50px auto;
`;
export const Li = styled.li`
  list-style: none;
  text-align: center;
  text-decoration: none !important;
  width: 100px;
  padding: 30px 60px;
  // border: 1px solid grey;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    background-color: #87ceeb;
  }
`;

export const Loader = styled(CircularProgress)`
  margin: 60px 45%;
`;
