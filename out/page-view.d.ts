import * as React from "react";
import { Callback } from "maishu-toolkit/out/callback";
export interface PageViewProps {
    showHeader?: boolean;
    showFooter?: boolean;
    headerHeight?: number;
    footerHeight?: number;
}
export interface PageViewState {
}
export declare class PageView extends React.Component<PageViewProps> {
    childComponentCreated: Callback<{
        component: React.Component<{}, {}, any>;
    }>;
    constructor(props: PageViewProps);
    render(): JSX.Element;
}
export declare class PageViewHeader extends React.Component<{
    height: number;
}> {
    static defaultProps: PageViewHeader["props"];
    render(): JSX.Element;
}
export declare class PageViewFooter extends React.Component<{
    height: number;
}> {
    static defaultProps: PageViewFooter["props"];
    render(): JSX.Element;
}
export declare class PageViewBody extends React.Component {
    render(): JSX.Element;
}
export declare class BaseComponent extends React.Component {
    private fired;
    constructor(props: any);
}
