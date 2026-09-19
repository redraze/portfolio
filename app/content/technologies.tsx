import Header from "~/components/markdown/header";
import ListElement from "~/components/markdown/listElement";

export default function Technologies() {
    return (<>
        <Header size="large">Some Tech I Like Working With</Header>

        <div className="text-lg">
            <ListElement>React</ListElement>
            <ListElement>React Native + Expo</ListElement>
            <ListElement>TanStack</ListElement>
            <ListElement>Zustand</ListElement>

            <Header size="medium"></Header>
            <ListElement>Node</ListElement>
            <ListElement>Express</ListElement>
            <ListElement>Postgres</ListElement>
            <ListElement>Kysely</ListElement>
            <ListElement>Better-Auth</ListElement>

            <Header size="medium"></Header>
            <ListElement>Jest</ListElement>
            <ListElement>Github Actions</ListElement>
            <ListElement>Docker</ListElement>
            <ListElement>AWS (S3, EC2, ...)</ListElement>

            <Header size="medium"></Header>
            <ListElement>Postman</ListElement>
            <ListElement>Burpsuite</ListElement>
            <ListElement>sqlmap</ListElement>
        </div>
    </>);
};
