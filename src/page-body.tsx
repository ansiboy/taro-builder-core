import { ComponentProps } from "./component-data";
import { component } from "maishu-jueying-core";
import * as React from "react";
import { ComponentContainer } from "./component-container";

export interface PageBodyProps extends ComponentProps {
    visible: boolean,
}

@component({ type: PageBody.typeName })
export class PageBody extends React.Component<PageBodyProps> {

    static typeName = "section";
    static className = "body";
    static id = "page-body";

    static defaultProps: PageBodyProps = { id: PageBody.id, visible: true };

    render() {
        let { visible } = this.props;
        return <ComponentContainer id={this.props.id} className={PageBody.className} style={{ display: visible ? "" : "none" }} />
    }
}