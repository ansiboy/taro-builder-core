import * as React from "react";
import { View } from "@tarojs/components";
import { component } from "maishu-jueying-core";
import { CSSProperties } from "react";
import { Callback } from "maishu-toolkit/out/callback";

export interface PageViewProps {
    showHeader?: boolean,
    showFooter?: boolean,
    headerHeight?: number,
    footerHeight?: number,
}

export interface PageViewState {

}

let PageViewContext = React.createContext<{ pageView?: PageView }>({})

@component()
export class PageView extends React.Component<PageViewProps> {
    childComponentCreated = new Callback<{ component: React.Component }>();

    static headerTypeName = "header";
    static footerTypeName = "footer";
    static bodyTypeName = "section";

    constructor(props: PageViewProps) {
        super(props)

        this.childComponentCreated.add((args) => {

        })
    }

    render() {
        let pageStyle: CSSProperties = {};
        return <View className="page-view" style={pageStyle}>
            <PageViewContext.Provider value={{ pageView: this }}>
                {this.props.children}
            </PageViewContext.Provider>
        </View >
    }
}

export interface PageViewHeaderProps {
    height: number
}

@component({ type: PageView.headerTypeName })
export class PageViewHeader extends React.Component<PageViewHeaderProps> {
    static defaultProps: PageViewHeaderProps = { height: 50 };

    render() {
        return <View className="header">
            {this.props.children}
        </View>
    }
}

export interface PageViewFooterProps {
    height: number
}

@component({ type: PageView.footerTypeName })
export class PageViewFooter extends React.Component<PageViewFooterProps> {
    static defaultProps: PageViewFooterProps = { height: 50 };
    render() {
        return <View className="footer">
            {this.props.children}
        </View>
    }
}

@component({ type: PageView.bodyTypeName })
export class PageViewBody extends React.Component {
    render() {
        return <View className="body">
            {this.props.children}
        </View>
    }
}

export class BaseComponent extends React.Component {
    private fired = false;

    constructor(props: any) {
        super(props);

        let render = this.render;
        this.render = () => {
            return <PageViewContext.Consumer>
                {args => {
                    console.assert(args.pageView != null);
                    if (this.fired == false) {
                        this.fired = true;
                        args.pageView?.childComponentCreated.fire({ component: this });
                    }
                    return render.apply(this);
                }}
            </PageViewContext.Consumer>
        }
    }
}
BaseComponent.contextType = PageViewContext;
