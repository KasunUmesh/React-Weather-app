import Header from "../components/Header/Header"

import Search from "../components/Search/Search"

function Home() {

  return (
    <div className="flex relative justify-center h-screen bg-gradient-to-b from-gray-50 to-cyan-300 flex-wrap">
        <img src="src/assets/bg.svg" alt="backgroundImage" className="absolute object-cover h-screen mix-blend-overlay opacity-80"/>
        <Header/>
        <Search/>
    </div>
  )
}

export default Home