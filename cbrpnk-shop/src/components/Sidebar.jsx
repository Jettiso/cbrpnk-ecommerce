import React from "react";

const Sidebar = () => {
	return (
		<>
			<div className='hs-accordion-group flex-none'>
				<div className='hs-accordion active' id='hs-basic-with-title-and-arrow-stretched-heading-one'>
					<button
						className='hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400'
						aria-controls='hs-basic-with-title-and-arrow-stretched-collapse-one'
					>
						Clothing
						<svg
							className='hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400'
							width='16'
							height='16'
							viewBox='0 0 16 16'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
							/>
						</svg>
						<svg
							className='hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400'
							width='16'
							height='16'
							viewBox='0 0 16 16'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
							/>
						</svg>
					</button>
					<div
						id='hs-basic-with-title-and-arrow-stretched-collapse-one'
						className='hs-accordion-content w-full overflow-hidden transition-[height] duration-300'
						aria-labelledby='hs-basic-with-title-and-arrow-stretched-heading-one'
					>
						<p className='text-gray-800 dark:text-gray-200'>
							<em>This is the third item's accordion body.</em> 
						</p>
					</div>
				</div>

				<div className='hs-accordion' id='hs-basic-with-title-and-arrow-stretched-heading-two'>
					<button
						className='hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400'
						aria-controls='hs-basic-with-title-and-arrow-stretched-collapse-two'
					>
						Miscellaneous
						<svg
							className='hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400'
							width='16'
							height='16'
							viewBox='0 0 16 16'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
							/>
						</svg>
						<svg
							className='hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400'
							width='16'
							height='16'
							viewBox='0 0 16 16'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
							/>
						</svg>
					</button>
					<div
						id='hs-basic-with-title-and-arrow-stretched-collapse-two'
						className='hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300'
						aria-labelledby='hs-basic-with-title-and-arrow-stretched-heading-two'
					>
						<p className='text-gray-800 dark:text-gray-200'>
							<em>This is the third item's accordion body.</em> 
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Sidebar;
