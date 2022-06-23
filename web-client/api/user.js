import { baseFetch } from "./base";

const useUserApi = () => {
  const getAllUsers = async () => baseFetch("/users", { method: "GET" });

  const getUserById = async (id) => baseFetch("/users/" + id, { method: "GET" });

  const deleteUserById = async (id) => baseFetch("/users/" + id, { method: "DELETE" });

  const createUser = async (usr) => {
    return baseFetch("/users", {
      method: "POST",
      body: JSON.stringify(usr),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const updateUser = async (usr) => {
    return baseFetch("/users/" + usr.id, {
      method: "PATCH",
      body: JSON.stringify(usr),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return {
    getAllUsers,
    getUserById,
    deleteUserById,
    createUser,
    updateUser,
  };
};

export default useUserApi;
