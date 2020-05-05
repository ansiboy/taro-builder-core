import { Page } from "./page";
import { PageBody } from "./page-body";
import { PageHeader } from "./page-header";
import { PageFooter } from "./page-footer";

let elementId = "taro-builder-core-style";
if (!document.getElementById(elementId) && document.head != null) {
    let element = document.createElement('style');
    element.type = 'text/css';
    element.id = "taro-builder-core-style";
    document.head.appendChild(element);
    element.innerHTML = `
    .${Page.className} {
        width   : 100%;
        height  : 100%;
        position: absolute;
    }
    
    .${Page.className} .${PageBody.className} {
        overflow-y: auto;
        overflow-x: hidden;
    }
    
    .${Page.className} .${PageBody.className}::-webkit-scrollbar-track-piece {
        background-color: #fff;
    }
    
    .${Page.className} .${PageBody.className}::-webkit-scrollbar {
        width: 4px;
    }
    
    .${Page.className} .${PageBody.className}::-webkit-scrollbar-thumb {
        background: #999;
    }
    
    .${Page.className} .${PageHeader.className} {
        position: absolute;
        top     : 0px;
        width   : 100%;
    }
    
    .${Page.className} .${PageFooter.className} {
        position: absolute;
        bottom  : 0px;
        width   : 100%;
        margin  : 0;
    }
    `
}
