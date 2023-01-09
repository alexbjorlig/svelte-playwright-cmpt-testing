import { test, expect } from '@playwright/experimental-ct-svelte';
import App from './simple.svelte';

test.use({ viewport: { width: 500, height: 500 } });

test('should work', async ({ mount, page }) => {
    const component = await mount(App);
    await page.pause();
    expect(component).toBeTruthy();
    // await expect(component).toContainText('Vite + Svelte');
});
