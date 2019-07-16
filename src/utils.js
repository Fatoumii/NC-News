import axios from "axios";
const BASE_URL = "https://fatoumi-backend.herokuapp.com/api";

export const getTopics = async () => {
  const { data } = await axios.get(`${BASE_URL}/topics`);
  return data.topics;
};

export const getArticles = async topics => {
  const { data } = await axios.get(`${BASE_URL}/articles`, {
    params: { topics }
  });
  return data.articles;
};

export const singleArticle = async article_id => {
  const { data } = await axios.get(`${BASE_URL}/articles/${article_id}`);
  return data.article;
};
