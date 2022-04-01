import React, { useEffect, useState } from "react";
import { List, Typography } from "antd";
const News = () => {
  const [newsFeed, setNewsFeed] = useState([]);
  const newsKey = process.env.REACT_APP_RAPIDAPI_NEWS;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "free-news.p.rapidapi.com",
      "X-RapidAPI-Key": newsKey,
    },
  };

  //Fetch news from RapidAPI to store in state and map to list items
  useEffect(() => {
    fetch(
      "https://free-news.p.rapidapi.com/v1/search?q=Dubai&lang=en&page=1&page_size=9",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        return setNewsFeed(response.articles);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <Typography.Title level={1} style={{ padding: "1rem" }}>
        Top News in Dubai
      </Typography.Title>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          pageSize: 3,
        }}
        dataSource={newsFeed}
        renderItem={(item) => (
          <List.Item
            key={item._id}
            extra={<img width={150} height={100} alt="logo" src={item.media} />}
          >
            <List.Item.Meta
              title={
                <a href={item.link} rel="noopener noreferrer" target="_blank">
                  {item.title}
                </a>
              }
              description={item.published_date}
            />
            {item.summary}
          </List.Item>
        )}
      />
    </>
  );
};

export default News;
