import { type Value } from "react-multi-date-picker";

type VerifiedValue = NonNullable<Value>;

export function formatDate(date: Date) {
  return date.toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function createDateObjects(
  dateDateObject: VerifiedValue,
  rehearsalDateObject: VerifiedValue,
  performanceDateObject: VerifiedValue
) {
  const date = new Date(dateDateObject.toString());
  const rehearsalDateArr = rehearsalDateObject
    .toString()
    .split(",")
    .map((currentDate) => {
      return new Date(currentDate);
    });
  const performanceDateArr = performanceDateObject
    .toString()
    .split(",")
    .map((currentDate) => {
      return new Date(currentDate);
    });

  return { date, rehearsalDateArr, performanceDateArr };
}
