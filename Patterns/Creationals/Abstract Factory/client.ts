import Publisher from "./src/publisher";
import FacebookFactory from "./src/factories/facebook/facebook-factory";
import LinkedinFactory from "./src/factories/linkedin/linkedin-factory";
import SlackFactory from "./src/factories/slack/slack-factory";

const content = 'Este es el mensaje a publicar'

const publisher = new Publisher(content)

publisher.send(new FacebookFactory())
publisher.send(new LinkedinFactory())
publisher.send(new SlackFactory())