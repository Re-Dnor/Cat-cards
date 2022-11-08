import { Box, Typography, Modal } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { closeModal, selectModal } from "./slice/modal-slice";
import { BASE_URL } from "../../utils/constants";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};

function BasicModal() {
  const dispatch = useDispatch<AppDispatch>();
  const showModal = useSelector(selectModal);
  const URL = `${BASE_URL}/cat?width=350&height=350`;

  return (
    <div>
      <Modal
        open={showModal}
        onClose={() => dispatch(closeModal())}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Hello
          </Typography>
          <img src={URL}/>
        </Box>
      </Modal>
    </div>
  );
}

export default BasicModal;