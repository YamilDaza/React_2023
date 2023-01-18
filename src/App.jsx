import React from "react";
import Twitter from './Projects/Twitter_card/Twitter'

const App = () => {
	const gretting = (name) => console.log(`Hi, I am @${name}`);

	const midudev = {gretting: gretting, userName: 'midudev', name:'Miguel Angel'}
	
	
	return(
		<>
			<section className="App">
				<Twitter {...midudev}/>
				<Twitter gretting={gretting}  userName='elonmusk' name='Elon Musk'/>
				<Twitter gretting={gretting}  userName='vxnder' name='Vanderhart'/>
			</section>
		</>
	)
}

export default App;
