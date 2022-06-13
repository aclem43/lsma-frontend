export const convertStatus = (value: number): string => {
  let str: string;
  switch (value) {
    case 1:
      str = "Stopped";
      break;
    case 2:
      str = "Starting";
      break;
    case 3:
      str = "Stopping";
      break;
    case 4:
      str = "Running";
      break;
    case 5:
      str = "Continueing";
      break;
    case 6:
      str = "Pausing";
      break;
    case 7:
      str = "Paused";
      break;
    default:
      str = "Error In Parsing";
  }

  return str;
};
