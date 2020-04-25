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
    static headerTypeName: string;
    static footerTypeName: string;
    static bodyTypeName: string;
    constructor(props: PageViewProps);
    render(): JSX.Element;
}
export interface PageViewHeaderProps {
    height: number;
}
export declare class PageViewHeader extends React.Component<PageViewHeaderProps> {
    static defaultProps: PageViewHeaderProps;
    render(): JSX.Element;
}
export interface PageViewFooterProps {
    height: number;
}
export declare class PageViewFooter extends React.Component<PageViewFooterProps> {
    static defaultProps: PageViewFooterProps;
    render(): JSX.Element;
}
export declare class PageViewBody extends React.Component {
    render(): JSX.Element;
}
export declare class BaseComponent extends React.Component {
    private fired;
    constructor(props: any);
}
