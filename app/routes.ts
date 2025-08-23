import { type RouteConfig, index, route } from "@react-router/dev/routes";
import { Routes } from "react-router";

export default [
    index("routes/home.tsx"),
   route('/auth', 'routes/auth.tsx'),
   route('/upload','routes/upload.tsx')
] satisfies RouteConfig;
