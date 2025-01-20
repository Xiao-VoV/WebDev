```
node --watch index.js
node --env-file .env --watch index.js
```

## 如何配置MongoDB

在 Docker 中安装 MongoDB 非常简单。以下是具体步骤：

### 1. 拉取 MongoDB 镜像

首先，从 Docker Hub 拉取 MongoDB 的官方镜像。

```bash
docker pull mongo
```

### 2. 运行 MongoDB 容器

使用以下命令启动 MongoDB 容器：

```bash
docker run --name my-mongo -d -p 27017:27017 mongo
```

- `--name my-mongo`：为容器指定一个名称（`my-mongo`）。
- `-d`：在后台运行容器。
- `-p 27017:27017`：将主机的 27017 端口映射到容器的 27017 端口（MongoDB 默认端口）。
- `mongo`：使用的镜像名称。

### 3. 连接到 MongoDB

你可以使用 MongoDB 客户端连接到容器中的 MongoDB 实例：

```bash
docker exec -it my-mongo mongosh
```

- `docker exec -it my-mongo`：在运行的容器中执行命令。
- `mongosh`：MongoDB 的交互式 shell。

### 4. 持久化数据（可选）

为了确保数据在容器重启后不丢失，可以将 MongoDB 的数据目录挂载到主机上：

```bash
docker run --name my-mongo -d -p 27017:27017 -v /path/to/local/directory:/data/db mongo
```

- `-v /path/to/local/directory:/data/db`：将主机的 `/path/to/local/directory` 目录挂载到容器的 `/data/db` 目录（MongoDB 默认数据存储路径）。
- 

以下是使用 Docker 卷来持久化 MongoDB 数据的步骤：

---

#### 1. 创建 Docker 卷

首先，创建一个 Docker 卷：

```bash
docker volume create mongo-data
```

- `mongo-data` 是卷的名称，你可以根据需要自定义。

### 2. 运行 MongoDB 容器并使用卷

启动 MongoDB 容器时，将卷挂载到容器的 `/data/db` 目录：

```bash
docker run --name my-mongo -d -p 27017:27017 -v mongo-data:/data/db mongo
```

- `-v mongo-data:/data/db`：将名为 `mongo-data` 的 Docker 卷挂载到容器的 `/data/db` 目录。

---

### 3. 验证卷的使用

你可以通过以下命令查看 Docker 卷的详细信息：

```bash
docker volume inspect mongo-data
```

这会显示卷的存储路径（在 Docker 的存储目录中）以及其他元数据。

---

### 4. 数据持久化

即使容器被删除或重启，数据仍然会保留在 Docker 卷中。如果需要重新启动 MongoDB 容器并继续使用相同的数据，只需重新挂载相同的卷即可：

```bash
docker run --name my-mongo -d -p 27017:27017 -v mongo-data:/data/db mongo
```

---

### 5. 删除卷（可选）

如果你不再需要 MongoDB 数据，可以删除卷：

```bash
docker volume rm mongo-data
```

注意：删除卷会永久丢失其中的数据，请谨慎操作。

---

### 总结

使用 Docker 卷来持久化 MongoDB 数据是一种更推荐的方式，因为它不依赖主机文件系统的路径，且由 Docker 统一管理。卷的生命周期独立于容器，适合生产环境中使用。

### 5. 设置环境变量（可选）

你可以通过环境变量配置 MongoDB，例如设置用户名和密码：

```bash
docker run --name my-mongo -d -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=password mongo
```

- `-e MONGO_INITDB_ROOT_USERNAME=admin`：设置 root 用户名为 `admin`。
- `-e MONGO_INITDB_ROOT_PASSWORD=password`：设置 root 密码为 `password`。

### 6. 停止和删除容器

停止容器：

```bash
docker stop my-mongo
```

删除容器：

```bash
docker rm my-mongo
```

### 总结

通过以上步骤，你可以在 Docker 中快速安装并运行 MongoDB。如果需要持久化数据或配置用户认证，可以通过挂载卷和环境变量来实现。
