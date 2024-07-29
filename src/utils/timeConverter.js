export const timeConverter = (unixTimestamp, timezone = 0) => {
  const localUnixTime = unixTimestamp + timezone;
  const date = new Date(localUnixTime * 1000); // porque el timestamp viene en segundos y js lo requiere en ms
  const hoursAndMinutes = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  };
  const dateAndTime = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  };
  const localTime = {
    hoursAndMinutes: new Intl.DateTimeFormat('es-ES', hoursAndMinutes).format(
      date
    ),
    dateAndTime: new Intl.DateTimeFormat('es-ES', dateAndTime).format(date),
  };
  console.log(localTime);
  return localTime;
};
