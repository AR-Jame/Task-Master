import { deleteUser } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hook";
import type { IUser } from "@/types";
import { Trash2 } from "lucide-react";

interface IProps {
    user: IUser
}
const UserCard = ({ user }: IProps) => {
    const dispatch = useAppDispatch();
    return (
        <div className="p-10 flex border-green-400 justify-between items-center w-xs border">
            <p>{user.name}</p>
            <button onClick={() => dispatch(deleteUser(user.id))}><Trash2 color="red" /></button>
        </div>
    );
};

export default UserCard;