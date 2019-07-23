#!/bin/bash

# 构建image
docker image build  --network=host -t egg-shop:0.0.1 .

docker image ls

echo "=========================================="

# 运行容器
docker container run --network=host --rm -p 7001:7001 -it egg-shop:0.0.1


