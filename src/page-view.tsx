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

let PageViewContext = React.createContext<{ pageView?: Page }>({})

@component({ type: Page.typeName })
export class Page extends React.Component<PageViewProps> {
    childComponentCreated = new Callback<{ component: React.Component }>();
    static typeName = "PageView";

    constructor(props: PageViewProps) {
        super(props)
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

export interface PageHeaderProps {
    height: number,
    visible: boolean,
}

@component({ type: PageHeader.typeName })
export class PageHeader extends React.Component<PageHeaderProps> {
    static defaultProps: PageHeaderProps = { height: 50, visible: true };
    static typeName = "header";
    static className = "header";

    render() {
        return <View className={PageHeader.className}>
            {this.props.children}
        </View>
    }
}

export interface PageFooterProps {
    height: number,
    visible: boolean,
}

@component({ type: PageFooter.typeName })
export class PageFooter extends React.Component<PageFooterProps> {
    static defaultProps: PageFooterProps = { height: 50, visible: true };
    static typeName = "footer";
    static className = "footer";

    render() {
        return <View className={PageFooter.className}>
            {this.props.children}
        </View>
    }
}

@component({ type: PageBody.typeName })
export class PageBody extends React.Component {

    static typeName = "section";
    static className = "body";

    render() {
        return <View className={PageBody.className}>
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
