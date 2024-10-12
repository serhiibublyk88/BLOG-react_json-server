import { Icon, Input } from "../../../../components";
import styled from "styled-components";

const SearchContainer = ({ className }) => {
  return (
    <div className={className}>
      <Input />
      <Icon inactive={true} id="fa-search" margin="0 7px 0 0 " size="18px" />
    </div>
  );
};

export const Search = styled(SearchContainer)`
  display: flex;
  position: relative;
  width: 340px;
  height: 40px;
  margin: 40px auto 0;

  & > input{
   padding: 10px 32px 10px 10px;}

  & > div {
    position: absolute;
    top: 9px;
    right:5px;
    font-size: 21px;
  }
`;
