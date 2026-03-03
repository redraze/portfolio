import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "~/components/content/loader";
import FilingCabinet from "~/components/content/filingCabinet";
import { OrbitControls } from "@react-three/drei";
import { useContentStore } from "~/lib/contentStore";

export default function DefaultContent() {
    const content = useContentStore((state) => state.content);
    
    return (
        <div className={content && content.component ? "hidden" : "flex grow"}>
            <Suspense fallback={<Loader />}>
                <Canvas camera={{ position: [4, 4, -2] }}>
                    <OrbitControls />
                    <ambientLight intensity={Math.PI / 2} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
                    <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
                    <FilingCabinet />
                </Canvas>
            </Suspense>
        </div>
    );
};
