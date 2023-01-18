import React, { useState } from 'react';
import './twitter.css';

const Twitter = ({ userName = 'unknown', name, gretting }) => {
   // console.log(isFollowing);

   const [isFollowing, setIsFollowing] = useState(false);

   const text = isFollowing ? 'Siguiendo' : 'Seguir';
   const buttonClassName = isFollowing ? 'btn-following isFollowing' : 'btn-following'

   const handleClick = () => {
      setIsFollowing(!isFollowing);
   }

   return (
      <article className='card-twitter'>
         <header className='card-twitter-header'>
            <img 
               className='card-twitter-header-img'
               src={`https://unavatar.io/${userName}`} alt='Avatar'/>
            <div>
               <strong>{name}</strong>
               <span>@{userName}</span>
            </div>
         </header>

         <aside>
            <button className={buttonClassName} onClick={() => {
               gretting(name);
               handleClick();
            }}>
               {text}
            </button>
         </aside>
      </article>
   );
}

export default Twitter;
