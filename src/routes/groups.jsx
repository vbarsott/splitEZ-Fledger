export async function loader() {
  const res = await fetch("/api/groups");
  const data = await res.json();
  return data;
}

export async function action({ request }) {
  const formData = await request.formData();
  const method = request.method;

  if (method === "POST") {
    const groupData = Object.fromEntries(formData);
    const res = await fetch("/api/groups", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(groupData),
    });
    return await res.json();
  }

  if (method === "PUT") {
    const groupId = formData.get("id");
    const updatedData = Object.fromEntries(formData);
    const res = await fetch(`/api/groups/${groupId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    });
    return await res.json();
  }

  if (method === "DELETE") {
    const groupId = formData.get("id");
    const res = await fetch(`/api/groups/${groupId}`, {
      method: "DELETE",
    });
    return await res.json();
  }

  throw new Error("Unsupported method");
}
