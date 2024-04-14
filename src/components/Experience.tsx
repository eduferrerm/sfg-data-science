interface ExperienceType {
	position: string;
	business: string;
	dates: string;
	location: string;
	description: string[];
}

const EXPERIENCES: ExperienceType[] = [
	{
		position: "DE&I Consulting & Data Analytics Summer Extern",
		business: "Credera · Internship",
		dates: "Jun 2023 - Aug 2023 · 3 mos",
		location: "United States · Remote",
		description: [
			"Conducted in-depth research on cultural competency and global best practices to support Credera’s DE&I team in developing guides for countries of operation",
			"Executed demographic and economic analyses for assigned countries, enhancing Credera's understanding of target markets and workforce landscapes",
			"Addressed unique considerations and potential challenges for US-based companies operating in assigned countries, optimizing Credera's global strategy for success",
		],
	},
	{
		position: "Client and Office Concierge",
		business: "NYU Wasserman Center for Career Development · Part-time",
		dates: "Oct 2021 - Dec 2021 · 3 mos",
		location: "New York, United States · On-site",
		description: [
			"Answered, filtered, and dispatched calls to appropriate personnel and departments.",
			"Scheduled, greeted, and directed all visitors and appointments for students and advisors.",
			"Worked with student body and company representatives in the recruiting process using tools such as Handshake and other offered services.",
			"Organized conference and interview room calendars providing administrative support to counselors.",
		],
	},
	{
		position: "Director of Inventory Management",
		business: "Elga de Venezuela C.A. · Full-time",
		dates: "Jun 2018 - Aug 2019 · 1 yr 3 mos",
		location: "Maracaibo, Zulia State, Venezuela",
		description: [
			"Supervised the recording of new items in the warehouse on Excel and coordinated their placement within the storage facility.",
			"Recorded the arrival and storage of equipment ordered by the company.",
			"Reported, analyzed, and streamlined inventory data, operations, and processes by 15 minutes to produce a catalog of more than 100 items of property, plant and equipment",
		],
	},
];

export default function Experiences() {
	return (
		<section id='experience' className='py-20'>
			<h2 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
				Experience
			</h2>
			<div className='flex flex-col lg:flex-row py-16 gap-8'>
				{EXPERIENCES.map((itemData) => (
					<ExperiencesItems experienceItem={itemData} key={itemData.position} />
				))}
			</div>
		</section>
	);
}

function ExperiencesItems({
	experienceItem,
}: {
	experienceItem: ExperienceType;
}) {
	const { position, business, dates, location, description } = experienceItem;
	return (
		<div className='inline-flex flex-col gap-10 text-left w-full lg:w-4/12 p-5'>
			<div className='flex flex-col gap-2'>
				<div className='text-indigo-600 font-bold text-3xl leading-tight'>
					{position}
				</div>
				<p className='font-bold text-md'>{business}</p>
				<p className='sm'>{dates}</p>
				<p className='sm italic'>{location}</p>
			</div>
			<hr />
			<div>
				<h4 className='pb-5 text-sm font-bold'>Responsibilities</h4>
				<ul>
					{description.map((descriptionItem) => (
						<li className='pb-5' key={descriptionItem}>
							{descriptionItem}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
