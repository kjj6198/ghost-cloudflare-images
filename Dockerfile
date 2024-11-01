FROM ghost:5-alpine

RUN mkdir -p versions/5.98.1/core/server/adapters/storage/ghost-cloudflare-images-storage
RUN apk --no-cache add gettext

COPY index.js package.json package-lock.json versions/5.98.1/core/server/adapters/storage/ghost-cloudflare-images-storage/

COPY config.development.template.json ./config.development.template.json
COPY config.production.template.json ./config.production.template.json
RUN envsubst < config.development.template.json > config.development.json
RUN envsubst < config.production.template.json > config.production.json

RUN cd versions/5.98.1/core/server/adapters/storage/ghost-cloudflare-images-storage \
  && npm install
