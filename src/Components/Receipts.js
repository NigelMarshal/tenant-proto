import React from "react";
import { Table, Tag, Space, Layout } from "antd";
import moment from "moment";

const Receipts = () => {
  const currencyConverter = (number) => {
    return new Intl.NumberFormat("en-AE", {
      style: "currency",
      currency: "AED",
    }).format(number);
  };

  const currencyToNumber = (currencyValue) => {
    return Number(currencyValue.replace(/(^\AED|,)/g, ""));
  };
  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      responsive: ["sm", "md"],
    },
    {
      title: "Notes",
      dataIndex: "notes",
      key: "notes",
      responsive: ["sm", "md"],
    },
    {
      title: "Type",
      key: "tags",
      dataIndex: "tags",
      responsive: ["sm", "md"],
      filters: [
        {
          text: "Rent",
          value: "rent",
        },
        {
          text: "Maintenance",
          value: "maintenance",
        },
      ],
      filterSearch: true,
      onFilter: (value, record) => record.tags == value,
      width: "30%",
      render: (tags) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "maintenance") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Cost",
      dataIndex: "cost",
      sorter: (a, b) => {
        return currencyToNumber(b.cost) - currencyToNumber(a.cost);
      },
    },
  ];

  const data = [
    {
      key: "1",
      date: `${moment("20220704").format("MMMM Do YYYY")}`,
      notes: "Paid from checking account",
      tags: ["rent"],
      cost: `${currencyConverter(4560)}`,
    },
    {
      key: "2",
      date: `${moment("20220903").format("MMMM Do YYYY")}`,
      notes: "Water heater burst. Not covered under contract",
      tags: ["maintenance"],
      cost: `${currencyConverter(12345)}`,
    },
    {
      key: "3",
      date: `${moment("20221108").format("MMMM Do YYYY")}`,
      notes: "Used 4th cheque for this quarter",
      tags: ["rent"],
      cost: `${currencyConverter(6850)}`,
    },
  ];

  return <Table columns={columns} dataSource={data} />;
};

export default Receipts;
