import UserRow from "./UserRow"
import ButtonCuston from "./ButtonCuston"

//https://reqres.in/api/users?page=2

const UserPage = () => {
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
                <UserRow/>
                <UserRow/>
                <UserRow/>

            </tbody>
        </table>
        <div className="flex justify-between w-[500px] mt-2">
            <ButtonCuston text="Ateriores"/>

            <ButtonCuston text="siguiente"/>
        </div>
    </>
  )
}

export default UserPage