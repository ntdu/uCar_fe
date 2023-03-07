import { Injectable } from '@angular/core';
import { HttpConfigService } from './http-config.service';

@Injectable()
export class ApiClientService {
    protected list_api: any;

    constructor(
        private httpConfig: HttpConfigService,
    ) { }

    getApiLink(key: string) {
        return 'http://localhost:8000/' + this.list_api.filter(function (item: any) { return item.key === key; })[0].link;
    }

    httpGet(api: string, callback: any, final: any) {
        return this.httpConfig.httpGetWithParams(this.getApiLink(api), [])
            .subscribe(
                data => {
                    try {
                        callback(data);
                    }
                    catch (error) {
                        console.log("errors", error);
                    }
                },
                error => {
                    console.log('oops', error);
                    final();
                },
                () => final(),
            );
    }

    httpGetWithParams(api: string, params: any, callback: any, final: any) {
        return this.httpConfig.httpGetWithParams(this.getApiLink(api), params)
            .subscribe(
                data => {
                    try {
                        callback(data);
                    }
                    catch (error) {
                        console.log("errors", error);
                    }
                },
                error => {
                    console.log('oops', error);
                    final();
                },
                () => final(),
            );
    }

    httpPost(api: string, body: any, callback: any, final: any) {
        return this.httpConfig.httpPost(this.getApiLink(api), body)
            .subscribe(
                data => {
                    try {
                        callback(data);
                    }
                    catch (error) {
                        console.log("errors", error);
                    }
                },
                error => {
                    console.log('oops', error);
                    final();
                },
                () => final(),
            );
    }

    httpPut(api: string, body: any, callback: any, final: any) {
        return this.httpConfig.httpPut(this.getApiLink(api), body)
            .subscribe(
                data => {
                    try {
                        callback(data);
                    }
                    catch (error) {
                        console.log("errors", error);
                    }
                },
                error => {
                    console.log('oops', error);
                    final();
                },
                () => final(),
            );
    }

    httpOptions(api: string, callback: any, final: any) {
        return this.httpConfig.httpOptions(this.getApiLink(api))
            .subscribe(
                data => {
                    try {
                        callback(data);
                    }
                    catch (error) {
                        console.log("errors", error);
                    }
                },
                error => {
                    console.log('oops', error);
                    final();
                },
                () => final(),
            );
    }
}