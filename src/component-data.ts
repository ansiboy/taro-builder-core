import { ComponentData as BaseComponentData } from "maishu-jueying-core";

export interface ComponentProps {
    ref?: any;
    key?: string;
    id: string;
}

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>

export type ComponentData = Omit<BaseComponentData, "children"> & { parentId: string | null };
export type PageData = Omit<BaseComponentData, "children"> & { children: ComponentData[] };