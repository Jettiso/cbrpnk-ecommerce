import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
// import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<div>
			<header className='flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 dark:bg-gray-800'>
				<nav
					className='max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between'
					aria-label='Global'
				>
					<Link className='flex-none text-xl font-semibold dark:text-white' to={'/'}>
						CBRPNK
					</Link>
					<div className='flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:pl-5'>
						<Link className='font-medium text-blue-500' to={'/'} aria-current='page'>
							Home
						</Link>
						<Link
							className='font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500'
							to={'/shop'}
						>
							Shop
						</Link>
						<Link
							className='font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500'
							to={'/'}
						>
							About
						</Link>
						<Link
							className='font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500'
							to={'/'}
						>
							Contact
						</Link>
					</div>
				</nav>
			</header>
		</div>
	);
};

export default Navbar;
