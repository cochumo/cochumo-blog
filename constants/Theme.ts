declare module "styled-components" {
  export interface DefaultTheme {
    color: string;
    background: string;
  }
}

/**
 * @remarks https://twitter.com/pulpxstyle/status/1494279960437358594/photo/3
 */
export const defaultTheme = {
  color: "#4a5e28",
  background: "#839c5d",
} as const;
