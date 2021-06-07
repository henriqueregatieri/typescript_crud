import { createContext, useContext, useState } from 'react';

export enum Page {
  Teams = 'Teams',
  Matches = 'Matches',
}

type ContextType = {
  page: Page;
  setPage: (page: Page) => void;
};

const Context = createContext<ContextType>({
  page: Page.Teams,
  setPage: (page) => console.warn('no page provider'),
});

export const usePage = () => useContext(Context);

export const PageStore: React.FC = ({ children }) => {
  const [page, setPage] = useState(Page.Teams);
  return (
    <Context.Provider value={{ page, setPage }}>{children}</Context.Provider>
  );
};
