import { Suspense } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Tickets from './Components/Tickets/Tickets';
import Footer from './Components/Footer/Footer';


const promiseTickets = fetch("/tickets.json").then(res => res.json());

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Suspense fallback={<p>Loading...</p>}>
          <Tickets promiseTickets={promiseTickets}></Tickets>
      </Suspense>
      <Footer></Footer>
    </>
  )
}

export default App
