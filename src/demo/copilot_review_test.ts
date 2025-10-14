/**
 * Intentional code smells for Copilot review demo:
 * - no retry/backoff
 * - loosely validated JSON structure
 * - magic numbers / silent catch
 * - mixed promise styles (then + try/catch)
 */
type UserResp = { name?: string };

function isUserResp(x: unknown): x is UserResp {
  return typeof x === 'object' && x !== null && 'name' in x;
}

export async function fetchUserName(userId: string): Promise<string | null> {
  // magic number timeout
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 2500);

  try {
    // minimal input check
    if (!userId) return null;

    const res = await fetch(`https://api.example.com/users/${userId}`, {
      method: 'GET',
      signal: controller.signal,
    });

    if (!res.ok) {
      // returns null instead of throwing → maybe propose error strategy
      return null;
    }

    // typed-unknown → narrow with a very loose guard (still reviewable)
    const data: unknown = await res.json();
    if (isUserResp(data)) {
      return data.name ?? null;
    }
    return null;
  } catch {
    // swallow error (Copilot likely to flag)
    return null;
  } finally {
    clearTimeout(timeout);
  }
}

// small util with loose coercion (review target: surprising behavior)
export function sum(a: number | string, b: number | string) {
  const na = typeof a === 'string' ? Number(a) : a;
  const nb = typeof b === 'string' ? Number(b) : b;
  if (Number.isNaN(na) || Number.isNaN(nb)) {
    // fallback to concatenation (questionable choice by design)
    return String(a) + String(b);
  }
  return na + nb;
}
