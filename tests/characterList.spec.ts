import { test, expect } from '@playwright/test';

test.describe('Character List', () => {
  
  test.describe.configure({ mode: 'serial' });

  let characters: { id: number; name: string }[];

  test.beforeAll(async ({ request }) => {
    const tokenResponse = await request.post('/api/auth/token', {
      data: {
        username: 'nunos',
        password: 'P4x!D9k@T6v#M2rL',
      },
    });
    const responseBody = await tokenResponse.json();
    console.log(responseBody.token);

    const charactersResponse = await request.get('/api/characters', {
      headers: {
        Authorization: `Bearer ${responseBody.token}`,
      },
    });
    expect(charactersResponse.status()).toBe(200);
    characters = await charactersResponse.json();
    console.log(characters);
  });

  test('GET /api/characters returns 200 with a list', async () => {
    expect(Array.isArray(characters)).toBeTruthy();
    expect(characters.length).toBeGreaterThanOrEqual(3);
  });

  test('Character Nuno - id', async () => {
    expect(characters[0].id).toBe(1676);
  });

  test('Character Nuno - name', async () => {
    expect(characters[0].name).toBe('Nuno');
  });

  test('Character Naruto - id', async () => {
    expect(characters[1].id).toBe(1680);
  });

  test('Character Naruto - name', async () => {
    expect(characters[1].name).toBe('Naruto');
  });

  test('Character Vegeta - id', async () => {
    expect(characters[2].id).toBe(1702);
  });

  test('Character Vegeta - name', async () => {
    expect(characters[2].name).toBe('Vegeta');
  });
});
