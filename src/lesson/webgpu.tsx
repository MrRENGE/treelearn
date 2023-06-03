import { useState } from 'react';
import { GPU } from 'gpu.js';

export default function HPUDemo() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const handleCpuClick = () => {
    // 计算一个耗时操作
    const fn = (a) => {
      //
      let arr = [];
      while (a) {
        a--;
        arr.push(+new Date());
      }
      return arr.at(-1);
    };
    //   return fn(a)
    setA(fn(1000000));
  };

  const handleGpuClick = () => {
    const generateMatrices = () => {
      const matrices = [[], []];
      for (let y = 0; y < 512; y++) {
        matrices[0].push([]);
        matrices[1].push([]);
        for (let x = 0; x < 512; x++) {
          matrices[0][y].push(Math.random());
          matrices[1][y].push(Math.random());
        }
      }
      return matrices;
    };

    const gpu = new GPU();
    const multiplyMatrix = gpu
      .createKernel(function (a, b) {
        let sum = 0;
        for (let i = 0; i < 512; i++) {
          sum += a[this.thread.y][i] * b[i][this.thread.x];
        }
        return sum;
      })
      .setOutput([512, 512]);

    const matrices = generateMatrices();
    const out = multiplyMatrix(matrices[0], matrices[1]);

    console.log(matrices, out);
    // setB(main())
  };

  const allRun = () => {
    handleCpuClick();
    handleGpuClick();
  };

  return (
    <div>
      <button onClick={handleCpuClick}>cpu计算</button>
      <button onClick={handleGpuClick}>gpu计算</button>
      <button onClick={allRun}>allRun</button>

      <div>
        cpu:{a}|||gpu:{b}
      </div>
    </div>
  );
}
