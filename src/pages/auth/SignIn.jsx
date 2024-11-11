import { Input, Checkbox, Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function SignIn() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        localStorage.setItem("token", "123456");
        navigate("/products");
    };

    return (
        <section className="m-8 flex gap-4">
            <div className="w-full lg:w-3/5 mt-24">
                <div className="text-center">
                    <Typography variant="h2" color="blue" className="font-bold mb-4">
                        Sign In to TechStore
                    </Typography>
                    <Typography
                        variant="paragraph"
                        color="blue-gray"
                        className="text-lg font-normal"
                    >
                        Enter your email and password to Sign In.
                    </Typography>
                </div>
                <form
                    className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2"
                    onSubmit={handleSubmit}
                >
                    <div className="mb-1 flex flex-col gap-6">
                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="-mb-3 font-medium"
                        >
                            Your email
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="name@mail.com"
                            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="-mb-3 font-medium"
                        >
                            Password
                        </Typography>
                        <Input
                            type="password"
                            size="lg"
                            placeholder="********"
                            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <Checkbox
                        label={
                            <Typography
                                variant="h6"
                                color="gray"
                                className="flex items-center justify-start font-medium"
                            >
                                I agree the&nbsp;
                                <p className="font-normal text-black transition-colors hover:text-gray-900 underline">
                                    Terms and Conditions
                                </p>
                            </Typography>
                        }
                        containerProps={{ className: "-ml-2.5" }}
                    />

                    <Button className="mt-6" fullWidth color="blue" type="submit">
                        {/* {1>2 ? "Iniciando..." : "Entrar"} */}
                        Entrar
                    </Button>

                    <div className="flex items-center justify-between gap-2 mt-6">
                        <Typography variant="small" className="font-medium text-gray-900">
                            <Link to="/forgot-password">Forgot Password</Link>
                        </Typography>
                    </div>
                    <Typography
                        variant="paragraph"
                        className="text-center text-blue-gray-500 font-medium mt-4"
                    >
                        Not registered?
                        <Link to="/auth/sign-up" className="text-gray-900 ml-1">
                            Create account
                        </Link>
                    </Typography>
                </form>
            </div>
            <div className="w-2/5 h-full hidden lg:block">
                <img
                    src="/img/pattern.png"
                    className="h-full w-full object-cover rounded-3xl"
                />
            </div>
        </section>
    );
}

export default SignIn;
