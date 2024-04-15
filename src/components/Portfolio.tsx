import musicProjectPres from "../assets/sfg-team-g-presentation.pdf";
// import musicProjectData from "../assets/sfg-team-g-data.ipynb";
import musicProjectConclusions from "../assets/sfg-team-g-conclusions.pdf";
import musicImage from "../assets/mark-cruz-w3-zaydSNRY-unsplash.jpg";

export default function Portfolio() {
	return (
		<section
			id='portfolio'
			className='flex flex-col-reverse lg:flex-row lg:items-center w-full gap-12 xxl:gap-20 py-20'
		>
			<div className='w-full lg:w-6/12'>
				<img className='rounded-3xl overflow-hidden' src={musicImage} alt='' />
			</div>
			<div className='text-left w-full lg:w-6/12'>
				<h2 className='text-4xl font-bold tracking-tight text-gray-800 sm:text-6xl'>
					Portfolio
				</h2>
				<div className='flex flex-col py-16 gap-8'>
					<h3 className='text-indigo-900 font-bold text-3xl leading-tight'>
						Whats popular in the music scene
					</h3>
					<p className='text-4xl leading-snug'>
						The integration of technology in the music industry has
						revolutionized the way we understand and interact with music.
					</p>
					<p className='text-md leading-relaxed'>
						Our project showcases a comprehensive approach to music data
						analysis. leverages{" "}
						<span className='font-semibold italic text-indigo-800'>OpenAI</span>
						,{" "}
						<span className='font-semibold italic text-indigo-800'>
							LastFM API
						</span>
						,{" "}
						<span className='font-semibold italic text-indigo-800'>
							Billboard API
						</span>
						, and a{" "}
						<span className='font-semibold italic text-indigo-800'>
							MySQL database
						</span>
						, encompassing a wide range of functionalities from data acquisition
						to analysis and storage. This essay aims to discuss and understand
						the various components of the project, as indicated by the initial
						code cells of the notebook.
					</p>
				</div>
				<div className=''>
					<div className='p4 flex gap-8 flex-wrap'>
						<a
							className='rounded border-4 border-indigo-600 text-indigo-600 px-5 py-3'
							href={musicProjectPres}
							target='_blank'
						>
							Presentation
						</a>
						<a
							className='rounded border-4 border-indigo-600 text-indigo-600 px-5 py-3'
							target='_blank'
							href='https://nbviewer.org/github/sabrinaferrerg/Song-Central/blob/main/Song_Central_Project.ipynb'
						>
							Jupyter Book nbviewer
						</a>
						<a
							className='rounded border-4 border-indigo-600 text-indigo-600 px-5 py-3'
							target='_blank'
							href={musicProjectConclusions}
						>
							Conclusions
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
