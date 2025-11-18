import React from "react";

const SkeletonRow = () => (
  <tr className="border-t">
    <td className="px-4 py-2"><div className="h-5 bg-gray-300 rounded animate-pulse"></div></td>
    <td className="px-4 py-2"><div className="h-5 bg-gray-300 rounded animate-pulse"></div></td>
    <td className="px-4 py-2"><div className="h-5 bg-gray-300 rounded animate-pulse"></div></td>
    <td className="px-4 py-2"><div className="h-5 bg-gray-300 rounded w-20 animate-pulse"></div></td>
  </tr>
);

export default SkeletonRow;
