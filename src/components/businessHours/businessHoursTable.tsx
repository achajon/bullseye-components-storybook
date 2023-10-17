import {FC} from "react";
import { NewId, isArrayOfTypeString } from "bullseye-stories/dist/src/utils/utils";
import React from "react";

  /** Days of the week table*/
interface DayInfoWithNodes {
  /** name of the day of the week */
  day: string | string[] | React.ReactNode[];
  /** hours in format 08:00 AM - 05:00 PM*/
  hours: string | string[] | React.ReactNode[];
}

interface BusinessHoursTableProps {
  daysArray: DayInfoWithNodes[];
}

const BusinessHoursTable: FC<BusinessHoursTableProps> = ({
  daysArray,
}) => {
  return (
    <table className="w-100 m-2 businessHoursTable__table">
      <tbody>
        {daysArray.map((dayInfo) => {
          return (
            <tr key={NewId()}>
              <th scope="row" className="bl-text-bold-500">
                {/* If dayInfo.day is an array, join the strings */}
                {Array.isArray(dayInfo.day) && isArrayOfTypeString(dayInfo.day)
                  ? dayInfo.day.join(", ")
                  : dayInfo.day}
              </th>
              <td>
                {/* If dayInfo.hours is an array, join the strings */}
                {Array.isArray(dayInfo.hours) &&
                isArrayOfTypeString(dayInfo.hours)
                  ? dayInfo.hours.join(", ")
                  : dayInfo.hours}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default BusinessHoursTable;
