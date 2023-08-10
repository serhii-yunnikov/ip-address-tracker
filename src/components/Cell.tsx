import { FC } from "react";

type Props = {
  title: string,
  content: string,
};

const Cell: FC<Props> = ({
  title,
  content,
}) => (
  <tr className="cell">
    <th className="cell__title">{title}</th>
    <td className="cell__content">{content}</td>
  </tr>
);

export default Cell;
