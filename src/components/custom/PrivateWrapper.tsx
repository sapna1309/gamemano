"use client";
import { useEffect, useState } from "react";
import { Login } from "./Login";

interface Props {
    children: any
}

const PrivateWrapper = ({ children }: Props) => {
    const [credentials, setCredentials] = useState(null);

    useEffect(() => {
        const cred = localStorage.getItem("credential");

        if (cred !== null) {
            const c = JSON.parse(cred);
            setCredentials(c);
        }

    }, []);

    return credentials !== null ? <>{children}</> : <Login />
}

export { PrivateWrapper };