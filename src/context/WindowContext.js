import { createContext, useEffect, useState } from 'react'

export const WindowContext = createContext({});

const WindowContextProvider = ({children}) => {
   const [windowSize, setWindowSize] = useState({
         Xscroll: '',
         Yscroll: ''
      })

      const { Xscroll, Yscroll } = windowSize; 
      
      useEffect(() => {
         const onWindowChange = () => {
            setWindowSize({
               Xscroll: window.scrollX,
               Yscroll: window.scrollY
            })
         }
         window.addEventListener('scroll', onWindowChange)
   
         return () => window.removeEventListener('scroll', onWindowChange)
   
      }, [windowSize])


   const value = { Xscroll, Yscroll }
   return (
      <WindowContext.Provider value={value}>
         {children}
      </WindowContext.Provider>
   )
}

export default WindowContextProvider;