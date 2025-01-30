import { useState } from "react";
import Balance from "./Balance";
import FormAddSubs from "./FormAddSubs";
import DisplayItems from "./DisplayItems";

const MainControl = ({ count }) => {
  const [subs, setSubs] = useState([]);
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");

  const handleDeleteSub = (id) => {
    const newSubs = subs.filter((sub) => sub.id !== id);
    setSubs(newSubs);
  };

  return (
    <>
      <div className="main-form">
        <Balance count={count} subs={subs} />
        <FormAddSubs
          setType={setType}
          setPrice={setPrice}
          type={type}
          price={price}
          setSubs={setSubs}
          subs={subs}
          count={count}
        />
      </div>
      <DisplayItems subs={subs} onDelete={handleDeleteSub} />
    </>
  );
};

export default MainControl;
