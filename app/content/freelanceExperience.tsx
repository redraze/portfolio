import Header from "~/components/markdown/header";
import ListElement from "~/components/markdown/listElement";
import Text from "~/components/markdown/text";
import Tooltip from "~/components/markdown/tooltip";
import jira from '~/assets/jira.gif';
import Link from "~/components/markdown/link";

export default function FreelanceExperience() {
    return (
        <>
            <Header size="large">Freelance Experience</Header>
            <Text>Originally I got into web development to work on cool projects that will simplify people's lives or work, so I was really excited when I landed my first gigs as a freelancer!</Text>

            <section>
                <Header size="medium">NeverEnding</Header>
                <Text>NeverEnding is a creative platform for storytellers and gamers, and I was brought in to finish integrating a pre-built Unity project that allowes users to design and 3D charaters for live-streaming.</Text>

                <Header size="small">Projects</Header>
                <Text>My main task of integrating the Unity project consisted of writing a handful of React components and a <Link href="https://react-unity-webgl.dev/">React-Unity-WebGL</Link> wrapper. This task didn't take me very long to finish, so I'm really glad I took the intitiative to:</Text>
                <ListElement>Build a Github Actions pipeline that responds to updates in the Unity project files, invalidating and pushing updates to our AWS CloudFront CDN</ListElement>
                <ListElement>Configure a new AWS service cluster (S3, EC2, Route53, Elastic IP) for handling API requests from character creation services</ListElement>
                <Text styles="mt-4">Prior to my time here, I had super limited hands-on experience working with AWS and configuring AWS services, but after working on these projects and receiving guidance from my awesome <Link href="https://www.linkedin.com/in/varunturlapati/">VP of Engineering</Link>, I feel confident that I can build scalable services wherever I go next. I even earned my <Link href="https://cp.certmetrics.com/amazon/en/public/verify/credential/33f2c46def3347dd82c14df51f5c618a">AWS CP certificate</Link>!</Text>

                <Header size="small" styles="mt-4">Project Management</Header>
                <Text>
                    On top of my assigned dev duties, I quickly became the manager and first line of support for three teams of interns.
                    This was the first time I had even worked as an individual contributor in a dev team so I was really overwhlemed at first
                    (<Tooltip tooltip={<img src={jira} alt="...loading..." />} >
                        especially with all the meetings!
                    </Tooltip>
                    ), but in the end I had a ton of fun and am super grateful for the oportunity to work with all the diverse teams at NeverEnding.
                </Text>
            </section>

            <section>
                <Header size="medium">Boon Water</Header>
                <Text>Boon Water is a tiny company made up of neighbors that came together to care for their well water system themselves instead of selling control to a management conglomerate.</Text>
                <Text>These neighbors had reached out to me in the past to help them update their old-school Excel spreadsheets that they used to track water usage, so I tried to create a familiar web-based experience to meet all of their needs with:</Text>
                <ListElement>NextJS for API endpoints and some SSR</ListElement>
                <ListElement>React + Typescript</ListElement>
                <ListElement>MongoDB</ListElement>
                <ListElement>A Github Actions pipeline deploying to MS Azure</ListElement>

                <Header size="small" styles="mt-4">Features</Header>
                <Text>First I made sure to transfer over all the functionalities from the Excel workbook including water user management and data entry, but I also made sure to add in a few new features:</Text>
                <ListElement>Billing - integrated the Sendgrid API for sending water bills to neighbors and for sending quarterly reports to the county</ListElement>
                <ListElement>Monitoring - the pipes for the water system were pretty old, so I made sure to add checks to detect overconsumption and water leaks</ListElement>

                <Header size="small" styles="mt-4">Takeaways</Header>
                <Text>This was the first paid project I had worked on, so I did a lot of reading to make sure my APIs were secure and the user data that I collected were securely stored. I learned a lot about cryptography including:</Text>
                <ListElement>Encryption and encryption best practices</ListElement>
                <ListElement>Two-way key exchanges and JWTs</ListElement>
                <ListElement>Authentication and session management</ListElement>
            </section>
        </>
    )
}
