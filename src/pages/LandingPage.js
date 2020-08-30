import React from 'react';
import {Link} from 'react-router-dom';

const LandingPage=function(){
   return(
       <>
       <div>
        <Link to='/create'>
       <button className="btn">Create survey</button>
       </Link>
       </div>
       <div>
       <button className="btn">LogiN</button>
       </div>
       </>
   )
}
export default LandingPage;