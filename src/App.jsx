import { Header } from './modules/Header/Header';
import { Works } from './modules/Works/Works';
import { Hero } from './modules/Hero/Hero';
import { Contacts } from './modules/Contacts/Contacts';
import { Footer } from './modules/Footer/Footer';
import { Skills } from './modules/Skills/Skills';

function App() {
	return (
		<div>
			<Header />
			<Hero />
			<Skills />
			<Works />
			<Contacts />
			<Footer />
		</div>
	);
}

export default App;
