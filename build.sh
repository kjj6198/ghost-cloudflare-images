docker build --platform linux/amd64 -t kalan11/ghost-cloudflare-images .
docker tag kalan11/ghost-cloudflare-images:latest kalan11/ghost-cloudflare-images:$1
docker push kalan11/ghost-cloudflare-images:$1
