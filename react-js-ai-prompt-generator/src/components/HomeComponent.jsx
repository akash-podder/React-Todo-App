import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GeneratePromptComponent from './GeneratePromptComponent';
import HeaderComponent from './HeaderComponent';
import ErrorComponent from './ErrorComponent';
import GetPromptComponent from './GetPromptComponent';

export default function TodoApp(){
    return (
      <div className="TodoApp">
        <BrowserRouter>
            
            {/* we have to put `HeaderComponent` in `BrowserRouter` otherwise we won't be able to Access `Link` in FooterComponent */}
            <HeaderComponent/>

            <Routes>
                <Route path='/' element={ <GeneratePromptComponent/> }></Route>
                
                <Route path='/get-prompt' element={ <GetPromptComponent/> }></Route>

                {/* if None of the Routes Match, we Route to this GENERIC Error Component */}
                <Route path='*' element={ <ErrorComponent/> }></Route>
            </Routes>
            
        </BrowserRouter>

      </div>
    )
}