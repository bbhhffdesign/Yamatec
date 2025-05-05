import { hydrate, prerender as ssr } from 'preact-iso';
import DeviceSize from "./jsx/utils/DeviceSize";
import Hero from "./jsx/sections/Hero";
import Us from "./jsx/sections/Us";
import Stock from './jsx/sections/Stock';
import "./scss/index.scss";

export function App() {
	return (
		<>
		<Hero />
		<Us />
		<DeviceSize />
		<Stock />
	  </>
	);
}


if (typeof window !== 'undefined') {
	hydrate(<App />, document.getElementById('app'));
}

export async function prerender(data) {
	return await ssr(<App {...data} />);
}
