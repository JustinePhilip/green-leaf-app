
import Header from './components/Header';
import SecondSection from './components/SecondSection';
import ThirdSection from './components/ThirdSection';
import {OuterLayout} from './styles/Layout'
function App() {
  return (
   <div>
   
     <OuterLayout>
       <Header/>
       <SecondSection/>
       <ThirdSection/>
       
     </OuterLayout>
    
    
   </div>
  );
}

export default App;
