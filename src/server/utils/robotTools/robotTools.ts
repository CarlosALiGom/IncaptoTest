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

  //[FEEDBACK](mejora): para mejorar la legibilidad del código y la comprensión de este, es mejor asignar el retorno de la función
  // a una variable auxiliar y tratar claramente ambas casuísticas que no hacer un retorno dentro de un if y otro retorno fuera,
  // o tambien hacer el retorno del resultado de una ternaria o usar un switch.
  // EJ:  return command === "R" ? orientation[(orientationIndex + 1) % 4] : orientation[(orientationIndex - 1 + 4) % 4];
  
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
    //[FEEDBACK](correcto): esta función sirve como ejemplo de como se podría haber implementado correctamente la función "changeRobotOrientation"
    // ya que en este caso los retornos estan en ejecuciones separadas y no en una ejecución interrumpida.
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
  }
};

const checkLimit = (position: number) => {
  //[FEEDBACK](mejora): se debería haber definido los limites del grid como una estructura de datos, ya que tal y como está hecho ahora el limite es un
  // valor hardcoded que no es autoexplicativo. Ademàs que tal y como està hecho se requiere de un refactor de la funcionalidad en caso de que
  // se quisiera modificar los valores del grid y este dejara de ser cuadrado.
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
