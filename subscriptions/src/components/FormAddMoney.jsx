import { useState } from "react";

const FormAddMoney = () => {
    const [input, setInput] = useState("");
    const [error, setError] = useState(false);

    const handleForm = e => {
        e.preventDefault();
        if (input === "" || Number(input) < 0) {
            setError(true);
            return;
        }
        console.log(input);
    }

    return (
        <div className="form-add-money">
            <form onSubmit={handleForm}>
                <p>Add your budget</p>
                <input type="number" placeholder="$300" 
                onChange={e => setInput(e.target.value) }/>
                <input type="submit" value='Add'/>
            </form>
            { error ? <p className="error">Invalid Budget</p> : null}

        </div>
    )
}

export default FormAddMoney;