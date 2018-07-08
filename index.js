/**
 * Copyright 2018 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const {Server, FeedFetcher} = require('topicdeck');

const fetchInterval = 60 * 60 * 1000;
const feedFetcher = new FeedFetcher(fetchInterval, __dirname + '/config/');

const server = new Server({
  assetPathBase: `node_modules/topicdeck/dist/server/`,
  dataPath: `${__dirname}/config/`,
  overridePathBase: `${__dirname}/`
}, feedFetcher);

server.start(8080);
