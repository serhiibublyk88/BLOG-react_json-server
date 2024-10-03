import styled from "styled-components";
import { Icon } from "../../../../../../components";

const CommentContainer = ({ className, id, author, publishedAt, content }) => {
  return (
    <div className={className}>
      <div className="comment">
        <div className="information-panel">
          <div className="author">
            <Icon
              id="fa-user-circle-o"
              size="18px"
              margin="0 10px 0 0"
              onClick={() => {}}
            />
            {author}
          </div>
          <div className="published-at">
            <Icon
              id="fa-calendar-o"
              size="18px"
              margin="0 10px 0 0"
              onClick={() => {}}
            />
            {publishedAt}
          </div>
        </div>
        <div className="comment-text">{content}</div>
      </div>

      <Icon
        id="fa-trash-o"
        size="22px"
        margin="0 0 0 10px"
        onClick={() => {}}
      />
    </div>
  );
};
export const Comment = styled(CommentContainer)`
  display: flex;
  margin-top: 10px;
 

  & .comment {
   width: 100%;
      border: 1px solid black;
      padding:  5px 10px;
    
  & .information-panel {
    display: flex;
    justify-content: space-between;
  }
  & .author,
  & .published-at {
    display: flex;
  }
`;

  
