import { makeAutoObservable } from 'mobx';
import { Observer } from 'mobx-react';

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
  color: string;
}

export const timer = new Timer();

const TimerView: React.FC<TimerViewProps> = ({ color }: TimerViewProps) => {
  return (
    <Observer>{() => <div style={{ color }}>{timer.count}</div>}</Observer>
  );
};

export default TimerView;
