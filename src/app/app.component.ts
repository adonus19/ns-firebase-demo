import { Component, OnInit } from "@angular/core";
import { isAndroid } from "tns-core-modules/platform";

import * as firebase from 'nativescript-plugin-firebase';
import { FirebaseConfig } from '../../firebase-config';

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        firebase.init(FirebaseConfig)
            .then(() => {
                console.log(`Connected!`);
            })
            .catch(err => {
                console.log(err);
            });
    }

    getIconSource(icon: string): string {
        const iconPrefix = isAndroid ? "res://" : "res://tabIcons/";

        return iconPrefix + icon;
    }
}
