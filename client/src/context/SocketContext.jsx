import { createContext, useContext, useEffect, useState } from "react"
import {useAuthContext} from "./AuthContext"
import io from "socket.io-client"

export const SocketContext = createContext()

export const useSocketContext = () => {
    return useContext(SocketContext)
}

export const SocketContextProvider = ({children}) => {
    const [socket, setSocket] = useState(null)
    const [onlineUsers, setOnlineUsers] = useState([])

    const { authUser } = useAuthContext();

    useEffect(()=> {
        if(authUser){
            //io() is a function used on the client-side to establish a 
            //connection to a Socket.IO server
            const socket = io("http://localhost:8000", {
                query: {
                    userId: authUser._id
                }
            });  
            setSocket(socket)

            //socket.on() is used to listen to events, can be used both on client and server side
            socket.on("getOnlineUsers", (users) => {
                setOnlineUsers(users)
            })
            return () => socket.close()
        } else {
            if(socket) {
                //close() method is used to manually close a connection 
                //between the client and the server
                socket.close()
                setSocket(null)
            }
        }
    },[authUser])
    return <SocketContext.Provider value={{socket, onlineUsers}}>
        {children}
    </SocketContext.Provider>
}