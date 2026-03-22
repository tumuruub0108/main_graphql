import type createContext from '$/context';

export type Context = Awaited<ReturnType<typeof createContext>>;
