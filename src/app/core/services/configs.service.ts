import { Injectable } from "@angular/core";
import * as quickLinks from '../../configs/quick-links.config.json';

@Injectable()
export class ConfigService {

    constructor() {
    }

    get getQuickLinks() {
        return quickLinks;
    }
}