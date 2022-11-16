import UserCoinsModal from "../UserCoinsModal/UserCoinsModal";
import { StyledModalToggle } from "./style";

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
          {isModalOpen ? (
            <path
              fill="currentColor"
              d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
            />
          ) : (
            <path
              fill="currentColor"
              d="M10,2H14A2,2 0 0,1 16,4V6H20A2,2 0 0,1 22,8V19A2,2 0 0,1 20,21H4C2.89,21 2,20.1 2,19V8C2,6.89 2.89,6 4,6H8V4C8,2.89 8.89,2 10,2M14,6V4H10V6H14Z"
            />
          )}
        </svg>
      </StyledModalToggle>
      {isModalOpen && (
        <UserCoinsModal toggleModal={toggleModal}>{userCoins}</UserCoinsModal>
      )}
    </>
  );
};

export default ModalToggle;
