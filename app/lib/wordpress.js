const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

export async function getPosts() {
  const res = await fetch(`${API_URL}/posts?_embed`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch WordPress posts");
  }

  return res.json();
}

export async function getPages() {
  const res = await fetch(`${API_URL}/pages?_embed`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch WordPress pages");
  }

  return res.json();
}

export async function getPageBySlug(slug) {
  const res = await fetch(`${API_URL}/pages?slug=${slug}&_embed`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch WordPress page");
  }

  const pages = await res.json();
  return pages[0] || null;
}

export async function getJobOpenings() {
  const res = await fetch(`${API_URL}/job-openings?_embed`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch job openings from WordPress");
  }

  return res.json();
}

export async function getJobOpeningBySlug(slug) {
  const res = await fetch(`${API_URL}/job-openings?slug=${slug}&_embed`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch job opening from WordPress");
  }

  const jobs = await res.json();
  return jobs[0] || null;
}