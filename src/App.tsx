import "./App.css";
import Background from "./components/Background";
import Contact from "./components/Contact";
import Experiences from "./components/Experience";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";

function App() {
	return (
		<>
			<Background />
			<div className='relative z-10'>
				<Header />
				<Hero />
				<Experiences />
				<Portfolio />
				<Contact />
			</div>
		</>
	);
}

export default App;
