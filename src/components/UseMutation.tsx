import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const UseMutation = () => {
  const queryClient = useQueryClient();

  const fetchUsers = async () => {
    const res = await axios.get("https://dummyjson.com/users");
    return res.data.users;
  };

  // Fetch users
  const { data: users, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  const addUser = async (newUser: { firstName: string; email: string }) => {
    const res = await axios.post("https://dummyjson.com/users/add", newUser, {
      headers: { "Content-Type": "application/json" },
    });
    return res.data;
  };

  const mutation = useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      // refresh userlist after adding
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  if (isLoading) return <p>Loading users...</p>;

  return (
    <>
      <button
        onClick={() => {
          mutation.mutate({
            firstName: "Alice",
            email: "alice@example.com",
          });
        }}
        disabled={mutation.isPending}
      >
        {mutation.isPending ? "Adding..." : "Add User"}
      </button>
      {mutation.isError && <p>Error: {mutation.error.message}</p>}
      {mutation.isSuccess && <p>User Added Successfully ✅</p>}

      <h2>Users</h2>
      <ul>
        {users.map((u: any) => (
          <li key={u.id}>
            {u.firstName} - {u.email}
          </li>
        ))}
      </ul>
    </>
  );
};

export default UseMutation;
