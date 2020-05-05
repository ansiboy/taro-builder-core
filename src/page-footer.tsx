import { ComponentProps } from "./component-data";
import { component } from "maishu-jueying-core";
import * as React from "react";
import { ComponentContainer } from "./component-container";

export interface PageFooterProps extends ComponentProps {
    height: number,
    visible: boolean,
}

@component({ type: PageFooter.typeName })
export class PageFooter extends React.Component<PageFooterProps> {
    static typeName = "footer";
    static className = "footer";
    static id = "page-footer";
    static defaultProps: PageFooterProps = { id: PageFooter.id, height: 50, visible: true };

    render() {
        let style: React.CSSProperties = { height: this.props.height, display: this.props.visible ? "" : "none" }
        return <ComponentContainer id={this.props.id} className={PageFooter.className} style={style} />
    }
}

