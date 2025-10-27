import './App.css'
import Header from "./components/Header.tsx";
import AppRouter from "./routes/AppRouter.tsx";
import Summary from "./components/index/Summary.tsx";

function App() {

    return (
    <>
        <Header />
        <Summary />
        <AppRouter />
    </>
  )
}

export default App