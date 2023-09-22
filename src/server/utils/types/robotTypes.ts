export interface RobotStructure {
  position: CoordinatesStructure;
  orientation: OrientationStructure;
}

export interface CoordinatesStructure {
  x: number;
  y: number;
}

export type OrientationStructure = "N" | "E" | "S" | "W";

export type CommandStructure = "L" | "R" | "M";
