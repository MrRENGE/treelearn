import * as THREE from 'three';

export default function OneDay() {
  const rotateBox = () => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );

    // AxesHelper：辅助观察的坐标系
    const axesHelper = new THREE.AxesHelper(200);
    scene.add(axesHelper);

    camera.position.z = 20;

    // const geometry = new THREE.BoxGeometry(1, 1, 1)
    // const material = new THREE.MeshBasicMaterial({
    //   color: 0x00ffa1,
    //   transparent: true, //开启透明
    //   opacity: 0.5, //设置透明度
    // })
    // const cube = new THREE.Mesh(geometry, material)
    // scene.add(cube)

    // 创建场景
    // const scene = new THREE.Scene()

    // 新建一个 meshA
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const material = new THREE.MeshMatcapMaterial({
      color: 0x862d2d,
      opacity: 0.2,
    });
    const meshA = new THREE.Mesh(geometry, material);
    // 先将
    // meshA.position.set(1.1, 1.1, 0)

    // 新建一个 meshB
    const geometryB = new THREE.BoxGeometry(1, 1, 1);
    const materialB = new THREE.MeshMatcapMaterial({ color: 0xff0000 });
    const meshB = new THREE.Mesh(geometryB, materialB);
    // meshB.position.set(1.1, 1.1, 0)

    meshA.add(meshB);
    meshB.position.z = 1;

    // 将 mesh 添加到scene 中
    scene.add(meshA);
    // scene.add(meshB)
    // 将 meshA 延x轴方向移动5m，这里的x轴是相对于世界坐标系而言

    // meshA 往x轴移动2m
    meshA.position.x = 2;

    // meshB  往y轴移动2m
    meshB.position.y = 2;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    function animate() {
      //   requestAnimationFrame(animate)

      //   cube.rotation.x += 0.01
      //   cube.rotation.y += 0.01

      renderer.render(scene, camera);
    }

    animate();
  };

  //   useEffect(() => {
  //     rotateBox()
  //   }, [])

  return <div id='container'></div>;
}
