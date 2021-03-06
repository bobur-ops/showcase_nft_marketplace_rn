import { useState } from 'react'
import { Download, Features, SectionWrapper } from './components'
import assets from './assets'
import styles from './styles/Global'

const App = () => {
	const [count, setCount] = useState(0)

	return (
		<>
			<SectionWrapper
				title='Your own store of Nifty NFTs. Start selling & Growing'
				description='But, store, collect NFTs, exchange & earn crypto. Join 25+ million people using ProNef Marketplace'
				showBtn
				mockupImg={assets.homeHero}
				banner='banner'
			/>
			<SectionWrapper
				title='Smart User Interface Marketplace'
				description='Experience a bettery UI of ProNef NFT Marketplace. Smooth constant colors of fluent UI design'
				mockupImg={assets.homeCards}
				reverse
			/>
			<Features />
			<SectionWrapper
				title='Deployment'
				description="ProNef is built using Expo which runs natively on all users device. You can easily get your app into people's hands"
				mockupImg={assets.feature}
				reverse
			/>
			<SectionWrapper
				title='Creative way to showcase the store'
				description='The app contains two screens. The first screen all NFTs while the second one shows the details of a specific NFT.'
				mockupImg={assets.mockup}
				banner='banner02'
			/>
			<Download />

			<div className='px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04'>
				<p className={`${styles.pText} ${styles.whiteText}`}>
					Made with love by <span className='bold'>Bobur Komilov</span>
				</p>
			</div>
		</>
	)
}

export default App
