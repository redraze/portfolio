import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "~/components/content/loader";
import FilingCabinet from "~/components/content/filingCabinet";

export default function DefaultContent() {
    return (
        <div className="flex grow">
            <Canvas>
                <ambientLight />
                <Suspense fallback={<Loader />}>
                    <FilingCabinet />
                </Suspense>
            </Canvas>
        </div>
    );
};
