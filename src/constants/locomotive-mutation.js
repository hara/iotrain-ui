import gql from "graphql-tag";

// customerの新規追加
export const OPERATE_LOCOMOTIVE = gql`
  mutation operateLocomotive($direction: Direction, $speed: Int) {
    operateLocomotive(direction: $direction, speed: $speed) {
      direction
      speed
    }
  }
`;
