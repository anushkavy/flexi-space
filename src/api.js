export async function getSpaces() {
  const res = await fetch("/api/spaces");
  console.log("res", res, res.ok);
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

export async function getSpaceDetail(ParamsId) {
  const res = await fetch(`/api/spaces/${ParamsId}`);

  if (!res.ok) {
    throw {
      message: "There was an error fetching space details.",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  console.log("Debugging space fetch data", data);

  return data.spaces;
}
