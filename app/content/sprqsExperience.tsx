import Header from "~/components/markdown/header";
import Link from "~/components/markdown/link";
import ListElement from "~/components/markdown/listElement";
import Text from "~/components/markdown/text";

export default function SprqsExperience() {
    return (
        <>
            <Header size="large">Sprqs</Header>
            <Text>Founding Engineer for <Link href="https://sprqs.com/">✨SPRQS✨</Link>, the up-and-coming, <span className="rainbow-text">HOT AS HECK</span> social messaging app built to provide a safe space for friends to brighten each other's days by sending each other fun, anonymous mesages.</Text>

            {/* ---------------------------------------------------------------------- */}

            <Header size="medium">Favorite Projects (so far)</Header>

            <Header size="small">Social Graph DB</Header>
            <Text>An early task for me was to design the database that enables users to interact with each other. For this I took inspiration from <Link href="https://engineering.fb.com/2013/06/25/core-infra/tao-the-power-of-the-graph/">Facebook's TAO</Link> and used join tables to store friend requests, connections, and messages between users.</Text>
            <Text>I followed the same approach to represent user ownership of our collectable "moji", and soon realized that most problems in life can actually be solved by thinking in edges and vertices.</Text>

            <Header size="small">Notifications</Header>
            <Text>Having spent a lot of time recently reading about system design, I was super excited to jump into building my first scalable notifications system.</Text>
            <Text>To minimize our app's use of the use of <Link href="https://docs.expo.dev/push-notifications/sending-notifications/">Expo push service</Link>, I chose to take a hybrid approach:</Text>
            <ListElement>First, I defined an SSE client manager that stores online users' HTTPS response objects, allowing future live events to be sent to clients that can then be presented as in-app notifications or silent cache updates</ListElement>
            <ListElement>Next, for offline users, I set up a few async <Link href="https://github.com/timgit/pg-boss">pg-boss</Link> task queues to handle sending push notification requests to APN and FCN via the Expo push service</ListElement>
            <Text styles="mt-4">Another critically important step was to meet the strict requirements for using the Apple and Google notifications APIs. I set up another set of task queue</Text>
            <ListElement>Handle rejected tickets like, for example, notifications sent to users who have deleted our app. I set up a secondary pool of task queues to handle rejected Expo push tickets.</ListElement>
            <ListElement>Not exceed the certain sent tickets per hour usage threshholds. For this I queued long lived tasks with singleton keys to block similar subsequent requests.</ListElement>

            {/* ---------------------------------------------------------------------- */}

            <Header size="medium">Learning Curves</Header>
            <Text>I continue to face tons of new challenges at Sprqs, which has genuinely been fantastic because I can say I've grown more working here than I have from all of my previous experience + projects combined.</Text>

            <Header size="small">Thinking Bigger</Header>
            <Text>
                Sprqs is the first app I've built that needs to be cross-platform and be able to scale, which has forced me to plan a bit differently.
                I chose to work with Expo and React Native to save the team from building two separate apps in two separate languages.
            </Text>
            <Text>
                {/* TODO -- scale */}
                scalable apis and db queries
                offload heavy/lengthy computations to task queues and microservices
            </Text>


            <Header size="small">As Tech Lead</Header>
            <Text>Successfully leading a team requires in-depth planning and tight communication. For this I rely heavily on:</Text>
            <ListElement>Discord for check-ins</ListElement>
            <ListElement>Figma for mocking up new screens and components</ListElement>
            <ListElement>Miro for designing DB schema</ListElement>
            <ListElement>Postman and Jest for manual and automated API testing</ListElement>

            <Text>I also work hard to provide useful tooling to abstract away repetitive tasks so my team and I can develop quickly. Error boundaries and message brokers provide a quick way to communicate useful information to users.</Text>

            {/* <Text styles="mt-4">I am also expected to research tech, provide coding standards, and support my team's development.</Text> */}
            {/* <ListElement>choosing the right tech, and building for cross-platform (love u, expo)</ListElement> */}

            {/* <ListElement>setting coding standards, and providing abstractions to support fast development</ListElement> */}
        </>
    );
};
