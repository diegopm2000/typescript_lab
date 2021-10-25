
Skip to content
Pull requests
Issues
Marketplace
Explore
@diegopm2000
Anexsoft /
Design-Patterns-TypeScript
Public

3
10

    8

Code
Issues
Pull requests 3
Actions
Projects
Wiki
Security

    Insights

Design-Patterns-TypeScript/creational/abstract-factory/index.ts /
@Anexsoft
Anexsoft Decorator pattern added
Latest commit 0d3777e on 1 Nov 2020
History
1 contributor
17 lines (12 sloc) 511 Bytes

import Publisher from "./src/publisher";
import FacebookFactory from "./src/factories/facebook/facebook-factory";
import LinkedinFactory from "./src/factories/linkedin/linkedin-factory";
import SlackFactory from "./src/factories/slack/slack-factory";

const content = 'Este es el mensaje a publicar'

const publisher = new Publisher(content)

publisher.send(new FacebookFactory())
publisher.send(new LinkedinFactory())
publisher.send(new SlackFactory())