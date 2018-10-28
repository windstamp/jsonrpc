# README
本示例展示如何基于 web3.js JSON-RPC 查询以太坊网络的基本信息

本示例包含两个部分：一个是基于 nodejs 脚本查询；另一个是基于 nodejs web 项目查询，
具有基本的界面。

由于上述两个方法都用到了 web3.js 库，因此我们通过 npm 安装。

## 1. 创建 info 目录
```
mkdir info
cd info
```

## 2. 配置和安装 nodejs 库

### 2.1 npm init
执行下列命令
```
npm init
```

一直点击默认值，直到生成 package.json 文件。

### 2.2 配置依赖
这里直接在配置文件 package.json
中配置 web3 依赖。以及 nodejs web 项目需要的 jquery 依赖等，并配置启动脚本 start。

package.json
```
{
  "name": "info",
  "version": "1.0.0",
  "description": "web3.js example",
  "main": "app.js",
  "devDependencies": {
    "babel-preset-es2015": "~6.24.1",
    "babelify": "~7.3.0",
    "browserify": "~14.3.0",
    "jquery": "~3.2.1",
    "watchify": "~3.9.0",
    "web3": "~0.20.1"
  },
  "browserify": {
    "transform": [
      [
        "babelify",
        {
          "presets": [
            "es2015"
          ]
        }
      ]
    ]
  },
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "watchify app.js -o bundle.js -v"
  },
  "author": "",
  "license": "ISC"
}
```

### 2.3 安装依赖
执行下列命令安装依赖。
```
npm install
```

npm 安装有时候太慢，需要使用国内镜像加速。
```
npm --registry https://registry.npm.taobao.org install
```

需要说明的是，有时候使用国内镜像下载下来的包并不能完全正常使用，
而不使用又不能成功下载。这是个问题，而且很难查明原因。

## 3. nodejs 脚本方法
创建 scripts 子目录。

### 3.1 info.js
编写脚本文件 scripts/info.js
```
var Web3 = require('web3');

const provider = new Web3.providers.HttpProvider("http://localhost:7545");
const web3 = new Web3(provider);

var coinbase = web3.eth.coinbase;
console.log(coinbase);

var balance = web3.eth.getBalance(coinbase);
console.log(balance.toString(10));
```

## 4. nodejs web 方法

### 4.1 app.js
编写文件 app.js。

### 4.2 index.html
编写文件 index.html。

### 4.3 启动
执行下列命令启动 nodejs web 项目。
```
npm start
```

### 4.4 演示
打开 index.html 即可。

## 附录
需要先启动以太坊网络提供服务，如：
- Ganache (localhost:7545)
- ganache-cli (localhost:8545)。
