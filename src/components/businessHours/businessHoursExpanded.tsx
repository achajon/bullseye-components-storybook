import React, {FC} from "react";
import BusinessHoursTable from "./businessHoursTable";
import { DayInfo } from "bullseye-stories/dist/src/interfaces";

interface BusinessHoursExpandedProps {
  /** Title of the component */
  title: string;

  /** Array of days */
  daysArray: DayInfo[];

  /** Small alert if needed, only visible when accordion = false */
  smallAlert?: string;

  /** 
   *  Is Close indicates the control if the location is
   *  closed and changes the color of the text to red. If
   *  not closed, the color will be green 
  */
  isClose?: boolean;
  alertText?: string;
}

/** 
 * Component to display a list of business and holiday hours
 *  in a table.
*/
const BusinessHoursExpanded: FC<BusinessHoursExpandedProps> = ({
  title,
  daysArray,
  smallAlert,
  isClose,
  alertText,
}) => {
  let colorTextByStatus = isClose ? "text-danger" : "text-success";

  if (alertText && alertText.toLowerCase().includes("soon")) {
    colorTextByStatus = "text-warning";
  }

  return (
    <div className="businessHoursExpanded__container">
      <div className="bullseye-red h4 businessHoursExpanded__title">
      {title}
      </div>
      <small>{smallAlert}</small>
      <div
        className="alert alert-secondary my-1 businessHours__alertContainer"
        role="alert"
      >
        <span className={`font-weight-bold ${colorTextByStatus}`}>
          {alertText}
        </span>
      </div>
      <BusinessHoursTable daysArray={daysArray} />
    </div>
  );
};

export default BusinessHoursExpanded;
