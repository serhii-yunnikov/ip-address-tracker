import { FC } from 'react';

type Props = {
  ipAdress: string;
  location: string;
  timezone: string;
  isp: string
}

export const Table: FC<Props> = ({
  ipAdress,
  location,
  timezone,
  isp,
}) => {
  return (
    <table className="search-bar__table">
      <tr className="cell">
        <th className="cell__title">IP ADRESS</th>
        <td className="cell__content">{ipAdress}</td>
      </tr>
      <tr className="cell">
        <th className="cell__title">LOCATION</th>
        <td className="cell__content">{location}</td>
      </tr>
      <tr className="cell">
        <th className="cell__title">TIMEZONE</th>
        <td className="cell__content">{timezone}</td>
      </tr>
      <tr className="cell">
        <th className="cell__title">ISP</th>
        <th className="cell__content">{isp}</th>
      </tr>
    </table>
  );
};
