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

@component({ type: PageView.typeName })
export class PageView extends React.Component<PageViewProps> {
    childComponentCreated = new Callback<{ component: React.Component }>();
    static typeName = "PageView";

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

@component({ type: PageViewHeader.typeName })
export class PageViewHeader extends React.Component<PageViewHeaderProps> {
    static defaultProps: PageViewHeaderProps = { height: 50 };
    static typeName = "header";
    static className = "header";

    render() {
        return <View className={PageViewHeader.className}>
            {this.props.children}
        </View>
    }
}

export interface PageViewFooterProps {
    height: number
}

@component({ type: PageViewFooter.typeName })
export class PageViewFooter extends React.Component<PageViewFooterProps> {
    static defaultProps: PageViewFooterProps = { height: 50 };
    static typeName = "footer";
    static className = "footer";

    render() {
        return <View className={PageViewFooter.className}>
            {this.props.children}
        </View>
    }
}

@component({ type: PageViewBody.typeName })
export class PageViewBody extends React.Component {

    static typeName = "section";
    static className = "body";

    render() {
        return <View className={PageViewBody.className}>
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
