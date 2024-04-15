import sfgProfilePic from "../assets/sabri-avatar.jpeg";

export default function Hero() {
	return (
		<section className='min-w-screen min-h-screen flex justify-center items-center'>
			<div className='mx-auto max-w-2xl py-32 sm:py-20'>
				<div className='flex justify-center w-full mb-10'>
					<img
						className='w-60 h-60 rounded-full overflow-hidden'
						src={sfgProfilePic}
						alt=''
					/>
				</div>
				<div className='hidden sm:mb-8 sm:flex sm:justify-center'>
					<div className='relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20'>
						Sabrina Ferrer Gregory{" "}
					</div>
				</div>
				<div className='text-center'>
					<h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
						Management and Data Science Student
					</h1>
					<p className='mt-6 text-lg leading-8 text-gray-600'>
						At NYU’s Stern School of Business
					</p>
					<div className='mt-10 flex items-center justify-center gap-x-6'>
						<a
							href='#portfolio'
							className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
						>
							My porftolio
						</a>
						<a
							href='#experience'
							className='text-sm font-semibold leading-6 text-gray-900'
						>
							My experience <span aria-hidden='true'>→</span>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
