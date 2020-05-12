import * as React from "react";
import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";

import { component, parseComponentData } from "maishu-jueying-core";
import { CSSProperties } from "react";
import { Callback } from "maishu-toolkit/out/callback";
import { PageData } from "./component-data";

export interface PageProps {
    // showHeader?: boolean,
    // showFooter?: boolean,
    // headerHeight?: number,
    // footerHeight?: number,
    pageData: PageData
}

export interface PageViewState {

}

export let PageContext = React.createContext<{ page?: Page, pageData?: PageData }>({})

@component({ type: Page.typeName })
export class Page extends React.Component<PageProps> {
    childComponentCreated = new Callback<{ component: React.Component }>();
    static typeName = "PageView";
    static className = "page-view";

    constructor(props: PageProps) {
        super(props)
        console.log("Page")
    }

    render() {
        let pageStyle: CSSProperties = {};
        let pageData = this.props.pageData;
        let children = pageData.children.filter(o => o.parentId == pageData.id);
        let childComponents = children.map(o => <React.Fragment key={o.id}>
            {parseComponentData(o)}
        </React.Fragment>)
        return <View className={`${Page.className} ${Taro.getEnv()}`} style={pageStyle}>
            <PageContext.Provider value={{ page: this, pageData }}>
                {childComponents}
            </PageContext.Provider>
        </View>
    }
}