import React, {LazyExoticComponent} from "react";
import * as views from "./view"

interface routerProp{
    path: string,
    menuTitle: string,
    view: any
}

export const routerProps: routerProp[] = [
    {
        path: '/form',
        menuTitle: "Form",
        view: views.formView
    },
    {
        path: '/table',
        menuTitle: "Table",
        view: views.tableView
    },
    {
        path: '/menu3',
        menuTitle: "menu3",
        view: views.formView
    }
]

export default {};