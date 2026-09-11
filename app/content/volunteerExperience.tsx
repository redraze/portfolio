import Header from "~/components/markdown/header";
import Link from "~/components/markdown/link";
import ListElement from "~/components/markdown/listElement";
import Text from "~/components/markdown/text";
import { useContentStore } from "~/lib/contentStore";
import { fileNameKeys, fileSystemMap, folderNameKeys } from "~/lib/fileStructure";
import { useFolderStore } from "~/lib/folderStore";

export default function VolunteerExperience() {
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
        <Text>Early 2025 I spent a few months volunteering time at <Link href="https://keelworks.org/">Keelworks</Link>, an organization dedicated to helping software developers gain experience.</Text>

        <Header size="medium">Why?</Header>
        <Text>There were two reasons I decided to volunteer at Keelworks:</Text>
        <ListElement>Keelworks was working on a water utility management web application, and I wanted to offer some expertise and fresh ideas since I had <a onClick={openFreelanceContent}>built something similar while freelancing</a></ListElement>
        <ListElement>I remember how difficult is was starting out as a software developer and not being able land to even land an interview, and I wanted to offer what I knew to other developers</ListElement>

        <Header size="medium">The Issue</Header>
        <Text>Their frontend team's progress was blocked because they weren't getting the APIs they needed for their login/signup flow, so I filled in as a backend engineer.</Text>
        <Text>I cleaned up thier server configuration, updated their db schemas, and wrote new models and controllers to provide authentication using JWTs.</Text>
        <Text>Within a week their backend was serving new requests and the frontend team was completely unblocked.</Text>

        <Header size="medium">The Team</Header>
        <Text>I also made sure to take the time to educate the more junior team members.</Text>
        <Text>A few times a week I would schedule group training/catchup meetings where I would teach:</Text>
        <ListElement>Basic setup and installation for the necessities, like running local servers, DBs, and Docker</ListElement>
        {/* <ListElement>Data fetching strategies and app security </ListElement> */}
        <ListElement>Node + Express, API design, and data CRUD with PostgreSQL</ListElement>
        <ListElement>User input validation and app security</ListElement>
        <Text styles="mt-4">I also made sure to leave behind plenty of documentation to help the team succeed after I left.</Text>
    </>);
};
