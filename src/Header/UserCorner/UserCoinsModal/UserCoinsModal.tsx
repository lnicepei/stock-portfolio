import styled from "styled-components";

const StyledUserCoinsModal = styled.div`
  position: absolute;
  top: 10vh;
  right: 50px;
  z-index: 2;
  color: black;
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
