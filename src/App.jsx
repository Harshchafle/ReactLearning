import './App.css'
import Cardfooter from './components/cardfooter'
import CardList from './components/CardList'
import FormLayout from './components/FormLayout'

function App() {

  let arrObj = [
        {
            name : "Natlie",
            role : "Natasha",
            image : "https://imgs.search.brave.com/fBC898AHCTTXbUESCg4lrqy-oCiQ8fObKKyZTy4TjNE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9k/L2RiL1NjYXJsZXR0/X0pvaGFuc3Nvbl8y/MDAzLmpwZw"
        },
        {
            name : "Robert Downey Jr.",
            role : "Iron Man",
            image : "https://imgs.search.brave.com/uh0IGZRjmYGvs8V5B12eKnEQFXGbXbKhPB4NK-8s0c0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8y/LzIzL1JvYmVydF9E/b3duZXlfSnIuXzIw/MTRfQ29taWMtQ29u/LmpwZw"
        },
        {
            name : "Chris Hemsworth",
            role : "Thor",
            image : "https://imgs.search.brave.com/pRyYpjk4Ao6l9-XmvccgAmUcq03t2okXXAEsnPehqo4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzY5L0NocmlzX0hl/bXN3b3J0aF9ieV9H/YWdlX1NraWRtb3Jl/XzMuanBn"
        },
        {
            name : "Chris Evans",
            role : "Captain America",
            image : "https://imgs.search.brave.com/p-F-tPGXma1tOcclVeTiMiUdYjWW09sbfNI8xUq5xyk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk56UTBZV00x/T0RFdFpERmtZeTAw/TUdKaExUa3daRFV0/TXpWa1pqbGpPRFUz/WlRSbVhrRXlYa0Zx/Y0djQC5qcGc"
        },
        {
            name : "Tom Holland",
            role : "Spider Man",
            image : "https://imgs.search.brave.com/iT6csO6JoQMEZ2AQZrLee5-zvVJmpjP9XKSWV30M3LM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qll6VTNOV1Jo/TWpndE5tTm1NUzAw/WWpRMUxXSXlZemd0/WXpka1lqUmpOV0V6/TTJFM1hrRXlYa0Zx/Y0djQC5qcGc"
        }
    ]
  return (
    <>
      <CardList  actor = {arrObj[0]}/>
      <CardList  actor = {arrObj[1]}/>
      <CardList  actor = {arrObj[2]}/>
      <CardList  actor = {arrObj[3]}/>
      <CardList  actor = {arrObj[4]}/>
    </>
  )
}

export default App
