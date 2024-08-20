import * as React from "react";
import Button from "../atoms/Button";
import { User } from "../../Modals/User";

const SignUp = () => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [user, setUser] = React.useState<User>();

    return <div className="card-base flex-col justify-center items-center gap-2 w-64">
            <h1 className="font-semibold">Sign Up</h1>
            <form className="flex flex-col dark:bg-slate-600 dark:text-slate-100 p-4 rounded-md gap-2 w-full">
                <label className="flex flex-col">
                    <span className=" text-sm">Email</span>  
                    <input type="email" name="email" className="rounded-sm bg-slate-300 text-slate-800 pl-2  focus-visible:outline-none text-sm"/>
                </label>
                <label className="flex flex-col">
                    <span className=" text-sm">Password</span> 
                    <input type="password" name="password" className="rounded-sm bg-slate-300 text-slate-800 pl-2  focus-visible:outline-none text-sm"/>
                </label>
                <label className="flex flex-col">
                    <span className=" text-sm">Starter Pokemon</span>
                    <select role="listbox" className="rounded-sm bg-slate-300 text-slate-800 pl-2  focus-visible:outline-none text-sm">
                        <option value="PickerAchoo">PickerAchoo</option>
                        <option value="WetSquirrel">WetSquirrel</option>
                        <option value="Ash" selected>Ash</option>
                    </select>
                </label>
            </form>
            <div className="flex justify-center w-full px-4">
                <Button 
                    scheme="Primary" 
                    fullWidth 
                    label="Submit" 
                    shape="Pill" 
                    onClick={() => setUser({ email: "example-email@email.com", password: "Password"})}/>
            </div>
        </div>;
}
 
export default SignUp;