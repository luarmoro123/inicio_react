import UserRow from "./UserRow"
import ButtonCuston from "./ButtonCuston"
import { useUser } from "../hooks/useUser"

//https://reqres.in/api/users?page=2

const UserPage = () => {
    const { users,
        nextPage,
        prevPage } = useUser()

    return (
        <>
            <h3> Usuario: </h3>
            <table className="w-[500px] bg-black rounded-xl text-white">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => (
                            <UserRow key={user.id} user={user} />
                        ))
                    }


                </tbody>
            </table>
            <div className="flex justify-between w-[500px] mt-2">
                <ButtonCuston onClick={prevPage} text="Ateriores" />

                <ButtonCuston onClick={nextPage} text="siguiente" />
            </div>
        </>
    )
}

export default UserPage