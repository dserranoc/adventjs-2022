function countHours(year, holidays) {
  const nonWorkingDays = [0, 6]
  const specialDay = "12/31"
  const leapDay = "02/29"
  let extraHours = 0

  holidays.forEach(dateStr => {
    const date = new Date(`${year}/${dateStr}`)
    const isLeapYear = new Date(year, 1, 29).getDate() === 29;
    const isNonWorkingDay = nonWorkingDays.includes(date.getDay()) && dateStr !== specialDay
    extraHours += isNonWorkingDay ? 0 : 2
    const isLeapDay = isLeapYear && dateStr === leapDay
    extraHours += isLeapDay ? 2 : 0
  })
  return extraHours
}