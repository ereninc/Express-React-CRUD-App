import { v4 as uuidv4 } from "uuid";

let users = [
  {
    id: uuidv4(),
    name: "John Doe",
    email: "john@gmail.com",
    country: "USA",
    contact: "1234567890",
  },
  {
    id: uuidv4(),
    name: "Jane Doe",
    email: "jane@gmail.com",
    country: "GERMANY",
    contact: "0987654321",
  },
];

export const getUsers = (req, res) => {
  res.send(users);
};

export const getUser = (req, res) => {
  const user = users.find((u) => {
    return u.id === req.params.id;
  });
  if (!user) {
    res.status(404).send("The user with the given ID was not found.");
  }
  res.send(user);
};

export const createUser = (req, res) => {
  const { name, email, country, contact } = req.body;
  const user = {
    id: uuidv4(),
    name,
    email,
    country,
    contact,
  };
  users.push(user);
  res.send("New user created!");
};

export const deleteUser = (req, res) => {
  users = users.filter((u) => {
    return u.id !== req.params.id;
  });
  res.send("User deleted!");
};

export const updateUser = (req, res) => {
  const user = users.find((u) => {
    return u.id === req.params.id;
  });
  if (!user) {
    res.status(404).send("The user with the given ID was not found.");
  }
  const { name, email, country, contact } = req.body;
  user.name = name;
  user.email = email;
  user.country = country;
  user.contact = contact;
  res.send("User updated!");
};
