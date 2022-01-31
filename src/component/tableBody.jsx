import React from "react";
import RowTable from "./rowTable";
const TableBody = ({ filteredQuery }) => {
  // const { set } = useState(2);
  // console.log(set );
  return (
    <>
      <tbody>
        {filteredQuery.map((e) => (
          <RowTable
            key={e.id}
            id={e.id}
            name={e.name}
            type={e.type}
            status={e.status}
            siteId={e.siteId}
          />
        ))}
      </tbody>
    </>
  );
};

export default TableBody;
