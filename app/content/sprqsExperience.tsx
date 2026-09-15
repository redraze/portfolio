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
            <Text>An early task for me was to design the database that enables users to interact with each other. For this I took inspiration from <Link href="https://engineering.fb.com/2013/06/25/core-infra/tao-the-power-of-the-graph/">Facebook's TAO</Link>. I used join tables to store friend requests, connections, and messages between users, and followed the same approach to represent user ownership of our collectable "moji".</Text>
            <Text>Seems like most problems in life can be solved with join tables actually.</Text>
            <Text>I also made sure to write a few migration scripts for managing the team's multiple DB environments, which was something I had never done before.</Text>

            <Header size="small">Notifications</Header>
            <Text>Having spent a lot of time recently reading about system design, I was super excited to jump into building my first scalable notifications system.</Text>
            <Text>To minimize our app's use of the use of <Link href="https://docs.expo.dev/push-notifications/sending-notifications/">Expo push service</Link>, I chose to take a hybrid approach:</Text>
            <ListElement>First, I defined an SSE client manager that stores online users' HTTPS response objects, allowing future live events to be sent to clients that can then be presented as in-app notifications or silent cache updates</ListElement>
            <ListElement>Next, for offline users, I set up a few async <Link href="https://github.com/timgit/pg-boss">pg-boss</Link> task queues to handle sending push notification requests to APN and FCN via the Expo push service</ListElement>

            <Text styles="mt-4">Another critically important step was to meet the strict requirements for using the Apple and Google notifications APIs. I set up another set of task queue.</Text>
            <ListElement>Handle rejected tickets like, for example, notifications sent to users who have deleted our app. I set up a secondary pool of task queues to handle rejected Expo push tickets.</ListElement>
            <ListElement>Not exceed the certain sent tickets per hour usage threshholds. For this I queued long lived tasks with singleton keys to block similar subsequent requests.</ListElement>

            {/* ---------------------------------------------------------------------- */}

            <Header size="medium">Learning Curves</Header>
            <Text>I continue to face tons of new challenges at Sprqs which has genuinely been fantastic. I've grown more working here than I have anywhere else.</Text>

            <Header size="small">Thinking Bigger</Header>
            <Text>Sprqs is the first app I've built that needs to be able to scale, which has pushed me to adopt the microservices architecture for some features.The notifications service was the first service I decoupled (as mentioned above),but payment processing apis were the first that absolutely required consistency. </Text>
            <Text>However, ensuring consistency became difficult due to the fact that our 3rd party payment processer, <Link href="https://www.revenuecat.com/">RevenueCat</Link>, requires quick responses to payment requests, meaning our servers can not wait for every side effect to finish processing before responding with an OK.</Text>
            <Text>To solve this problem I decided to take a hybrid approach when handling payment requests: </Text>
            <ListElement>Immediately handle only the side effects neccessary to ensure strong consistency, and</ListElement>
            <ListElement>Offload non-critical side effects into separate message queues for eventual consistency</ListElement>

            <Header size="small">As Tech Lead</Header>
            <Text>Successfully leading a team obviously requires a ton of in-depth planning and tight communications, and at first I found this to be frustrating and tedious because I felt like I was wasting time not developing our app.</Text>
            <Text>Now, having shifted perspective, I really value celebrating a shared success with my team having a new screen look just like its Figma sketch or a new db schema and api work exactly as it was designed in Miro. I truely believe that a well aligned team is much more capabale than any single dev, and I enjoy taking the time and making the effort to thoroughly plan ahead.</Text>

            <Text>I also spent a lot of time researching software and writing abstractions that can be used to speed up development. A few examples include:</Text>
            <ListElement>Message brokers for providing feedback to clients via modals and toast notifications. For this, I used <Link href="https://github.com/pmndrs/zustand">Zustand</Link> to create and manage queues that components can hook into and push standardized messages to.</ListElement>
            <ListElement>A cache layer and request methods that clients components can hook into to make cached queries and mutations. For this I decided to build on top of <Link href="https://tanstack.com/query/latest">React Query</Link> instead of writing my own LRU cache from scratch.</ListElement>
            <ListElement>Custom error boundary back end middleware for catching and handling a variety of thrown server errors and error codes. This one really improved our controller code readability and made developing new APIs much less work.</ListElement>
        </>
    );
};
