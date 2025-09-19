import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Buffer } from "buffer";
window.Buffer = Buffer;

const UseQuery = () => {
  const [value, setValue] = useState<number>(1);

  const fetchUsers = async (id: number): Promise<any> => {
    const res = await axios.get(`https://dummyjson.com/products/${id}`);
    return res.data;
  };

  const {
    data,
    isLoading: isPageLoading,
    isFetching,
    error,
    refetch,
  } = useQuery<any>({
    queryKey: ["user", value],
    queryFn: () => fetchUsers(value), // 👈 function returning Promise<User>
    enabled: false,
  });

  console.log("data", data);

  return (
    <div>
      {isPageLoading && <p>Loading...</p>}
      {error && <p>Hi</p>}
      {<div>title</div>}

      <button onClick={() => refetch()}>show</button>
    </div>
  );
};

export default UseQuery;
