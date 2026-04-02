import { Html, useProgress } from '@react-three/drei'

export default function Loader() {
  const { progress } = useProgress();
  return <Html center className='bg-[#1e1e1e]' >{progress} % loaded</Html>;
};
