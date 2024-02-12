import { test as base } from '@playwright/test';
import { AssetsApi } from './api/assets_api.spect'



export const test = base.extend<{ assetsApi: AssetsApi }>({
    assetsApi: async ({ request }, use) => {
      await use(new AssetsApi(request))
    }
});