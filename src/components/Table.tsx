import { FC, useMemo } from 'react';
import Cell from './Cell';
import { Content } from '../types/Content';
import { useApiData } from '../hooks/useApiData';
import { table } from 'console';

const Table: FC = () => {
  const { data } = useApiData();

  if (!data) {
    return <div>Loading...</div>;
  }

  const { ip, location, isp } = data;

  if (!location) {
    return <div>No location data available.</div>;
  }

  const { region, postalCode, timezone } = location;

  const contentObject = useMemo(() => {
    return {
      [Content.ip]: ip,
      [Content.location]: `${region}, ${postalCode}`,
      [Content.timezone]: timezone,
      [Content.isp]: isp,
    };
  }, [data]);

  return (
    <table className="table-wraper">
      <tbody className="search-bar__table">
        {Object.entries(contentObject).map(([key, value]) => (
          <Cell
            key={key}
            title={key}
            content={value}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
