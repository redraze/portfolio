import Header from "~/components/markdown/header";
import Link from "~/components/markdown/link";
import Text from "~/components/markdown/text";

export default function SprqsExperience() {
    return (
        <>
            <Header size="large">Sprqs</Header>
            <Text>Founding Engineer for <Link href="https://sprqs.com/">✨SPRQS✨</Link>, the up-and-coming, <span className="rainbow-text">HOT AS HECK</span> social messaging app built to provide a safe space for friends to send each other fun, anonymous mesages to brighten each other's days.</Text>

            <Header size="medium">Learning Curves</Header>
            <Text>I continue to face tons of new challenges at Sprqs, which has genuinely been fantastic because I can say I've grown more working at Sprqs than I have from all of my previous experience + projects combined.</Text>
            {/* coding standards */}
            {/* a cross platform app is something I've never worked on before, i had only built for web previously. complain about apple? */}
            {/* lots more planning than anything i've worked on before */}
            {/* breaking down problems into separate manageable bites for my team instead of diving in headlong as a solo dev */}
            {/* more complex queries than I've written before (CTE tables to limit db queries, transactions for ACID) */}

            <Header size="medium">Initialization</Header>
            <Text>I initially spent a lot of time learning about and implementing abstractions to make it easy for my team to develop quickly. While building these I focused a lot on simplicity of use and extensibility. A few that I'm really proud of are:</Text>

            <Header size="small">Front End Data Handling</Header>
            <Text>With the goal of minimizing the number of queries our backend had to deal with, I installed <Link href="https://tanstack.com/query/latest">React Query</Link> and setup a key factory for reuse throughout the app. I then wrote a library of custom hooks used to handle API communication in order to keep our components from becoming too bloated with fetches and cache updates.</Text>
            {/* also recently removed axios because it got pwned lol */}

            <Header size="small">Front End Message Broker</Header>
            <Text>A paired context + wrapper, built with <Link href="https://zustand.docs.pmnd.rs/learn/getting-started/introduction">Zustand</Link>, that catches and handles messages and errors thrown from any component asynchronously via a message queue.</Text>

            <Header size="small">Back End Error Handling</Header>
            {/* custom error class constructors used throwing errors from any controller */}
            {/* error boundary express middleware that gracefully handles any errors throw, and returns appropriate API responses */}

            <Header size="small">DB Migrations</Header>
            {/* I wanted my teammates to be able to easily reproduce our DB for testing */}


            <Header size="medium">Favorite Projects</Header>
            {/* TODO */}

            <Header size="small">Notifications</Header>
            {/* TODO */}
        </>
    );
};
