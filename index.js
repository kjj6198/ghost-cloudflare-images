const StorageBase = require("ghost-storage-base");
const fs = require("fs");

class Storage extends StorageBase {
  constructor(config = {}) {
    super(config);
    this.apiToken = config.apiToken || process.env.CLOUDFLARE_API_TOKEN;
    this.apiEndpoint = config.apiEndpoint || process.env.CLOUDFLARE_API_ENDPOINT;
  }

  async save(image) {
    return fs.promises.readFile(image.path).then(async (buffer) => {
      const form = new FormData();
      form.append("file", new Blob([buffer]), image.path);

      const res = await fetch(this.apiEndpoint, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.apiToken}`,
        },
        body: form,
      }).then((res) => res.json());
      return `https://image.kalan.dev/${res.result.id}/normal`;
    });
  }

  exists(fileName) {
    return false;
  }

  serve() {
    return (req, res, next) => {
      return fs
        .createReadStream(req.path)
        .on("error", () => next())
        .pipe(res);
    };
  }

  delete(fileName) {}

  async read(options) {
    return fetch(`https://image.kalan.dev/${options.path}`).then((res) => res.blob());
  }
}

module.exports = Storage;
