import { Link } from "react-router-dom";

const Card = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className="flex flex-wrap gap-5  p-9 bg-white ">
        {data.map((item, i) => {
          return (
            data && (
              <div
                key={i}
                className="border-2 w-56 h-64 p-4 shadow-xl overflow-hidden bg-black text-white rounded-xl "
              >
                <Link to={`/detail/${item.id}`} className="">
                  <div>
                    <img src={item.image} alt="" className="bg-cover w-32 " />
                  </div>
                  <div className="text-2xl">
                    {item.firstName} {item.lastName}
                  </div>
                  <div>Id:{item.id}</div>
                  <div>Age: {item.age}</div>
                  <div>Gender: {item.gender}</div>
                </Link>
              </div>
            )
          );
        })}
      </div>
    </>
  );
};

export default Card;
