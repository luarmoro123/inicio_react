import type { User } from "../interfaces/request.response";

interface Props {
    user: User;
}



const UserRow = ({ user }: Props) => {
    return (
        <tr className="hover:bg-gray-100 transition-colors border-b border-gray-200">
            <td className="py-3 px-4">
                <img
                    src={user.avatar}
                    alt="user avatar"
                    className="rounded-full w-12 h-12 object-cover shadow-sm border border-gray-300"
                />
            </td>
            <td className="py-3 px-4 font-medium text-gray-700">
                {user.first_name} {user.last_name}
            </td>
            <td className="py-3 px-4 text-gray-600">{user.email}</td>
        </tr>
    );
};

export default UserRow