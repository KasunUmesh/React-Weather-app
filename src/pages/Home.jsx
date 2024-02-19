import Header from "../components/Header/Header"


function Home() {


  return (
    <div className="flex relative justify-center h-screen bg-gradient-to-b from-gray-50 to-cyan-300 ">
        <img src="src/assets/bg.svg" alt="backgroundImage" className="absolute object-cover h-screen mix-blend-overlay opacity-80"/>
        <Header/>
    </div>
  )
}

export default Home