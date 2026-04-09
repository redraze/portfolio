import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import MainPaneTopBar from "~/components/home/mainPaneTopBar";
import Loader from "~/components/filingCabinet/loader";
import FilingCabinet from "~/components/filingCabinet/filingCabinet";
import { Grid, OrbitControls } from "@react-three/drei";
import { useContentStore } from "~/lib/contentStore";
import { useEventStore } from "~/lib/eventStore";

export default function DefaultContent() {
    const content = useContentStore((state) => state.content);
    const clearContent = useContentStore((state) => state.clearContent);
    const gaming = useEventStore((state) => state.gaming);
    
    const [hovered, setHover] = useState(false);
    const [value, setValue] = useState(0);
    const cellThickness = Math.sin(value);

    useEffect(() => {
        if (!gaming) return;

        const interval = setInterval(() => {
            setValue(v => (v >= Math.PI ? 0 : v + 0.1));
        }, 100);

        return () => clearInterval(interval);
    }, [gaming])

    return (
        <div className="flex grow relative">
            <div className="flex flex-col grow">
                { content && <MainPaneTopBar content={content} /> }
                { content?.component && 
                    <div className="px-8 pt-12 overflow-auto absolute h-[100%] w-[100%]">
                        { content.component }
                    </div>
                }
            </div>
            
            <div
                className={`
                    ${ content && content.component ? styles.mini : styles.full }
                    ${ hovered ? 'hover:cursor-pointer' : 'hover:cursor-grab' }
                `}
                onMouseDown={() => clearContent()}
            >
                <Canvas camera={{ position: [4, 4, -3] }} resize={{ debounce: 0 }}>
                    <Suspense
                        fallback={<Loader />}
                        children={[
                            <OrbitControls key={0} maxPolarAngle={Math.PI / 2} enableZoom={true} enablePan={false} minDistance={5} maxDistance={15} />,
                            <ambientLight key={1} intensity={1.5} />,
                            <pointLight key={2} position={[-15, -8, -12]} decay={0} intensity={Math.PI} />,
                            <spotLight key={3} position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />,
                            <FilingCabinet key={4} setHover={setHover} />,
                            <Grid
                                key={5}
                                position={[0,-2,0]}
                                infiniteGrid={true}
                                fadeDistance={50}
                                fadeStrength={10}
                                sectionColor={'black'}
                                sectionSize={1}
                                sectionThickness={10}
                                cellColor={'#2b74c9'}
                                cellSize={1}
                                cellThickness={cellThickness * 2 + (gaming ? 12 : 0)}
                            />,
                        ]}
                    >
                    </Suspense>
                </Canvas>
            </div>
        </div>
    );
};

const styles = {
    mini: 'absolute [transition:bottom_0.25s,right_0.25s,height_0.25s,width_0.25s,background_0.1s_0.25s] h-[250px] w-[250px] bottom-[30px] right-[30px] bg-[#252526]',
    full: 'absolute [transition:bottom_0.25s,right_0.25s,height_0.25s,width_0.25s] h-[100%] w-[100%] bottom-0 right-0',
};
