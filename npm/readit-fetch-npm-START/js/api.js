const BASE_URL = "http://localhost:3000";

// GET all posts
const getAllPosts = async () => {
  let response = await fetch(`${BASE_URL}/posts`);
  let data = await response.json();
  return data;
};

// POST new post
const addPost = async (title, url) => {
  let jsonObject = JSON.stringify({ title: title, url: url, score: 0 });

  let response = await fetch(`${BASE_URL}/posts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: jsonObject,
  });
  let data = await response.json();
  return data;
};

// PATCH update post (for the score)
const updateScore = async (id, score) => {
  let response = await fetch(`${BASE_URL}/posts/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ score: score }),
  });
  let data = await response.json();
  return data;
};

export { addPost, getAllPosts, updateScore };
