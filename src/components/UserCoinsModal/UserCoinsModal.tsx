import styled from "styled-components";

const StyledUserCoinsModal = styled.div`
  position: absolute;
  top: 10vh;
  right: 0;
  box-sizing: border-box;
  max-height: 50vh;
  width: max(20vw, 200px);
  overflow-y: scroll;
  background-color: black;
  z-index: 2;
`;

type Props = {
  children: React.ReactNode;
  toggleModal: (e: React.SyntheticEvent) => void;
};

const UserCoinsModal: React.FC<Props> = ({ children, toggleModal }) => {
  return (
    <StyledUserCoinsModal onClick={toggleModal}>
      {children}
    </StyledUserCoinsModal>
  );
};

export default UserCoinsModal;
