import { Header } from './components/Header';
import { Page, usePage } from './contexts/Page';

const App: React.FC = () => {
  const { page } = usePage();

  const renderSwitch = () => {
    switch (page) {
      case Page.Teams:
        return <div>Teams</div>;
      case Page.Matches:
        return <div>Matches</div>;
      default:
        return '';
    }
  };

  return (
    <div className="App">
      <Header />
      {renderSwitch()}
    </div>
  );
};

export default App;
