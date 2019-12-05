import { InjectionToken } from '@angular/core';

const graphcoolId = 'ck3jg6ij838vb0122k746btw2';

export interface GraphcoolConfig {
  simpleAPI: string;
  subscriptionsAPI: string;
  fileAPI: string;
  fileDownloadURL: string;
}

export const graphcoolConfig: GraphcoolConfig = {
  simpleAPI: `https://api.graph.cool/simple/v1/${graphcoolId}`,
  subscriptionsAPI: `wss://subscriptions.graph.cool/v1/${graphcoolId}`,
  fileAPI: `https://api.graph.cool/file/v1/${graphcoolId}`,
  fileDownloadURL: `https://files.graph.cool/${graphcoolId}`
};

export const GRAPHCOOL_CONFIG = new InjectionToken<GraphcoolConfig>(
  'graphcool.config',
  {
    providedIn: 'root',
    factory: () => {
      return graphcoolConfig;
    }
  }
);

/*
  Simple         https://api.graph.cool/simple/v1/ck3jg6ij838vb0122k746btw2
  Relay          https://api.graph.cool/relay/v1/ck3jg6ij838vb0122k746btw2
  Subscriptions  wss://subscriptions.graph.cool/v1/ck3jg6ij838vb0122k746btw2
  File           https://api.graph.cool/file/v1/ck3jg6ij838vb0122k746btw2
*/
