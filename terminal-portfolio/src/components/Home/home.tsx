import styles from './home.module.scss';
import { useState } from 'react';
import 'primeicons/primeicons.css';
        
export default function Home() {
  const [powerButtonClass, setPowerButtonClass] = useState<string>(styles.powerButton + ' pi pi-power-off');
  
  const powerMouseDown = () => setPowerButtonClass(styles.powerButtonOnClick + ' pi pi-power-off');
  const powerMouseUp = () => setPowerButtonClass(styles.powerButton + ' pi pi-power-off');


  return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
              <h1>Welcome,</h1>
              <h2>Press power button to begin</h2>
            </div>
            <a className={powerButtonClass} 
              onMouseDown={powerMouseDown}
              onMouseUp={powerMouseUp} /> 
              
        </div>
  )
}
