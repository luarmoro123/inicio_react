import { useAuthContext } from "../context/AuthContext"



export const LoginPage = () => {
    const { isCheckinbg, isAuthenticated, login, user, salir } = useAuthContext()



    if (isCheckinbg) {
        return (
            <>
                <h1>verificando sesion</h1>
            </>
        )
    }
    return (
        <>
            {
                isAuthenticated ? (
                    <>
                        <h3 className="text-3xl mb-5">bienvinido</h3>
                        <pre>
                            {JSON.stringify(user, null, 2)}
                        </pre>

                        <button onClick={() => salir()}
                            className="p-2 bg-blue-500 text-white rounded-xl hover:bg-blue-700 ">salir</button>
                    </>
                ) : (
                    <>
                        <h3 className="text-3xl mb-5">ingresar a la aplicasion</h3>

                        <button onClick={() => login('luisito@gmail.com', '1234')}
                            className="p-2 bg-blue-500  text-white rounded-xl hover:bg-blue-700 " >ingresar</button>
                    </>
                )
            }
        </>
    )
}
