import { LoginForm } from '@/components/auth/login-form';
import Link from "next/link"

const LoginPage = () => {
    return (
        <div className="min-h-screen h-screen w-full lg:flex dark:bg-zinc-950 lg:bg-none">
            <div className="hidden lg:flex lg:flex-col lg:justify-between lg:w-1/2 bg-zinc-900 text-white p-12">
                <div className="hidden lg:flex relative z-20 items-center text-lg font-medium">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-6 w-6"
                    >
                        <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"/>
                    </svg>
                    AppName
                </div>
                <div className="mt-auto">
                    <p className="text-lg italic">
                        "This library has saved me countless hours of work and helped me deliver stunning designs to
                        my clients faster than ever before."
                    </p>
                    <p className="text-lg font-semibold mt-4">Sofia Davis</p>
                </div>
            </div>
            <div
                className="w-full lg:w-1/2 p-12 flex flex-col justify-center items-center dark:bg-zinc-950 dark:text-white">
                <div className="mt-28 flex flex-col justify-center items-center">
                    <div className="lg:hidden z-20 flex items-center text-lg font-medium">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mr-2 h-6 w-6"
                        >
                            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"/>
                        </svg>
                        AppName
                    </div>

                    <LoginForm/>
                </div>
            </div>
        </div>
    )
};

export default LoginPage;