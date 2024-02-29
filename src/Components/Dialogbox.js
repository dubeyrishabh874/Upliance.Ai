import React from "react";
import {
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

export const Dialogbox = ({
  handleCloseDialog,
  handleConfirmLeave,
  unsavedChanges,
}) => {
  return (
    <Dialog open={unsavedChanges} onClose={handleCloseDialog}>
      <DialogTitle>Unsaved Changes</DialogTitle>
      <DialogContent>
        <Typography>
          There are unsaved changes in the form. Do you want to leave without
          saving?
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseDialog} color="primary">
          Cancel
        </Button>
        <Button onClick={handleConfirmLeave} color="primary" autoFocus>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};
