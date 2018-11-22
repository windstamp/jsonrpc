# README

## 1. 开发环境说明
基于 Windows 10 操作系统和 bash 环境，python 即 python3，具体是 python 3.6.4。

### 1.1 Python 的虚拟环境
创建一个 Python 的虚拟环境。

#### 1.1.1 创建虚拟环境

在当前目录下执行
`
python -m venv venv
`

#### 1.1.2 使用虚拟环境

激活虚拟环境

git bash
```
source venv/Scripts/activate
```

Windows
```
venv\Scripts\activate.bat
```

### 1.2 Python 包管理软件 pip

尝试更新 pip
```
python -m pip install --upgrade pip
```

### 1.3 查看当前环境安装了哪些包

查看当前环境中已经安装了哪些 Python 包。
```
(venv) $ pip freeze
```

### 1.4 使用 pip 安装项目所需的 python 包
可以手动一个一个安装项目所需的包，也可以把项目所需的包写入配置文件，一次性安装。

#### 1.4.1 手动安装 web3 包
```
(venv) $ pip install web3
(venv) $ pip install py-solc
```

#### 1.4.2 使用配置文件安装
```
(venv) $ pip install --trusted-host pypi.python.org -r requirements.txt
```
