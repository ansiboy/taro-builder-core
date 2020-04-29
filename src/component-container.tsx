import * as React from "react";
import { PageContext } from "./page";
import { parseComponentData } from "maishu-jueying-core";
import { View } from "@tarojs/components";
import { CSSProperties } from "react";
import { ComponentData } from "./component-data";

export interface ComponentContainerProps {
    id: string,
    className?: string,
    style?: CSSProperties
}

export class ComponentContainer extends React.Component<ComponentContainerProps> {

    renderChild(componentData: ComponentData) {
        return <React.Fragment key={componentData.id}>
            {parseComponentData(componentData)}
        </React.Fragment>
    }
    render() {
        return <PageContext.Consumer>
            {args => {
                let children = args.pageData?.children.filter(o => o.parentId == this.props.id) || [];
                return <View className={this.props.className} style={this.props.style}>
                    {children.map(o => this.renderChild(o))}
                </View>
            }}
        </PageContext.Consumer>
    }
}

ComponentContainer.contextType = PageContext