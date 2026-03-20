import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import MainPaneTopBar from "~/components/home/mainPaneTopBar";
import Loader from "~/components/content/loader";
import FilingCabinet from "~/components/content/filingCabinet";
import { OrbitControls } from "@react-three/drei";
import { useContentStore } from "~/lib/contentStore";

export default function DefaultContent() {
    const content = useContentStore((state) => state.content);
    const clearContent = useContentStore((state) => state.clearContent);

    return (
        <div className="flex grow relative">
            { content && <MainPaneTopBar content={content} /> }
            
            <div className={content && content.component ? styles.mini : styles.full} onMouseDown={() => clearContent()}>
                <Suspense fallback={<Loader />}>
                    <Canvas camera={{ position: [4, 4, -2] }} resize={{ debounce: 0 }}>
                        <OrbitControls />
                        <FilingCabinet />
                    </Canvas>
                </Suspense>
            </div>
        </div>
    );
};

const styles = {
    mini: 'absolute [transition:bottom_0.25s,right_0.25s,height_0.25s,width_0.25s,border_0.1s_0.25s,background_0.1s_0.25s] h-[250px] w-[250px] bottom-[30px] right-[30px] bg-[#252526] rounded-[100%] border-solid border-white border-2',
    full: 'absolute [transition:bottom_0.25s,right_0.25s,height_0.25s,width_0.25s] h-[100%] w-[100%] bottom-0 right-0',
};
