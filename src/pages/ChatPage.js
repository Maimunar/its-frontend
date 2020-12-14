import React, { useEffect, useState } from 'react'
import Message from '../components/ChatPage/Message'
import { socket } from '../service/socket'
import axios from 'axios'
import config from '../jwtconfig'

const ChatPage = ({ user }) => {

    const [messages, setMessages] = useState([])
    const [messageToSend, setMessageToSend] = useState()
    const [error, setError] = useState()

    const handleError = (msg) => {
        setError(msg)
        setTimeout(() => setError(), 3000)
    }
    const getMessages = () => {
        console.log('getting messages')
        axios.get('/api/messages', config(localStorage.getItem('token')))
            .then((res) => setMessages(res.data))
            .catch((err) => console.log(err))
    }
    const postMessage = (e) => {
        e.preventDefault()
        if (messageToSend.length > 0 && user) {
            axios.post('/api/messages', {
                username: user,
                message: messageToSend
            }, config(localStorage.getItem('token')))
                .then(setMessageToSend(''))
                .catch((err) => console.log(err))
        } else
            handleError('Please enter a message')
    }


    useEffect(() => { socket.on('message', getMessages) }, [])
    useEffect(getMessages, [])

    return (
        <div className="wishlist-container">
            <div className="wishlist-subcontainer">
                <div className="wishlist-title">
                    <h1>Chat with the community</h1>
                </div>
                <div className="chat-message-container">
                    {error ? <h3>{error}</h3> : ""}
                    <form action="" className="message-form">
                        <textarea placeholder="Write your message here" value={messageToSend}
                            onChange={(e) => setMessageToSend(e.target.value)} id="itemDescription" rows="5"></textarea>
                        <input type="submit" id="submitBtn" value="Send Message"
                            onClick={postMessage} />
                    </form>
                </div>
                <div className="wishlist-content">
                    {messages.map((message, key) =>
                        <Message key={key} user={message.username} message={message.message} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default ChatPage
