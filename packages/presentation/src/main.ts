import Slides from './slides.svelte'
import '@styles/tailwind.css'
import './styles.css'

const app = new Slides({
	target: document.getElementById('app'),
})

export default app
