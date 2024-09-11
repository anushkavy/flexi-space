export async function getSpaces(Id) {
  const url = Id ? `/api/spaces/${Id}` : "/api/spaces";
  const res = await fetch(url);

  if (!res.ok) {
    throw {
      message: "There was an error fetching Spaces.",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data.spaces;
}

export async function getHostSpaces(Id) {
  const url = Id ? `/api/rentOut/spaces/${Id}` : "/api/rentOut/spaces";
  const res = await fetch(url);
  if (!res.ok) {
    throw {
      message: "There was an error fetching your Spaces.",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data.spaces;
}

export async function loginUser(creds) {
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(creds),
  });
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  return data;
}
