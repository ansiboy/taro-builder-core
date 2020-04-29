import { ComponentProps } from "./component-data";
import { component } from "maishu-jueying-core";
import * as React from "react";
import { ComponentContainer } from "./component-container";

export interface PageHeaderProps extends ComponentProps {
    height: number,
    visible: boolean,
}

@component({ type: PageHeader.typeName })
export class PageHeader extends React.Component<PageHeaderProps> {
    static typeName = "header";
    static className = "header";
    static id = "page-header";
    
    static defaultProps: PageHeaderProps = { height: 50, visible: true, id: PageHeader.id };

    render() {
        let { height, visible } = this.props;
        return <ComponentContainer id={this.props.id}
            className={PageHeader.className}
            style={{ height: height, display: visible ? "" : "none" }} />
    }
}