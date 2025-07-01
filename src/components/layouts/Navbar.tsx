import { ModeToggle } from "../mode-toggle";
import { Link } from "react-router";
const Navbar = () => {
    return (
        <nav className="flex justify-around py-6">
            <h1 className="text-xl">Task Master</h1>
            <ul className="flex gap-4">
                <Link to='/tasks'>Tasks</Link>
                <Link to='/users'>User</Link>
            </ul>
            <ModeToggle />
        </nav>
    );
};

export default Navbar;