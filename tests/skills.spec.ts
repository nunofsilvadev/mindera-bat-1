import { test, expect } from '@playwright/test';

test('Validate Skills', async ({ request }) => {
  const response = await request.get(
    'https://adventurers-guild-api.vercel.app/api/skills',
  );

  const responseBody = await response.json();

  expect(response.status()).toBe(200);

  expect(responseBody).toHaveLength(18);

  expect(responseBody[0].id).toBe(1);
  expect(responseBody[0].name).toBe('Athletics');

  expect(responseBody[17].id).toBe(18);
  expect(responseBody[17].name).toBe('Persuasion');
});
