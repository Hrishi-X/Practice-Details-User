import axios from "axios";

import { useEffect, useState } from "react";
import Card from "./Card";
import Button from "./Button";

const Home = () => {
  const [Users, setUsers] = useState([]);
  const [page, setpage] = useState(0);

  const getUsers = async () => {
    try {
      const { data } = await axios.get(
        `https://dummyjson.com/users/?limit=20&skip=${page}`
      );
      //   console.log(data);
      setUsers(data.users);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUsers();
  }, [page]);
  //   console.log(Users);
  return (
    <div>
      home
      <Card data={Users} />
      {Users.length > 0 ? (
        <div className="flex justify-center items-center gap-5">
          <Button
            lable="Prev"
            disabled={page === 0}
            clickhandler={() => setpage(page - 20)}
          />
          <p>{page}</p>
          <Button
            lable="next"
            disabled={page === 80}
            clickhandler={() => setpage(page + 20)}
          />
        </div>
      ) : (
        " "
      )}
    </div>
  );
};

export default Home;
