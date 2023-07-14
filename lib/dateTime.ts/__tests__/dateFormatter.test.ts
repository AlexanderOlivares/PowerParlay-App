import { getCurrentWeekDates } from "../dateFormatter";

test("returns a Map with correct dates for week", () => {
  const datesMap = getCurrentWeekDates("20230213");

  expect(datesMap.Monday).toBe("20230213");
  expect(datesMap.Tuesday).toBe("20230214");
});

test("handles starting with a Sunday", () => {
  const datesMap = getCurrentWeekDates("20230716"); // Sunday

  expect(datesMap.Monday).toBe("20230710");
  expect(datesMap["Next Monday"]).toBe("20230717");
});

test("handles starting on a Monday", () => {
  const datesMap = getCurrentWeekDates("20230717"); // Monday

  expect(datesMap.Monday).toBe("20230717");
  expect(datesMap["Next Monday"]).toBe("20230724");
});

test("throws error on invalid date", () => {
  const invalidDate = "20231332"; // invalid date

  expect(() => getCurrentWeekDates(invalidDate)).toThrow();
});

test("throws error on empty string", () => {
  const invalidDate = "";

  expect(() => getCurrentWeekDates(invalidDate)).toThrow();
});
