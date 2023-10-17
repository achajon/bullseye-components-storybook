import { FC } from "react";

import BusinessHoursExpanded from "./businessHoursExpanded";
import {BusinessHoursAccordion} from "components-bullseye";
import { DayInfo } from "bullseye-stories/dist/src/interfaces";
import React from "react";

type BusinessHoursProps = {
  /** Days of the week */
  daysArray: DayInfo[];
  /** 
   * Open or Close label for Subtitle 
  */
  openCloseLabel?: string;

  /** 
   * Is Close indicates the control the location is
   *  close and change the color of the text to red if
   *  not close the color will be green 
  */
  isClose?: boolean;

  /** * Small alert if needed, only visible when accordion = false */
  smallAlert?: string;

  /** * Title to display above the business hours, only visible when show accordion = false*/
  title?: string;

  /** * Bootstrap class */
  titleClass?: string;

  /** 
   * This parameter change the behavior of the business hours table
   * if set to true a title and caret will show instead of the full
   * table expanded
  */
  showAccordion?: boolean;
}

/** 
 * Component to display a list of business and holiday hours
 *  in a table. This component could behave as a button with
 *  a popup implementation depending on the props
*/
const BusinessHours: FC<BusinessHoursProps> = ({
  daysArray,
  openCloseLabel,
  isClose = false /** Default value for isClose flag is false */,
  smallAlert,
  title,
  titleClass,
  showAccordion,
} : BusinessHoursProps) => {
  let alertText: string = isClose ? "Close Now" : "Open Now";
  // If a custom openClose label is specified, it will override the default value of the alert
  alertText = !openCloseLabel ? alertText : openCloseLabel;

  return !showAccordion ? (
      <BusinessHoursExpanded
        title={title ? title : "Default Title"}
        daysArray={daysArray}
        smallAlert={smallAlert}
        isClose={isClose}
        alertText={alertText}
      />
  ) : (
      <BusinessHoursAccordion
        title={alertText}
        titleClass={titleClass}
        daysArray={daysArray}
      />
  );
};

export default BusinessHours;
