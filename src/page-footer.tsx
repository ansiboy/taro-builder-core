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
    static defaultProps: Partial<PageFooterProps> = { height: 50, visible: true };
    static typeName = "footer";
    static className = "footer";

    render() {
        let { height, visible } = this.props;
        return <ComponentContainer id={this.props.id}
            className={PageFooter.className}
            style={{ height: height, display: visible ? "" : "none" }} />
    }
}

