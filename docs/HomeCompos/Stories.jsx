import React from 'react'
import "./homestyle/stories.css"
function Stories(props){
  return (
    <div >
        <section className='storie'>
            <img className='storie-image' src={props.image} />
            <p className='storie-name'>{props.user_name}</p>
        </section>
    </div>
  )
}

export default Stories