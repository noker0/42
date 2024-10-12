import React from 'react'
import classes from './Post.module.css'

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbhA0xQGqe8MiT1-yo4KWJKnB6uS6OAa-qGA&s" alt="" />
            {props.message}
            <div>
               <span>{props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post