import Header from "~/components/markdown/header";
import ListElement from "~/components/markdown/listElement";
import Text from "~/components/markdown/text";

export default function FreelanceExperience() {
    /**
     * =============
     * NEVERENDING
     * =============
     * 
     * managed three terams comprised of ~15 incoming inters/juniors
     * first time managing other developers, so many meetings!
     * 
     * 
     * favorite project: built a CI/CD pipeline that invalidates and pushes updates to a CDN
     * favorite project because it was first time I got to deploy large-scale (60k+ users) system architecture
     * AWS S3, EC2
     * 
     */
    return (
        <>
            <Header size="large">Freelance Experience</Header>
            <Text>Originally I got into web development to work on cool projects that will simplify people's lives or work, so I was really excited when I landed my first gig as a freelancer!</Text>

            <section about="boon water">
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

            <section about="never ending">
                <Header size="medium">NeverEnding</Header>
                <Text></Text>
            </section>
        </>
    )
}
