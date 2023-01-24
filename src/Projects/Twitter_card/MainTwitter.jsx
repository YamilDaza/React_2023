import React from "react";
import Twitter from './Twitter'
import './twitter.css'

const MainTwitter = () => {
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

export default MainTwitter;

