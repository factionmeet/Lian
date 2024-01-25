## Vue3+ElementPlus+Vite

## 版本

## 安装

1. 进到 `frontend` 目录下

2. `npm install` 安装所需的包

3. 启动服务

   + `npm run dev` 运行项目
   + <font color="red">报错见下面</font>

   >服务接口：http://localhost:3000/login


## 项目截图

## 项目目录

```sh
|-- frontend
  |-- public					# 输出文件              
	|-- src						# 核心文件
	|-- index.html				# Vue配置文件
	|-- LICENSE			    	# Vue-Manage-System开源证书
	|-- index.html				# Vue配置文件
	|-- package-lock.html 
	|-- package.html    		# 安装的包
	|-- README.md       		# 文档说明
	|-- vite.config.js  		# vite配置
	
```



## 常见错误

### 1. `npm run dev` 报错

+ 内容如下

  ```sh
  > vue-manage-system@5.1.0 dev
  > vite
  
  events.js:377
        throw er; // Unhandled 'error' event
        ^
  
  Error: spawn D:\Vscode\Vue-Manage-System\node_modules\esbuild\esbuild.exe ENOENT
      at Process.ChildProcess._handle.onexit (internal/child_process.js:274:19)
      at onErrorNT (internal/child_process.js:469:16)
      at processTicksAndRejections (internal/process/task_queues.js:82:21)
  Emitted 'error' event on ChildProcess instance at:
      at Process.ChildProcess._handle.onexit (internal/child_process.js:280:12)
      at onErrorNT (internal/child_process.js:469:16)
      at processTicksAndRejections (internal/process/task_queues.js:82:21) {
    errno: -4058,
    code: 'ENOENT',
    syscall: 'spawn D:\\Vscode\\Vue-Manage-System\\node_modules\\esbuild\\esbuild.exe',
    path: 'D:\\Vscode\\Vue-Manage-System\\node_modules\\esbuild\\esbuild.exe',
    spawnargs: [ '--service=0.12.9', '--ping' ]
  }
  ```

+ 错误原因：`vite` 安装失败

+ 解决措施：输入下面命令 `node .\node_modules\esbuild\install.js`，重新运行 `npm run dev`

### 2. `npm run dev` 报错


