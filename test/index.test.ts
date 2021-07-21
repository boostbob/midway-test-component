import {close, createApp, createHttpRequest} from '@midwayjs/mock';
import {IMidwayApplication} from "@midwayjs/core";

describe('/controller/book.ts', () => {

  describe('book features', () => {

    let app: IMidwayApplication;

    beforeAll(async () => {
      app = await createApp('base-app', {}, '@midwayjs/koa');
    });

    afterAll(async () => {
      await close(app);
    });

    it('should register book controller', async () => {
      const result = await createHttpRequest(app)
        .get('/books/1');
      expect(result.status).toBe(200);
      console.log(result.text);
    });

    it('should be merge local controller', async () => {
      const result = await createHttpRequest(app)
        .get('/foo/bar');
      expect(result.status).toBe(200);
      console.log(result.text);
    });

  });

});
