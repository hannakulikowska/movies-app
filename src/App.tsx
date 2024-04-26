import styles from './App.module.scss';
import Sidebar from './components/sidebar/Sidebar';
import Content from './components/content/Content';

const App = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <Content />
    </div>
  );
};

export default App;
