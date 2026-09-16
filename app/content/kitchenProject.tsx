import Header from "~/components/markdown/header";
import Link from "~/components/markdown/link";
import kitchen from '/kitchen.png';
import Text from "~/components/markdown/text";
import ListElement from "~/components/markdown/listElement";

export default function KitchenProject() {
    return (<>
        <Header size="large">Kitchen</Header>
        <div className="flex flex-row">
            <div className="mr-auto pr-8">
                <Link href="https://kitchen-lilac.vercel.app">
                    <img src={kitchen} height={800} width={800} />
                </Link>
            </div>
            <div>
                <Text styles="text-lg">Cooking is chemistry, and I like chemistry, but I like cooking more because you can eat what you cook!</Text>
                <Text>My wife and I have a bunch of recipes, and I wanted to create a cool interactive kitchen-cookbook web app to naviagate through them.</Text>
                <Text>I had a lot of fun with this project! There's bunch of goofy features like manipulating gravity and throwing your ingredients around the kitchen.</Text>
            </div>
        </div>

        <Header size="medium">Built With</Header>
        <ListElement><Link href="https://nextjs.org">Nextjs</Link>, <Link href="https://react.dev">React</Link>, and <Link href="https://threejs.org">Three.js</Link> before it was cool</ListElement>
        <ListElement><Link href="https://www.mongodb.com">MongoDB</Link> and <Link href="https://graphql.org">GraphQL</Link> (a relational DB probably would have suited this project better, but I wanted to learn GraphQL)</ListElement>
        <ListElement><Link href="https://vercel.com">Vercel</Link> for hosting</ListElement>

        <Header size="medium">Looking Back</Header>
        <Text>I like to think that I've grown a lot since working on this project because whenever I look through its codebase I want to:</Text>
        <ListElement>add some context providers for state management because GOOD LORD do those props be drillin</ListElement>
        <ListElement>Init some form of client request data cache, and not fetch everything from my DB at once 😅</ListElement>
    </>);
}
