import { ComponentData as BaseComponentData } from "maishu-jueying-core";
export interface ComponentProps {
    ref?: any;
    key?: string;
    id: string;
}
export interface ComponentData extends BaseComponentData<ComponentProps> {
}
