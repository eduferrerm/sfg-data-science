import "./App.css";
import Contact from "./components/Contact";
import Experiences from "./components/Experience";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";

function App() {
	return (
		<>
			<Header />
			<Hero />
			<Experiences />
			<Portfolio />
			<Contact />
		</>
	);
}

export default App;
