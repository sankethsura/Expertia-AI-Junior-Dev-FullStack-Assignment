import '../styles/globals.css'
import NoteState from '../components/context/NoteState'

export default function App({ Component, pageProps }) {
  return (<NoteState>
    
    <Component {...pageProps} />
  </NoteState>)
}
