import { Injectable } from "@angular/core";
import * as client from '../../configs/client.config.json';

@Injectable()
export class ClientConfigService {

    private clientconfig: any;

    constructor() {
        this.clientconfig = client;
    }

    get isMiddleLoginLayout() {
        return this.clientconfig.loginLayout == "MIDDLE";
    }

    get isRightLoginLayout() {
        return this.clientconfig.loginLayout == "RIGHT";
    }
}