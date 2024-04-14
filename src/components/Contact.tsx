import sfgProfilePic from "../assets/sabri-avatar.jpeg";

export default function Contact() {
	return (
		<section
			id='contact'
			className='flex flex-col-reverse lg:flex-row-reverse lg:items-center w-full gap-20 py-20'
		>
			<div className='w-full lg:w-6/12'>
				<img
					className='rounded-3xl overflow-hidden'
					src={sfgProfilePic}
					alt=''
				/>
			</div>
			<div className='text-left w-full lg:w-6/12'>
				<h2 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
					Contact
				</h2>
				<div className='flex flex-col py-16 gap-8'>
					<p className='text-4xl leading-snug'>Thank you for your time!</p>
					<p className='text-md leading-relaxed'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius
						metus elit. Mauris vestibulum nisl eu felis pellentesque, sed dictum
						arcu convallis. Praesent sed diam libero. Maecenas eget tellus vitae
						ligula elementum pellentesque. Suspendisse potenti. Nullam a elit
						vehicula, mollis mi a, venenatis odio.
						<br />
						<br />
						Donec felis felis, luctus et dignissim non, interdum sed dolor.
						Maecenas placerat elit magna, a scelerisque turpis semper et. Proin
						cursus iaculis nulla, at ornare lacus pulvinar sit amet. Curabitur
						facilisis est quis sem tempor, quis dignissim metus pellentesque.
						Nulla in lectus lacus.
					</p>
				</div>
				<div className=''>
					<div className='p4 flex gap-8'>
						<a
							className='rounded border-2 border-indigo-600 text- text-indigo-600 px-5 py-3'
							href='https://www.linkedin.com/in/sabrinaferrergregory/'
							target='_blank'
						>
							Linkedin
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
