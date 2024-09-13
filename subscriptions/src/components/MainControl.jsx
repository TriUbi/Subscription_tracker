import { useState } from "react";
import Balance from "./Balance";
import FormAddSubs from "./FormAddSubs";

const MainControl = ({count}) => {
    const [type, setType] = useState("");
    const [price, setPrice] = useState("");
    const [subs, setSubs] = useState([]);
  

    return (
        <div className="main-form">
            <Balance count={count}/>
            <FormAddSubs 
            setType={setType} 
            setPrice={setPrice}
            type={type}
            price={price}
            setSubs={setSubs}
            subs={subs}
            />
        </div>
    )
}

export default MainControl;