import styled from "styled-components";
import UserCoinsModal from "../UserCoinsModal/UserCoinsModal";

const StyledModalToggle = styled.div`
  align-items: flex-start;
  z-index: 2;
  height: auto;
  cursor: pointer;
`;

type Props = {
  toggleModal: (e: React.SyntheticEvent) => void;
  userCoins: React.ReactNode;
  isModalOpen: boolean;
};

const ModalToggle: React.FC<Props> = ({
  toggleModal,
  userCoins,
  isModalOpen,
}) => {
  return (
    <>
      <StyledModalToggle onClick={toggleModal}>
        <svg width={24} viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M10,2H14A2,2 0 0,1 16,4V6H20A2,2 0 0,1 22,8V19A2,2 0 0,1 20,21H4C2.89,21 2,20.1 2,19V8C2,6.89 2.89,6 4,6H8V4C8,2.89 8.89,2 10,2M14,6V4H10V6H14Z"
          />
        </svg>
      </StyledModalToggle>
      {isModalOpen && (
        <UserCoinsModal toggleModal={toggleModal}>{userCoins}</UserCoinsModal>
      )}
    </>
  );
};

export default ModalToggle;
