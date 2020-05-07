import { ErrorInfo } from "react";
import React = require("react");
import { ComponentData, componentTypes } from "maishu-jueying-core";
import { View } from "@tarojs/components";
import { errors } from "./errors";

export function parseComponentData(componentData: ComponentData) {
    let type = componentTypes[componentData.type];
    if (type == null) {
        throw errors.componentTypeNotExists(componentData.type);
    }
    let children: (string | React.ReactElement<any>)[] = [];
    if (componentData.children != null) {
        children = componentData.children.map(c => typeof c == "string" ? c : parseComponentData(c));
    }

    return React.createElement(ErrorBoundary, {}, React.createElement(type, componentData.props, ...children));
}

interface ErrorBoundaryProps {

}

interface ErrorBoundaryState {
    error: Error | null;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState>{
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { error: null };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        // Display fallback UI
        this.setState({ error });
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, info);
    }

    render() {
        let { error } = this.state;
        if (error) {
            return <View className="component-error">
                <View className="title">错误信息：</View>
                <View className="name">{error.name}</View>
                <View className="message">{error.message}</View>
                <View className="stack">{error.stack}</View>
            </View>
        }
        return this.props.children;
    }
}