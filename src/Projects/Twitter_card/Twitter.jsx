import React from 'react';

const Twitter = () => {
   return (
      <article style={{ display: 'flex', alignItems: 'center',}}>
         <header>
            <img src='https://unavatar.io/sindresorhus@gmail.com' alt='Avatar'/>
            <div>
               <strong>Miguel angel</strong>
               <span>@midudev</span>
            </div>
         </header>

         <aside>
            <button>
               seguir
            </button>
         </aside>
      </article>
   );
}

export default Twitter;
