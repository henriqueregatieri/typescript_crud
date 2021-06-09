import { Header } from './components/Header';
import { Page, usePage } from './contexts/Page';
import { TeamIndex } from './pages/Team';
import { MatchIndex } from './pages/Match';

const App: React.FC = () => {
  const { page } = usePage();

  const renderSwitch = () => {
    switch (page) {
      case Page.Teams:
        return <TeamIndex />;
      case Page.Matches:
        return <MatchIndex />;
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
