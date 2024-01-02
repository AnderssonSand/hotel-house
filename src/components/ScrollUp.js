import {useEffect} from 'react';
import { ArrowUpCircle } from 'react-bootstrap-icons'
// -- Har vi två sånna här? 
export default function ScrollUp() {
  useEffect(() => {
    //  scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <div>

      <button id='upButton'
        onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}

      >
        <ArrowUpCircle style={{fontSize: '2em'}}/>
      </button>
    </div>
  );
}