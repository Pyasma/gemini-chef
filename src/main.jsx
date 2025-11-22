import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainBody from '../components/MainBody.jsx'
import App from './App.jsx'
import HeaderBox from '../components/HeaderFile.jsx'

const root = createRoot(document.getElementById('root'))

root.render (
  <>
    <HeaderBox/>
    <MainBody />
  </>

)