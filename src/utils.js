import axios from "axios";
const BASE_URL = "https://fatoumi-backend.herokuapp.com/api";

export const getTopics = async () => {
  const { data } = await axios.get(`${BASE_URL}/topics`);
  return data.topics;
};

export const getArticles = async topic => {
  const { data } = await axios.get(`${BASE_URL}/articles`, {
    params: { topic }
  });
  return data.articles;
};

export const singleArticle = async article_id => {
  const { data } = await axios.get(`${BASE_URL}/articles/${article_id}`);
  return data.article;
};

export const viewComments = async article_id => {
  const { data } = await axios.get(
    `${BASE_URL}/articles/${article_id}/comments`
  );
  return data.comment;
};

export const votes = async (id, increment, section) => {
  const { data } = await axios.patch(`${BASE_URL}/${section}/${id}`, {
    inc_votes: increment
  });
  return data;
};

export const postComment = async (body, article_id) => {
  const { data } = await axios.post(
    `${BASE_URL}/articles/${article_id}/comments`,
    body
  );
  return data.comment;
};
