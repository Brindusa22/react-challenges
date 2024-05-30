import React from 'react'
import css from './css/PostItem.module.css'

function PostItem(props) {
   
  return (

        props.savedPosts.map( post => { const {id, type, user, webformatURL, tags} = post
                return (
                    <div key= {id} className={css.SearchItem}>
                        <p>{id}</p>
                        <p>{type}</p>
                        <img src={webformatURL} alt="Description of the image" />
                        <p>{tags}</p>
                    </div>            
                )
            })
    
  )
}

export default PostItem