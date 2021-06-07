import { Header } from './components/Header';
import { Page, usePage } from './contexts/Page';
import { TeamIndex } from './pages/Team';

const App: React.FC = () => {
  const { page } = usePage();

  const renderSwitch = () => {
    switch (page) {
      case Page.Teams:
        return (
          <div>
            <div>Teams</div>
            <TeamIndex />
          </div>
        );
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
