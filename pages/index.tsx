import Layout from '../components/Layout';
import Timer, { timer } from '../components/Timer';

setInterval(() => {
  timer.increase();
}, 1000);

export default (() => {
  return (
    <Layout>
      <Timer color="red" />
    </Layout>
  );
}) as React.FC;
