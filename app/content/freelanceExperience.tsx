import Header from "~/components/markdown/header";
import ListElement from "~/components/markdown/listElement";
import Text from "~/components/markdown/text";
import Tooltip from "~/components/markdown/tooltip";
import jira from 'public/jira.gif';
import Link from "~/components/markdown/link";

export default function FreelanceExperience() {
    return (
        <>
            <Header size="large">Freelance Experience</Header>
            <Text>Originally I got into web development to work on cool projects that will simplify people's lives or work, so I was really excited when I landed my first gigs as a freelancer!</Text>

            <section>
                <Header size="medium">Boon Water</Header>
                <Text>Boon Water is a tiny company of neighbors that came together to manage their well water system themselves.</Text>
                <Text>In the past I had worked with them to build and update their old-school Excel spreadsheets that were used for tracking water usage. Since I already knew what they wanted, I tried to make something familiar and straightforward.</Text>

                <Header size="small">Features</Header>
                <Text>Besides the base features of water user management and data entry, I added:</Text>
                <ListElement>Billing - integrated Sendgrid API for sending water bills to neighbors and for sending quarterly reports to the county</ListElement>
                <ListElement>Monitoring - the pipes for the water system were pretty old, so I made sure to add checks to detect overconsumption and water leaks</ListElement>

                <Header size="small" styles="mt-4">Stack</Header>
                <ListElement>React + Typescript, PostCSS + SASS</ListElement>
                <ListElement>NextJS for API endpoints and some SSR</ListElement>
                <ListElement>MongoDB</ListElement>
                <ListElement>A Github Actions pipeline deploying to MS Azure</ListElement>

                <Header size="small" styles="mt-4">TODOs</Header>
                <ListElement>Wireless water meters - streamline data entry and give more accurate water alerts</ListElement>
                <ListElement>Payments - enable neighbors to pay their bills online instead of mailing checks</ListElement>
            </section>

            <section>
                <Header size="medium">NeverEnding</Header>
                <Text>NeverEnding is a creative platform for storytellers and gamers, and I was brought in to finish integrating a pre-built Unity project that allowes users to design and 3D charaters for live-streaming.</Text>
                <Text>
                    On top of my assigned dev duties, I quickly became the manager and first line of support for three teams of interns.
                    This was the first time I had worked as a part of a dev team so I was really overwhlemed at first, 
                    <Tooltip tooltip={<img src={jira} />} >
                        especially with all the meetings!
                    </Tooltip>
                </Text>

                <Header size="small">Projects</Header>
                <Text>My main task of integrating the Unity project consisted of designing React components and a <Link href="https://react-unity-webgl.dev/">React-Unity-WebGL wrapper</Link>, which ended up not taking me very long to finish, so I went looking for other stuff to work on.</Text>
                <Text>Up to this point I had super limited experience working with cloud provider services, which is why I took the intitiative to:</Text>
                <ListElement>Build a Github Actions pipeline that responds to updates in the Unity project files, invalidating and pushing updates to the AWS CloudFront CDN</ListElement>
                <ListElement>Configure a new AWS service cluster (S3, EC2, Route53, Elastic IP) for handling API requests from character creation services</ListElement>
            </section>
        </>
    )
}
