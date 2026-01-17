import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LanguageContext from './context/LanguageContext.jsx'
import { Provider } from 'react-redux'
import { cartStore } from './app/store.js'
import { likeStore } from './app/LikeStore.js'

createRoot(document.getElementById('root')).render(
  <LanguageContext>
    <StrictMode>
      <Provider store={likeStore}>
        <Provider store={cartStore}>
          <App />
        </Provider>
      </Provider>
    </StrictMode>,
  </LanguageContext>
)
