import { FC } from 'react';
import Input from './Input';
import { Table } from './Table';

const SearchBar: FC = () => {
  return (
    <section className="search-bar">
      <h1 className="search-bar__title">
        IP Adress Tracker
      </h1>
      <Input />
      <Table />
    </section>
  );
};

export default SearchBar;
