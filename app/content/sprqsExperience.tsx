import Header from "~/components/markdown/header";
import Link from "~/components/markdown/link";
import Text from "~/components/markdown/text";

export default function SprqsExperience() {
    return (
        <>
            <Header size="large">Sprqs</Header>
            <Text>Founding engineer for <Link href="https://sprqs.com/">✨SPRQS✨</Link>, the up-and-coming, <span className="rainbow-text">HOT AS HECK</span>, anonymous positivity social messaging app.</Text>
            <Text>Sprqs is being built to provide a safe space for friends to send each other fun, anonymous mesages to brighten each other's days.</Text>
        </>
    );
};
