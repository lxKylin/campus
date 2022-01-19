/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue"
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'bin-datav';
declare module 'particles.vue3';
declare module '@/utils/useDraw';
declare module '@types/jquery';

declare module '*.json'
declare module '*.json' {
  const value: any;
  export default value;
}
