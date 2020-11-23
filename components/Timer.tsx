import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react';

class Timer {
  count = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increase() {
    this.count++;
  }

  reset() {
    this.count = 0;
  }
}

interface TimerViewProps {
  timer: Timer;
}

const TimerView = observer<React.FC<TimerViewProps>>(({ timer }) => {
  return <>{timer.count}</>;
});

export const timer = new Timer();
export default (() => <TimerView timer={timer} />) as React.FC;
