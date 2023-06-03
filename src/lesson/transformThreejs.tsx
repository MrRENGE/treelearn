import React, { useEffect } from 'react';
import * as THREE from 'three';

export default function TwoDay() {
  const rotateBox = () => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );

    // const pointLight = new THREE.PointLight(0xffffff, 1.0)
    // pointLight.position.z = 3
    // scene.add(pointLight)

    // const ambient = new THREE.AmbientLight(0xff00ff, 1)
    // scene.add(ambient)

    scene.background = new THREE.Color(0xa0a0a0);
    scene.fog = new THREE.Fog(0xa0a0a0, 10, 50);

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x8d8d8d);
    hemiLight.position.set(0, 20, 0);
    scene.add(hemiLight);

    // AxesHelper：辅助观察的坐标系
    const axesHelper = new THREE.AxesHelper(200);
    scene.add(axesHelper);

    camera.position.z = 20;
    // 新建一个 meshA
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const material = new THREE.MeshLambertMaterial({
      color: 0xfa541c,
      //   transparent: true, //开启透明
      //   opacity: 0.5, //设置透明度
    });
    const meshA = new THREE.Mesh(geometry, material);

    scene.add(meshA);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    function animate() {
      requestAnimationFrame(animate);

      meshA.rotation.x += 0.01;
      meshA.rotation.y += 0.01;

      if (meshA.position.z >= 15) {
        meshA.position.z -= 0.01;
      } else {
        meshA.position.z += 0.01;
      }

      renderer.render(scene, camera);
    }

    animate();
  };

  useEffect(() => {
    rotateBox();
  }, []);

  return <div id='container'></div>;
}
