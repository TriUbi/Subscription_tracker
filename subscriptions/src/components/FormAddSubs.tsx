import React, { useState } from 'react'

export default function FormAddSubs({setType, setPrice, type, price, setSubs, subs}) {
    const [error, setError] = useState(false);

    const handleSubs = e => {
        e.preventDefault();
        if (price === "" || Number(price) < 0 || type === "") {
            setError(true);
            return;
        }
        setError(false);
        const data = {
            type: type,
            price: price,
            id: Date.now()
        }
        setSubs([...subs, data])
        setType("");
        setPrice("");
        //console.log(subs);
    }

  return (
    <div className='add-subscription'>
        <h3>Add Subscription</h3>
        <form onSubmit={handleSubs}>
            <p>Service</p>
            <select onChange={e => setType(e.target.value)} value={type}>
                <option value="">--Choose--</option>
                <option value="netflix">Netflix</option>
                <option value="disneyPlus">Disney +</option>
                <option value="spotify">Spotify</option>
                <option value="primeVideos">Prime Videos</option>
                <option value="hboMax">HBO Max</option>
            </select>
            <p>Quantity</p>
            <input type="number" placeholder='$20' onChange={e => setPrice(e.target.value)} value={price}/>
            <input type="submit" value='Add' />
        </form>
        {error ? <p className='error'>Invalid fields.</p> : null}
        
    </div>
  )
}
