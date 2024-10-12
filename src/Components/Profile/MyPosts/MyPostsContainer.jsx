import React from 'react'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer'
import MyPosts from './MyPosts'
import { connect } from 'react-redux'


const mapStateToProps = (start) => {
    return {
        posts: start.profilePage.posts,
        newPostText: start.profilePage.newPostText
    }
} 
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action)
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
