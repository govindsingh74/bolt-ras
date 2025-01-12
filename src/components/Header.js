import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';
import WalletConnect from './WalletConnect';
const Header = () => {
    return (_jsx("header", { className: "bg-indigo-600 text-white", children: _jsx("nav", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "flex items-center justify-between h-16", children: [_jsxs("div", { className: "flex items-center", children: [_jsxs(Link, { to: "/", className: "flex items-center space-x-2", children: [_jsx(Zap, { className: "h-8 w-8" }), _jsx("span", { className: "text-xl font-bold", children: "RATSO" })] }), _jsx("div", { className: "hidden md:block ml-10", children: _jsxs("div", { className: "flex items-baseline space-x-4", children: [_jsx(Link, { to: "/", className: "px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500", children: "Home" }), _jsx(Link, { to: "/dashboard", className: "px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500", children: "Dashboard" }), _jsx(Link, { to: "/about", className: "px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500", children: "About" }), _jsx(Link, { to: "/contact", className: "px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500", children: "Contact" })] }) })] }), _jsx(WalletConnect, {})] }) }) }));
};
export default Header;
