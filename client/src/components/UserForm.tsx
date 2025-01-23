import { Button, Container, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { createUser, getUser, updateUser } from "../api/users.api";

import Grid from "@mui/material/Grid2";
import { User } from "../types/user.types";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { userSchema } from "../utils/userSchema";
import { yupResolver } from "@hookform/resolvers/yup";

interface UserFormProps {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

type UserFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
};

const defaultUserFormValues: UserFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
};

const UserForm = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id?: string }>();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<UserFormProps>({
    resolver: yupResolver(userSchema),
    defaultValues: defaultUserFormValues,
  });

  useEffect(() => {
    if (id) {
      getUser(id)
        .then((userData: UserFormProps) => {
          reset(userData);
        })
        .catch(() => {
          toast.error("Failed to fetch user data");
        });
    } else {
      reset(defaultUserFormValues);
    }
  }, [id, reset]);

  const onSubmit = async (data: UserFormProps) => {
    try {
      if (id) {
        await updateUser(id, data as User);
        toast.success("User updated successfully!");
      } else {
        await createUser(data as User);
        toast.success("User created successfully!");
      }
      navigate("/");
    } catch (error) {
      console.error("Error submitting form", error);
      toast.error("Error submitting form");
    }
  };

  return (
    <Container style={{ width: 600 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="firstName"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="First Name"
              fullWidth
              margin="normal"
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
            />
          )}
        />
        <Controller
          name="lastName"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Last Name"
              fullWidth
              margin="normal"
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Email"
              fullWidth
              margin="normal"
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          )}
        />
        <Controller
          name="phoneNumber"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Phone Number"
              fullWidth
              margin="normal"
              error={!!errors.phoneNumber}
              helperText={errors.phoneNumber?.message}
            />
          )}
        />
        <Grid container spacing={2}>
          <Grid size={6}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={isSubmitting}>
              {id ? "Update" : "Create"}
            </Button>
          </Grid>
          <Grid size={6}>
            <Button
              variant="contained"
              color="secondary"
              to="/"
              component={Link}
              fullWidth>
              Cancel
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default UserForm;
