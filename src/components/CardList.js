import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from ".././actions/index";
import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const yes = {
  float:"right",
  margin:"20px",
  backgroundColor:"#1c8bf3",
  color:"white"
};

const no = {
  float:"right",
  margin:"20px",
};

const CardList = () => {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.selectedUsers);
  const [open, setOpen] = React.useState(false);
  const [selectedID, setSelectedID] = useState();

  const handleOpen = (id) => {
    setSelectedID(id);
    setOpen(true);
  };

  const handleOnConfirmation = (id) => {
    dispatch(deleteUser(id));
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="flex-container">
      {selected.map((item) => {
        const idToDelete = item.id;
        return (
          <div className="card" key={item.id}>
            <div className="x-button">
              <Button onClick={() => handleOpen(idToDelete)}>X</Button>
            </div>
            <h2>{item.name}</h2>
            <div>
              <p>
                <strong>Email: </strong>
                {item.email}
              </p>
            </div>
            <div>
              <p>
                <strong>Address: </strong>
                {item.address.street},
                <br />
                {item.address.city}
              </p>
            </div>
            <div>
              <p>
                <strong>Phone: </strong>
                {item.phone}
              </p>
            </div>
            <div>
              <p>
                <strong>Company: </strong>
                {item.company.name}
              </p>
            </div>
            <a href={item.website} target="_blank">{item.website}</a>
          </div>
        );
      })}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          Do you want to delete this user?
          </Typography>
          <Button
          style={yes}
            onClick={() => {
              handleOnConfirmation(selectedID);
            }}
          >
            Yes, delete it
          </Button>
          <Button
            style={no}
            onClick={() => {
              handleClose();
            }}
          >
            No
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default CardList;
