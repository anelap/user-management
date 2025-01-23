import { Request, Response } from "express";

import { users } from "../types/user.types";
import { v4 as uuid } from "uuid";

export const getUsers = (req: Request, res: Response) => {
  const { query } = req.query as { query?: string };

  let filteredUsers = users;

  if (query) {
    const decodedQuery = decodeURIComponent(query).toLowerCase();
    filteredUsers = filteredUsers.filter(
      (user) =>
        `${user.firstName.toLowerCase()} ${user.lastName.toLowerCase()}`.includes(
          decodedQuery
        ) ||
        user.email.toLowerCase().includes(decodedQuery) ||
        user.phoneNumber.includes(decodedQuery)
    );
  }

  res.json(filteredUsers);
};

export const createUser = (req: Request, res: Response) => {
  const user = req.body;

  users.push({ ...user, _id: uuid() });
  res.send(user);
};

export const getUser = (req: Request, res: Response) => {
  const user = users.find((u) => u._id === req.params._id);

  if (user) {
    res.send(user);
  } else {
    res.status(404).send("User not found");
  }
};

export const updateUser = (req: Request, res: Response) => {
  const index = users.findIndex((u) => u._id === req.params._id);

  if (index === -1) {
    res.status(404).send("User not found");
  }

  users[index] = {
    ...users[index],
    firstName: req.body.firstName ?? users[index].firstName,
    lastName: req.body.lastName ?? users[index].lastName,
    email: req.body.email ?? users[index].email,
    phoneNumber: req.body.contact ?? users[index].phoneNumber,
  };

  res.send(users[index]);
};

export const deleteUser = (req: Request, res: Response) => {
  const index = users.findIndex((u) => u._id === req.params._id);

  if (index === -1) {
    res.status(404).send("User not found");
  } else {
    users.splice(index, 1);
    res.status(200).send({ message: "User successfully deleted" });
  }
};
