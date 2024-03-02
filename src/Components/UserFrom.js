import { Grid, TextField, Button, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const fromStyle = {
  border: "1px solid gray",
  padding: "40px",
  margin: "10px",
  height: "fit-content",
};

const UserFrom = () => {
  const [unsavedChanges, setUnsavedChanges] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userId: Math.floor(Math.random() * 1000),
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    setUnsavedChanges(true);
  };

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (unsavedChanges) {
        const confirmationMessage =
          "You have unsaved changes or error. Are you sure you want to leave?";
        e.returnValue = confirmationMessage; // Standard way
        return confirmationMessage; // For legacy browsers
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [unsavedChanges]);

  const handleSubmit = (event) => {
    event.preventDefault();
    let existingData = JSON.parse(localStorage.getItem("userData"));
    if (!Array.isArray(existingData)) {
      existingData = [];
    }
    const newData = [...existingData, formData];
    localStorage.setItem("userData", JSON.stringify(newData));
    alert(`Dear ${formData.name}, Details submitted successfully✨✨`);
    setUnsavedChanges(false);
    setFormData({ name: "", email: "", phone: "", address: "" });
    navigate("/viewUserDeatls");
  };

  return (
    <>
      <div style={{ ...fromStyle }}>
        <form onSubmit={handleSubmit}>
          <Grid container direction={"column"} spacing={3}>
            <Grid item>
              <Typography variant="h6">User Data Form</Typography>
            </Grid>
            <Grid item>
              <TextField
                size="small"
                name="name"
                label="Enter Name"
                variant="outlined"
                value={formData.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item>
              <TextField
                size="small"
                name="email"
                label="Enter Email"
                variant="outlined"
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item>
              <TextField
                size="small"
                name="phone"
                label="Enter Phone"
                variant="outlined"
                value={formData.phone}
                onChange={handleChange}
              />
            </Grid>
            <Grid item>
              <TextField
                size="small"
                name="address"
                label="Enter Address"
                variant="outlined"
                value={formData.address}
                onChange={handleChange}
              />
            </Grid>
            <Grid item>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={formData.name === ""}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </>
  );
};

export default UserFrom;
