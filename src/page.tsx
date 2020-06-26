import * as React from "react";
import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";

import { component, parseComponentData, registerComponent } from "maishu-jueying-core";
import { CSSProperties } from "react";
import { Callback } from "maishu-toolkit/out/callback";
import { PageData } from "./component-data";

export interface PageProps {
    pageData: PageData
}

export interface PageViewState {

}

export let PageContext = React.createContext<{ page?: Page, pageData?: PageData }>({})

@component({ type: Page.typeName })
export class Page extends React.Component<PageProps> {
    childComponentCreated = new Callback<{ component: React.Component, id: string }>();

    #components: { [key: string]: React.Component } = {};

    static typeName = "article";
    static className = "page-view";

    constructor(props: PageProps) {
        super(props)
    }

    get components() {
        return this.#components;
    }

    render() {
        let pageStyle: CSSProperties = {};
        let pageData = this.props.pageData;
        pageData.children.forEach(c => {
            c.props.ref = (e: React.Component) => {
                if (e == null) return;
                if (this.#components[c.id] == null)
                    this.childComponentCreated.fire({ component: e, id: c.id });

                this.#components[c.id] = e || this.#components[c.id];
            }
        })
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

//========================================================
// 兼容旧代码
registerComponent("PageView", Page);
//========================================================


