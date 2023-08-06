import { createContext, Dispatch, FC, ReactNode, SetStateAction, useState } from 'react';
import { ApiData } from '../types/ApiData';

type Props = {
  isError: boolean,
  setIsError: Dispatch<SetStateAction<boolean>>,
  isLoading: boolean,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  apiData: ApiData | null;
  setApiData: (apiData: ApiData) => void,
};

type Children = {
  children: ReactNode,
};

const defaultProps: Props = {
  isError: false,
  setIsError: () => {},
  isLoading: false,
  setIsLoading: () => {},
  apiData: null,
  setApiData: () => {},
};

export const QueryContext = createContext(defaultProps);

export const DataProvider: FC<Children> = ({ children }) => {
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [apiData, setApiData] = useState<ApiData | null>(null);

  const contextValue: Props = {
    isError,
    setIsError,
    isLoading,
    setIsLoading,
    apiData,
    setApiData,
  };

  return (
    <QueryContext.Provider value={contextValue}>
      {children}
    </QueryContext.Provider>
  );
}
