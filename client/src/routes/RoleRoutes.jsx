import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function RoleRoutes({ roles, children }) {
    const { user } = useSelector(state => state.auth);
    console.log("hi", roles);
    let havePermissions = false;
    for (const role in roles) {
        console.log("ROLE_" + roles[role].toUpperCase());
        if (user.roles.includes("ROLE_" + roles[role].toUpperCase())) {
            havePermissions = true;
            break;
        }
    }
    if (!havePermissions) {
        return <Navigate to="/error403" replace />;
    } else {
        return children;
    }
}
