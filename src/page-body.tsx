import { ComponentProps } from "./component-data";
import { component } from "maishu-jueying-core";
import * as React from "react";
import { ComponentContainer } from "./component-container";
import { PageContext } from "./page";
import { PageHeader, PageHeaderProps } from "./page-header";
import { PageFooter, PageFooterProps } from "./page-footer";

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
        return <PageContext.Consumer>
            {args => {
                let style: React.CSSProperties = { marginTop: 0 };
                if (args.pageData != null) {
                    let header = args.pageData.children.filter(o => o.type == PageHeader.typeName)[0];
                    let footer = args.pageData.children.filter(o => o.type == PageFooter.typeName)[0];
                    if (header != null && (header.props as PageHeaderProps).visible) {
                        let p = header.props as PageHeaderProps;
                        style.marginTop = p.height;
                        style.height = `calc(100% - ${p.height}px)`;
                    }
                    if (footer != null && (footer.props as PageFooterProps).visible) {
                        let p = footer.props as PageHeaderProps;
                        style.marginBottom = p.height;
                        style.height = `calc(100% - ${(style.marginTop as number) + p.height}px)`;
                    }

                }

                style.display = this.props.visible ? "" : "none";
                return <ComponentContainer className={PageBody.className} {...this.props} style={style} />
            }}
        </PageContext.Consumer>
    }
}

PageBody.contextType = PageContext;