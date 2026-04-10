import Header from "~/components/markdown/header";
import ListElement from "~/components/markdown/listElement";

export default function Technologies() {
    return (<>
        <Header size="large">Some Tech I Like Working With</Header>

        <ListElement>React/React Native</ListElement>
        <ListElement>Expo</ListElement>
        <ListElement>TanStack</ListElement>
        <ListElement>Zustand</ListElement>

        <Header size="medium"></Header>
        <ListElement>Node</ListElement>
        <ListElement>Express</ListElement>
        <ListElement>Postgres</ListElement>
        <ListElement>Kysely</ListElement>
        <ListElement>Better-Auth</ListElement>

        <Header size="medium"></Header>
        <ListElement>Github Actions</ListElement>
        <ListElement>Docker</ListElement>
        <ListElement>AWS (S3, EC2, ...)</ListElement>
    </>);
};
