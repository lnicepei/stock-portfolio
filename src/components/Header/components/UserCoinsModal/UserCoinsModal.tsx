import { StyledUserCoinsModal } from "./style";

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
