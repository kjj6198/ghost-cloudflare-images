# Ghost docker image using cloudflare images storage adapter

A quick implementation in order to integrate [cloudflare images](https://www.cloudflare.com/zh-tw/lp/pg-images/).

Still WIP. But it's able to upload image onto cdn instead of ghost local storage.

## How to use

Add required ENV:

```text
IMAGE_DOMAIN=<your_image_domain>
CLOUDFLARE_IMAGE_API_TOKEN=<cloudflare_images_api_token>
CLOUDFLARE_IMAGE_API_ENDPOINT=<cloudflare_image_api_endpoint>
```
