import { useContentStore } from "~/lib/contentStore";
import { useFolderStore } from "~/lib/folderStore";
import Header from "~/components/markdown/header";
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
            {/* picture of me! */}
            <Text>A modern, production-ready developer for building full-stack applications.</Text>
            <Text>I like working on stuff that is either beneficial for people or just fun to build.</Text>
            <Text>Feel free to look around. You might find some easter eggs!</Text>

            <Header size={'medium'}>Features (Hobbies)</Header>
            <ListElement>
                <a href="https://github.com/redraze" target="_blank" rel="noopener noreferrer">
                    Software Development (I'm self taught!)
                </a>
            </ListElement>
            <ListElement>Frisbee, hiking, biking, longboarding, snowboarding</ListElement>
            <ListElement>Paddleboarding, diving, cold plunges at Alki</ListElement>
            <ListElement onClick={openKitchenContent}>Cooking!</ListElement>

            <Header size={'medium'}>Deployment (Traveling)</Header>
            <Text>Currently living in West Seattle, but I've lived all over the place!</Text>

            <Header size="small">🌏 Shanghai, China</Header>
            <ListElement>Taught English there from 2015 to 2018</ListElement>
            <ListElement>Gained Mandarin Chinese proficiency up to about HSK2 (my favorite part was writing)</ListElement>
            <ListElement>My food love affairs: 牛肉拉面, 红烧猪肉, 上海生煎馒头, 小笼包</ListElement>
            <ListElement>Visited: Japan, South Korea, Thailand, and the UAE in the middle of July because I'm so smart</ListElement>

            <Header size="small" styles="mt-4">🌍 Kyiv, Ukraine</Header>
            <ListElement>Слава Україна!</ListElement>
            <ListElement>Lived here from 2018 to 2020</ListElement>
            <ListElement>Favorite spots in the city:
                <ListElement>Graffiti covered water overflow channel going from Lybidska to Olimpiiska</ListElement>
                <ListElement>Having breakfeast with the street artists near Arsenalna</ListElement>
                <ListElement>Parkouring through the abandoned docks along the Dnipro near Hidropark</ListElement>
            </ListElement>
            <ListElement>I still don't speak Ukrainian very well, but my wife would love for me to learn 😅</ListElement>
            <ListElement>Visited: The Carpathians, Odesa, ☢️Chornobyl☢️, Germany, Italy, Greece, and Poland</ListElement>
        </section>
    );
};
