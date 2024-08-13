import React from 'react'

const Box =(props) => {
    console.log("props", props)
  return (
    <div>
        <div className={`Box ${props.result}`}> 
          <div className='Box_under'>
            <h1>{props.name}</h1>
            <img className='item-img' src={props.item && props.item.img} alt="" />
            <h2>{props.result}</h2>
            </div>
            

        </div>

    </div>
  )
}

export default Box


