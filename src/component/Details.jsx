import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const Details = () => {
  const { id } = useParams();
  console.log(id);

  const [user, setuser] = useState([]);

  const getUserDetails = async () => {
    try {
      const { data } = await axios.get(`https://dummyjson.com/users/${id}`);
      console.log(data);
      setuser(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <>
      {user ? (
        <div className="flex gap-10 bg-black text-white p-5 h-screen justify-center items-center">
          <div className="flex justify-start  flex-col gap-2 p-10 py-20">
            <div className="text-4xl font-bold">
              {" "}
              {user.id}
              {user.firstName} {user.lastName}
            </div>
            <div className="text-2xl">{user.university}</div>
            <div className="text-2xl">Phone{user.phone}</div>
            <div className="text-2xl">Email{user.email}</div>
          </div>
          <div>
            <img
              src={user.image}
              alt=""
              className="px-12   shadow-white rounded-3xl bg-cover"
            />
          </div>
          <div className="p-10 text-center py-20">
            <h1 className="text-4xl font-bold">Personal Inforamtion</h1>
            <p className="text-2xl font-semibold ">
              BirthDate : {user.birthDate}
            </p>
            <p className="text-2xl font-semibold ">EyeColor: {user.eyeColor}</p>
            <p className="text-2xl font-semibold "> Gender : {user.gender}</p>
          </div>
        </div>
      ) : (
        <h1 className="text-5xl font-bold">Loading........</h1>
      )}
    </>
  );
};

export default Details;
