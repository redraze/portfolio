import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import MainPaneTopBar from "~/components/home/mainPaneTopBar";
import Loader from "~/components/content/loader";
import FilingCabinet from "~/components/content/filingCabinet";
import { OrbitControls } from "@react-three/drei";
import { useContentStore } from "~/lib/contentStore";

export default function DefaultContent() {
    const content = useContentStore((state) => state.content);
    const clearContent = useContentStore((state) => state.clearContent);

    const [hovered, setHover] = useState(false);

    return (
        <div className="flex grow relative">
            { content && <MainPaneTopBar content={content} /> }
            
            <div
                className={`
                    ${ content && content.component ? styles.mini : styles.full }
                    ${ hovered ? 'hover:cursor-pointer' : 'hover:cursor-grab' }
                `}
                onMouseDown={() => clearContent()}
            >
                <Canvas camera={{ position: [6, 6, -4] }} resize={{ debounce: 0 }}>
                    <Suspense
                        fallback={<Loader />}
                        children={[
                            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={true} enablePan={false} />,
                            <ambientLight intensity={1.5} />,
                            <pointLight position={[-15, -8, -12]} decay={0} intensity={Math.PI} />,
                            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />,
                            <FilingCabinet setHover={setHover} />,
                        ]}
                    >
                    </Suspense>
                </Canvas>
            </div>
        </div>
    );
};

const styles = {
    mini: 'absolute [transition:bottom_0.25s,right_0.25s,height_0.25s,width_0.25s,border_0.1s_0.25s,background_0.1s_0.25s] h-[250px] w-[250px] bottom-[30px] right-[30px] bg-[#252526] rounded-[100%] border-solid border-white border-2',
    full: 'absolute [transition:bottom_0.25s,right_0.25s,height_0.25s,width_0.25s] h-[100%] w-[100%] bottom-0 right-0',
};
