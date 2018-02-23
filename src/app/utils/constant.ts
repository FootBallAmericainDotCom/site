'use strict';

import { environment } from '../../environments/environment';

export const BASE = environment.apiEndpoint;

export const API_BASE = BASE + '/graphql?query=';
