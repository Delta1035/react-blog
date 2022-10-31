import React, { useEffect, useRef } from "react";
import { render } from "react-dom";
import * as THREE from "three";

const Three: React.FC = () => {
  const containerRef = useRef(null);
  //场景能够让你在什么地方、摆放什么东西来交给three.js来渲染，这是你放置物体、灯光和摄像机的地方
  // 1. 创建场景
  const scene = new THREE.Scene();
  // 2. 创建相机
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.set(0, 0, 10);
  scene.add(camera);
  // 3. 创建几何体
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  // 4. 创建材质
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  // 5. 通过几何体和材质创建物体
  const cube = new THREE.Mesh(geometry, material);
  // 6. 将物体添加到场景中
  scene.add(cube);
  // 7. 创建渲染器
  const renderer = new THREE.WebGL1Renderer();
  // 8. 设置渲染尺寸
  renderer.setSize(500, 100);
    // TODO 不渲染
  useEffect(() => {
    console.log(
      "container",
      containerRef,
      document.querySelector(".container")
    );
    document.querySelector(".container")?.appendChild(renderer.domElement);
  },[]);

  return (
    <>
      <p>Three</p>
      <div className="container" ref={containerRef}></div>
    </>
  );
};

export default Three;
