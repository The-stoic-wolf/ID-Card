import EnterInfo from "./components/EnterInfo"
import Info from "./components/Info"

function App() {

  return (
    <>
      <h1 className="text-white text-center italic font-bold text-6xl mt-[1%]"> ID Card Form</h1>
      <div className="flex flex-row mt-[1%]">
        <EnterInfo/>
        <Info/>
      </div>
    </>
  )
}

export default App
