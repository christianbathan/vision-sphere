declare module "globe.gl" {
  function createGlobe<T = any>(): (element: HTMLElement) => any;
  export default createGlobe;
}
