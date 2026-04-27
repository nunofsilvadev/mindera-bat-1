import { test, expect } from '@playwright/test';

test('Validate Classes', async ({ request }) => {
  const response = await request.get(
    'https://adventurers-guild-api.vercel.app/api/classes',
  );

  const responseBody = await response.json();

  expect(response.status()).toBe(200);

  expect(responseBody).toHaveLength(12);

  expect(responseBody[0].id).toBe(1);
  expect(responseBody[0].name).toBe('Barbarian');

  expect(responseBody[11].id).toBe(12);
  expect(responseBody[11].name).toBe('Wizard');
});
