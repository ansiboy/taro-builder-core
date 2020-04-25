import { ComponentData as BaseComponentData } from "maishu-jueying-core";
interface ComponentProps {
    ref?: any;
    key?: string;
    id: string;
}
export interface ComponentData extends BaseComponentData<ComponentProps> {
}
export {};
