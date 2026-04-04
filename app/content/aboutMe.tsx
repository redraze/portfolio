import { useContentStore } from "~/lib/contentStore";
import { useFolderStore } from "~/lib/folderStore";
import Header from "~/components/markdown/Header";
import Text from "~/components/markdown/text"
import ListElement from "~/components/markdown/listElement";
import { fileNameKeys, fileSystemMap, folderNameKeys } from "~/lib/fileStructure";

export default function AboutMe() {
    const setContent = useContentStore((state) => state.setContent);
    const folderState = useFolderStore((state) => state.folderState);
    const setFolderState = useFolderStore((state) => state.setFolderState);

    const openKitchenContent = () => {
        const content = fileSystemMap[fileNameKeys.KITCHEN];
        setContent(content);

        setFolderState({
            ...folderState,
            [folderNameKeys.PROJECTS]: true,
        });
    };

    return (
        <section>
            <Header size={'large'}>Welcome to my Profile!</Header>
            <Text>A modern, production ready developer for building full-stack applications with React, Node, and Postgres.</Text>

            <Header size={'medium'}>Getting Started</Header>
            {/* picture of me! */}
            <Text>Currently living in West Seattle</Text>
            <Text>Some of my hobbies include:</Text>
            <ListElement>Frisbee</ListElement>
            <ListElement onClick={openKitchenContent}>Cooking</ListElement>
            <ListElement>Biking</ListElement>
            <ListElement>Cold Plunges at Alki Beach</ListElement>
            <ListElement>Paddleboarding</ListElement>
            <ListElement>Diving</ListElement>

            <Header size={'medium'}>Deployment (Traveling)</Header>
            <Text>I've lived all over the place!</Text>
            <Text>I got to explore a good amount of the Asia-Pacific while teaching English in Shanghai, China from 2015 to 2018.</Text>
            <Text>Moving to Kyiv, Ukraine in 2018 allowed me to wander through Eastern Europe and the greater European region as well.</Text>
        </section>
    );
};
