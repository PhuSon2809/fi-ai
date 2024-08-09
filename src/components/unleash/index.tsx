import { useAnimations, useGLTF } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import { GoArrowRight } from 'react-icons/go'
import * as THREE from 'three'

interface ModelProps {
  model: { name: string }
  rotationY: number
  scale: [number, number, number]
  position: [number, number, number]
}

const MyModel = ({ model, rotationY, scale, position }: ModelProps) => {
  const modelRef = useRef<THREE.Object3D>(null)
  const modelUrl = '/models/' + model?.name
  const { scene, animations } = useGLTF(modelUrl)

  const { actions, names } = useAnimations(animations, modelRef)

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y = rotationY
      modelRef.current.scale.set(scale[0], scale[1], scale[2])
      modelRef.current.position.set(position[0], position[1], position[2])
    }
  })

  useEffect(() => {
    names.forEach((k) => {
      actions[k]?.play()
    })
  }, [names, actions])

  return <primitive ref={modelRef} object={scene} />
}

const Unleash = () => {
  const [rotationY, setRotationY] = useState(0)
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      if (!isMobileOrTablet && scrollY > 1800 && scrollY < 2800) {
        setRotationY(scrollY * -0.01)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isMobileOrTablet])

  useEffect(() => {
    const handleResize = () => {
      setIsMobileOrTablet(window.innerWidth <= 1024)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className='unleash-the-power container-wrapper relative flex h-screen flex-col items-center gap-[24px] py-[150px] lg:flex-row'>
      <div className='absolute z-[1000] flex w-[100%] flex-col'>
        <h2 className='title-wrap font-bold md:text-[40px] lg:text-[56px]'>Unleash the power</h2>
        <h1 className='text-[50px] font-bold md:text-[56px] lg:pl-[18%] lg:text-[104px]'>
          Of Offli<span className='lg:text-white'>ne</span>{' '}
        </h1>
        <h2 className='title-wrap font-bold md:text-[40px] lg:pl-[30%] lg:text-[56px] lg:font-medium'>
          Comme<span className='lg:text-white'>rce</span>{' '}
        </h2>
        <div className='flex max-w-[500px] flex-col items-end'>
          <span>
            We offer AI assistant solutions that free store owners from daily tasks, saving time, costs, and manpower.
            Simplify your operations and enhance efficiency effortlessly.
          </span>
          <button className='btn-gradien-astronaut mt-8'>
            Get started
            <GoArrowRight />
          </button>
        </div>
      </div>
      <div
        className='bg-unpleash relative top-[300px] ml-auto h-full w-[100%] md:top-[300px] lg:top-[120px] lg:w-[60%]'
        style={{
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <Canvas
          shadows
          camera={{
            position: isMobileOrTablet ? [0, 0, 6] : [0, 0, 8]
            // fov: 35,
            // near: 1,
            // far: 30
          }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 0, 5]} intensity={1} />
          <MyModel
            model={{ name: 'IHVtsHAQU7cF91LAuAlKN5.glb' }}
            rotationY={rotationY}
            scale={isMobileOrTablet ? [0.6, 0.6, 0.6] : [1.2, 1.2, 1.2]}
            position={isMobileOrTablet ? [0, -1, 0] : [0, -4, 0]}
          />
        </Canvas>
      </div>
    </div>
  )
}

export default Unleash
