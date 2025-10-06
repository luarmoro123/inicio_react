
/* import BasixFunctions from './typescrip/BasixFunctions' */
/* import { BasicTypes } from './typescrip/BasicTypes'
import ObjectLiteral from './typescrip/ObjectLiteral' */

/* import Counter from "./components/Counter" */
import { AuthProvider } from './context/AuthContext'
import { LoginPage } from "./components/LoginPage";

function App() {

  return (
    <AuthProvider>
      <>
        <div className="flex  flex-col justify-center items-center h-svh">
          <h1 className="text-4xl mb-5"  >react mas typescrip</h1>
          {/* <Counter /> */}
          <LoginPage />
        </div>



        {/* <BasicTypes />
      <ObjectLiteral /> */}
        {/* <BasixFunctions /> */}
      </>
    </AuthProvider>

  )
}

export default App
