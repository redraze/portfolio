import Header from "~/components/markdown/header";
import ListElement from "~/components/markdown/listElement";
import Text from "~/components/markdown/text";
import { useContentStore } from "~/lib/contentStore";
import { fileNameKeys, fileSystemMap, folderNameKeys } from "~/lib/fileStructure";
import { useFolderStore } from "~/lib/folderStore";

export default function VolunteerExperience() {
    /**
     * I decided to volunteed some time to Keelworks for two reasons:
     * - make new connections with other developers
     * - bring some expertise/fresh ideas to their water utility app
     * 
     * 
     * cleaned up backend on small-scale project
     * helped unblock frontend (they weren't getting the APIs they needed)
     * node + express, sequlize, Postgres
     * 
     * 
     * I didn't really learn anything new, but it was great working with the teams there
     * 
     * 
     */
    const setContent = useContentStore((state) => state.setContent);
    const folderState = useFolderStore((state) => state.folderState);
    const setFolderState = useFolderStore((state) => state.setFolderState);

    const openFreelanceContent = () => {
        const content = fileSystemMap[fileNameKeys.FREELANCE];
        setContent(content);

        setFolderState({
            ...folderState,
            [folderNameKeys.PROJECTS]: true,
        });
    };

    return (<>
        <Header size="large">Volunteer Work</Header>
        <Text>Early 2025 I volunteered some time at <a href="https://keelworks.org/">Keelworks</a>, an organization dedicated to helping software developers gain experience.</Text>

        <Header size="medium">Why?</Header>
        <Text>There were two reasons I decided to volunteer at Keelworks:</Text>
        <ListElement>Keelworks was working on a water utility management web application, and I wanted to offer some expertise and fresh ideas since I had <a onClick={openFreelanceContent}>built something similar while freelancing</a></ListElement>
        <ListElement>I remember how difficult is was starting out and not being to even land an interview, and I wanted to offer what I knew to other developers</ListElement>

        <Header size="medium">The Project</Header>
        <Text>Their frontend team was blocked because they weren't getting the APIs they needed for their login/signup flow, so I filled in as a backend engineer.</Text>
        <Text>I cleaned up thier Node + Express server configuration, updated Postgres db schemas, and wrote new models and controllers to handle JWT authentication.</Text>
        <Text>Within a week I was serving new requests and had their team completely unblocked.</Text>

        <Header size="medium">The Results</Header>
        <Text>I only volunteered for a few months at Keelworks, but I really enjoyed working with the people there.</Text>
        <Text>It was also really great to see just how far I had come as a software engineer! A year or two prior and I really would have struggled to understand and solve the team's issues and drive progress towards the team's goals.</Text>
    </>);
};
