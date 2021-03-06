import axios from "axios";
const BASE_URL = "https://fatoumi-backend.herokuapp.com/api";

export const getTopics = async () => {
  const { data } = await axios.get(`${BASE_URL}/topics`);
  return data.topics;
};

export const getArticles = async (topic, sort_by, order) => {
  const { data } = await axios.get(`${BASE_URL}/articles`, {
    params: { topic, sort_by, order }
  });
  return data.articles;
};

export const singleArticle = async article_id => {
  const { data } = await axios.get(`${BASE_URL}/articles/${article_id}`);
  return data.article;
};

export const getComments = async article_id => {
  const { data } = await axios.get(
    `${BASE_URL}/articles/${article_id}/comments`
  );
  return data.comment;
};

export const updateVotes = async (id, increment, section) => {
  const { data } = await axios.patch(`${BASE_URL}/${section}/${id}`, {
    inc_votes: increment
  });
  return data;
};

export const postComment = async (body, article_id) => {
  const { data } = await axios.post(
    `${BASE_URL}/articles/${article_id}/comments`,
    {
      body: body,
      username: "jessjelly"
    }
  );
  return data.comment;
};

export const delComment = async comment_id => {
  const { data } = await axios.delete(`${BASE_URL}/comments/${comment_id}`);
  return data;
};
