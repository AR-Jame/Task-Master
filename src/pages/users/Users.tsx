import { AddUser } from "@/components/module/users/AddUser";
import UserCard from "@/components/module/users/UserCard";
import { userSelector } from "@/redux/features/user/userSlice";
import { useAppSelector } from "@/redux/hook";

const Users = () => {
    const users = useAppSelector(userSelector)
    console.log(users);
    return (
        <section className="mx-[10%] space-y-5">
            <div className="flex  justify-between">
                <p className="text-2xl">Users</p>
                <AddUser />
            </div>
            <div className="flex flex-wrap gap-4">
                {
                    users.map(user => <UserCard user={user} key={user.id} />)
                }
            </div>
        </section>
    );
};

export default Users;