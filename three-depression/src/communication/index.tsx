import { Button, Input } from '@arco-design/web-react';
import styles from './index.module.css';
import '@arco-design/web-react/dist/css/arco.css';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';
import { IconLeft } from '@arco-design/web-react/icon';
import { useMemo, useRef } from 'react';
import { Physics, useCompoundBody } from '@react-three/cannon';

function Fragment({ position, geometry }: { position: THREE.Vector3, geometry: THREE.BufferGeometry }) {
  const [ref] = useCompoundBody(() => ({
    mass: 1,
    position: [position.x, position.y, position.z],
    shapes: [
      { type: 'ConvexPolyhedron', args: [geometry] },
    ],
  }));

  return (
    <mesh 
      ref={ref as React.Ref<THREE.Mesh>}
      geometry={geometry}
    >
      <meshStandardMaterial color="white" />
    </mesh>
  );
}

function BrokenModel() {
  const { nodes } = useGLTF('/models/modules.glb');
  const fragments = useMemo(() => {
    const positions = [];
    // 生成随机碎片位置
    for (let i = 0; i < 20; i++) {
      positions.push({
        pos: new THREE.Vector3(
          (Math.random() - 0.5) * 2,
          (Math.random() - 0.5) * 2,
          (Math.random() - 0.5) * 2
        ),
        geo: nodes.YourModelPart.geometry // 替换为实际模型部件名称
      });
    }
    return positions;
  }, []);

  return (
    <Physics gravity={[0, -9.8, 0]}>
      {fragments.map(({pos, geo}, i) => (
        <Fragment key={i} position={pos} geometry={geo} />
      ))}
    </Physics>
  );
}

function Model() {
  const { scene } = useGLTF('/models/modules.glb');
  // 根据错误提示，useRef 可能需要传入初始值，这里将初始值设为 null
  const modelRef = useRef<THREE.Object3D>(null);
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (modelRef.current) {
      // 垂直方向抖动
      // modelRef.current.position.y = Math.sin(time * 10) * 0.05;
      // 水平旋转抖动
      // modelRef.current.rotation.z = Math.sin(time * 8) * 0.05;
    }
  });

  // return (
  //   <primitive
  //     object={scene}
  //     scale={[4, 4, 4]}
  //     ref={modelRef}
  //   />
  // );
  return <BrokenModel />;
}

function Scene() {
  return (
    <Canvas camera={{ fov: 75 }}>
      <ambientLight intensity={3} />
      <pointLight position={[10, 10, 10]} />
      <Model />
      <OrbitControls enableZoom={false} enableRotate={false} enablePan={false} />
    </Canvas>
  );
}

interface Props {
  scenarioId: number;
}

export const ComunicationPage = () => {
  const navigator = useNavigate();
  // const { scenarioId } = props;
  const detail = {
    relation: '朋友',
    depressionLevel: '轻度',
    empathy: 88,
  };
  return (
    <div className={styles.contentWrapper}>
      <Button
        shape='round'
        type='text'
        size='large'
        icon={<IconLeft />}
        onClick={() => window.history.back()}
        className={styles.backButton}
      />
      <div className={styles.threeWrapper}>
        <Scene />
      </div>
      <div className={styles.inputWrapper}>
        <div className={styles.detail}>
          <div className={styles.label}>副本信息</div>
          <div>与患者的关系：{detail.relation}</div>
          <div>患者的抑郁程度：{detail.depressionLevel}</div>
          <div>共情能力：{detail.empathy}</div>
        </div>
        <Button 
          type='primary'
          shape='circle'
          size='large'
          className={styles.changeButton}
          onClick={() => navigator('/scenarios/edit')}
        >
          修改副本信息
        </Button>
        <Button
          type='primary'
          shape='circle'
          size='large'
          className={styles.historyButton}
          onClick={() => navigator('/history')}
        >
          查看历史交流记录
        </Button>
        <Button
          type='primary'
          shape='circle'
          size='large'
          className={styles.empathyButton}
          onClick={() => navigator('/test')}
        >
          完成共情能力测评
        </Button>
        <div className={styles.inputSpace}>
          <Input.TextArea
            placeholder='请输入'
            className={styles.input}
            autoSize={{ minRows: 1, maxRows: 5 }}
          />
          <div className={styles.bottomWrapper}>
            <Button type='primary' shape='round' className={styles.sendButton}>
              发送
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
