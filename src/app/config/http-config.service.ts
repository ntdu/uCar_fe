import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpConfigService {
    private _httpOptions = {
        headers: {},
        params: new HttpParams()
    }
	
    constructor(
        private http: HttpClient,
    ) { }

    initHttpHeader() {
    }

    httpGet(url: string) {
        this.initHttpHeader();
        return this.http.get(url, this._httpOptions);
    }

    httpGetWithParams(url: string, params: any) {
        this.initHttpHeader();
        for (var param of params) {
            this._httpOptions.params = this._httpOptions.params.append(param.key, param.value);
        }

        return this.http.get(url, this._httpOptions);
    }

    httpPost(url: string, body: any) {
        this.initHttpHeader();
        return this.http.post(url, body, this._httpOptions);
    }

    httpPut(url: string, body: any) {
        this.initHttpHeader();
        return this.http.put(url, body, this._httpOptions);
    }

    httpOptions(url: string) {
        this.initHttpHeader();
        return this.http.options(url, this._httpOptions);
    }
}