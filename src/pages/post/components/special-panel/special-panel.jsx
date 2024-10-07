import { useDispatch } from "react-redux";
import { CLOSE_MODAL, openModal, removePostAsync } from "../../../../actions";
import { Icon } from "../../../../components";
import { useServerRequest } from "../../../../hooks";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

const SpecialPanelContainer = ({ className, id, publishedAt, editButton }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const requestServer = useServerRequest();

  const onPostRemove = (id) => {
    dispatch(
      openModal({
        text: "Delete the post?",
        onConfirm: () => {
          dispatch(removePostAsync(requestServer, id)).then(() => {
            navigate("/");
          });
          dispatch(CLOSE_MODAL);
        },
        onCencel: () => dispatch(CLOSE_MODAL),
      })
    );
  };
  return (
    <div className={className}>
      <div className="published-at">
        {publishedAt && (
          <Icon
            inactive={true}
            id="fa-calendar-o"
            margin="0 7px 0 0 "
            size="18px"
          />
        )}
        {publishedAt}
      </div>
      <div className="buttons">
        {editButton}
        {publishedAt && (
          <Icon
            id="fa-trash-o"
            size="22px"
            margin="0 0 0 7px"
            onClick={() => onPostRemove(id)}
          />
        )}
      </div>
    </div>
  );
};

export const SpecialPanel = styled(SpecialPanelContainer)`
  display: flex;
  justify-content: space-between;
  margin: ${({ margin }) => margin};

  & .published-at {
    display: flex;
    align-items: end;
  }

  & .buttons {
    display: flex;
  }
`;
