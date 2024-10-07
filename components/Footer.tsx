import React from 'react';

const Footer = () => {
	return (
		<footer className='w-full bg-black text-white py-6 flex justify-center items-center'>
			<div className='text-body-3 text-gray400'>
				© 2024 CoinScope GG. All rights reserved.
			</div>

			<div className='flex space-x-6 ml-8'>
				<a
					href='/privacy'
					className='text-body-2-m hover:text-primary hover:underline'
				>
					Privacy Policy
				</a>
				<a
					href='/terms'
					className='text-body-2-m hover:text-primary hover:underline'
				>
					Terms of Service
				</a>
				<a
					href='/contact'
					className='text-body-2-m hover:text-primary hover:underline'
				>
					Contact Us
				</a>
			</div>
		</footer>
	);
};

export default Footer;
