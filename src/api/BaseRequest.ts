import {assertNotNull} from "../common/assertNotNull";
import {NoAuthError} from "../common/exceptionType";
import fetch from "isomorphic-unfetch";
/*tslint:disable*/

export class BaseRequest {
  private emptyResponse: EmptyResponse;

  constructor() {
    this.emptyResponse = new EmptyResponse();
  }

  static handleError = (error: any): Promise<any> => {
    return Promise.reject(error);
  };

  async fetch(url: string, config: Object): Promise<any> {
    let headers = {
      "Accept": "application/json",
      "Content-Type": "application/json",
    };

    const response = await fetch(
      "http://localhost:3000" + url,
      Object.assign({headers: headers, credentials: "include"},
        config,
      ));
    if (response.status == 401) {
      throw new NoAuthError("NoAuthorization");
    } else if (response.status == 204) {
      return this.emptyResponse;
    } else if (!response.status || response.status < 200 || response.status >= 300) {
      throw await response.json();
    }
    return response;
  }

  getObjectFlatter(): (param1: any, param2?: string) => string {
    const flatObject: any = {};
    const testMap = new Map<string, any>();
    let i = 0;

    return function objectToFlat(node: any, parentName?: string): string {
      let queryArgs: string[] = [];
      parentName = parentName ? parentName : "";

      if (node instanceof Object) {
        for (const subNodeName in node) {
          if (node[subNodeName] instanceof Object) {
            objectToFlat(node[subNodeName], subNodeName);
          } else {
            const newNodeValue = node[subNodeName];
            let fixedSubNodeName = "." + subNodeName;

            if (typeof subNodeName === "number" || (typeof subNodeName === "string" && !isNaN(Number(subNodeName)))) {
              fixedSubNodeName = "";
            }

            const newNodeName = parentName === "" ? subNodeName : parentName + fixedSubNodeName;

            if (newNodeValue) {
              testMap.set(i.toString(), {keyObject: newNodeName, valueObject: newNodeValue});
              i++;
              flatObject[newNodeName] = newNodeValue;
            }
          }
        }
      }

      testMap.forEach(item => queryArgs.push(item.keyObject + "=" + item.valueObject));

      const query = queryArgs.join("&");
      return query ? `?${query}` : "";
    };
  }

  protected q(params: { [key: string]: string | number | boolean | string | Date | null }): string {
    const query = Object.keys(params)
      .filter(k => params[k] != null)
      .map(k => `${k}=${encodeURIComponent(assertNotNull(params[k]).toString())}`)
      .join("&");

    return query ? `?${query}` : "";
  }
}

class EmptyResponse {
  public json(): any {
    return null;
  }
}
