import {
  type CoordinatesStructure,
  type OrientationStructure,
  type RobotStructure,
} from "../types/robotTypes";

const orientation: OrientationStructure[] = ["N", "E", "S", "W"];

export const initialRobotState = (): RobotStructure => ({
  position: {
    x: 0,
    y: 0,
  },
  orientation: "N",
});

const changeRobotOrientation = (
  currentOrientation: OrientationStructure,
  command: string,
) => {
  const orientationIndex = orientation.indexOf(currentOrientation);
  if (command === "R") {
    return orientation[(orientationIndex + 1) % 4];
  }

  return orientation[(orientationIndex - 1 + 4) % 4];
};

const moveRobot = (
  currentPosition: CoordinatesStructure,
  currentOrientation: OrientationStructure,
) => {
  switch (currentOrientation) {
    case "N":
      currentPosition.y = checkLimit(currentPosition.y + 1);
      return currentPosition;
    case "S":
      currentPosition.y = checkLimit(currentPosition.y - 1);
      return currentPosition;
    case "W":
      currentPosition.x = checkLimit(currentPosition.x - 1);
      return currentPosition;
    case "E":
      currentPosition.x = checkLimit(currentPosition.x + 1);
      return currentPosition;
    default:
      break;
  }
};

const checkLimit = (position: number) => {
  if (position < 0) {
    position = 9;
  }

  if (position > 9) {
    position = 0;
  }

  return position;
};

export const robotMapping = (robotState: RobotStructure, commands: string) => {
  commands
    .toLocaleUpperCase()
    .split("")
    .forEach((command) => {
      if (command === "M") {
        moveRobot(robotState.position, robotState.orientation);
      } else {
        robotState.orientation = changeRobotOrientation(
          robotState.orientation,
          command,
        );
      }
    });
  return robotState;
};
