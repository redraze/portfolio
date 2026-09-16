import Header from "~/components/markdown/header";
import Link from "~/components/markdown/link";
import ListElement from "~/components/markdown/listElement";
import Text from "~/components/markdown/text";

export default function PaperTradingProject() {
    return (<>
        <Header size="large">Paper Trading</Header>
        <Text styles="text-lg"><Link href="https://github.com/redraze/Stockings">My very first project!</Link> -- a web app for speculating on real markets without investing real money.</Text>

        <Header size="medium">How it works</Header>
        <Text>Stock ticker data from the Nasdaq stock exchange and Yahoo Finance (is Yahoo even still operating?) is aggregated and parsed by a web scraper written using Python.</Text>
        <Text>Users start with $5k and a clean portfolio. They can make trades against live markets to see how much they can grow their investments.</Text>
        <Text>Stock portfolio, gains, losses, and trade histories are all tracked and used to present infographic charts to users.</Text>

        <Header size="medium">Built With</Header>
        <ListElement>Plain old JS/CSS/HTML</ListElement>
        <ListElement>Python, Flask + Django</ListElement>
        <ListElement>MongoDB</ListElement>

        <Header size="medium">Stuff I Learned</Header>
        <Text>Due to the limited number of free tier api requests the Nasdaq allows, my app did not end up functioning the way I had hoped, but I still ended up learning a ton about:</Text>
        <ListElement>Api limiting and api monetization -- basically, how companies are able to make money by offering internet services</ListElement>
        <ListElement>HTTPS -- methods, response structure</ListElement>
        <ListElement>Data parsing, mainly the limitations of web scrapers and how tedious it becomes to maintain their functionality when scraping a website that changes frequently</ListElement>
    </>);
};
