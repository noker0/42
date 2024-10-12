import React from 'react'
import classes from './Dialogs.module.css'
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer '


const Dialogs = (props) => {

  let state = props.dialogsPage;

   let dialogsElements = state.dialogs.map ( d => <DialogItem name={d.name} id={d.id}/>) 
   let messagesElements = state.messages.map ( m => <Message message={m.message}/>) 
   let newMessageBody = state.newMessageBody 
 
  let onsendMessageClick =  () => {
    props.onsendMessage()
  }
  let onNewMessageChange =  (e) => {
    let body = e.target.value
    props.updateNewMessageBody(body)
  }

  return (
    <div className={classes.dialogs}>
       <div className={classes.dialogsItems}>
          { dialogsElements }
       </div>
       <div className={classes.messages}>
        <div> { messagesElements } </div>
        <div>
          <div><textarea value={newMessageBody}
                         onChange={onNewMessageChange} 
                         placeholder='Enter Your Message'></textarea></div>
          <div><button onClick={ onsendMessageClick }>Send</button></div>
        </div>
       </div>
    </div>
  )
}

export default Dialogs