import React, { useEffect, useState } from 'react';

const Wordcounter = () => {
  const [count,setCount]= useState(0);
  const [text,setText] = useState('');
  const handleOnChange=(e)=>{
    console.log("On Change");
    setText(e.target.value);
  }
  useEffect(()=>{
    const arr = text.split(' ').filter((e)=>{
      return e!=='';
    })
    console.log(arr);
    setCount(arr.length);
  },[text])
  return (
    <div className='container'>
          <h2>Responsive Paragraph Word Counter</h2>
          <textarea  onChange={handleOnChange} name="wcounter" id="wc" cols="40" style={{maxWidth:"100%"}} rows="10"></textarea>
          <span className='my-2' style={{display:"block",textAlign:"left"}}>Word Count:{count}</span>  
    </div>
  )
}

export default Wordcounter;

