import styles from './home.module.scss';
import { useState } from 'react';
import 'primeicons/primeicons.css';
import { Link } from 'react-router-dom';
        
export default function Home() {
  const [powerButtonClass, setPowerButtonClass] = useState<string>(styles.powerButtonIgnore + ' pi pi-power-off');

  const powerMouseDown = () => setPowerButtonClass(styles.powerButtonOnClick + ' pi pi-power-off');
  const powerMouseUp = () => setPowerButtonClass(styles.powerButtonIgnore + ' pi pi-power-off');


  return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
              <h1>Welcome,</h1>
              <h2>Press power button to begin</h2>
            </div>
            <Link className={powerButtonClass} 
              onMouseDown={powerMouseDown}
              onMouseUp={powerMouseUp}
              to={'/entry'} /> 
              
        </div>
  )
}
