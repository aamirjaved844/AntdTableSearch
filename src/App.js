import "antd/dist/antd.css";
import "./App.css";
import { Button, Input, Table } from "antd";
import { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";

function App() {
  const [dataSource, setDataSource] = useState([
    {
      name: "John",
      age: 32,
      address: "New York",
    },
    {
      name: "Jim",
      age: 33,
      address: "Sydney",
    },
    {
      name: "David",
      age: 40,
      address: "Japan",
    },
    {
      name: "James",
      age: 32,
      address: "New York",
    },
    {
      name: "Sam",
      age: 40,
      address: "Sydney",
    },
    {
      name: "John",
      age: 32,
      address: "New York",
    },
    {
      name: "Jim",
      age: 33,
      address: "Sydney",
    },
    {
      name: "David",
      age: 40,
      address: "Japan",
    },
    {
      name: "James",
      age: 32,
      address: "New York",
    },
    {
      name: "Sam",
      age: 40,
      address: "Sydney",
    },
  ]);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder="Type text here"
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                confirm({ closeDropdown: false });
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
            ></Input>
            <Button
              onClick={() => {
                confirm();
              }}
              type="primary"
            >
              Search
            </Button>
            <Button
              onClick={() => {
                clearFilters();
              }}
              type="danger"
            >
              Reset
            </Button>
          </>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.name.toLowerCase().includes(value.toLowerCase());
      },
    },
    {
      title: "Age",
      dataIndex: "age",
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder="Type text here"
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                confirm({ closeDropdown: false });
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
            ></Input>
            <Button
              onClick={() => {
                confirm();
              }}
              type="primary"
            >
              Search
            </Button>
            <Button
              onClick={() => {
                clearFilters();
              }}
              type="danger"
            >
              Reset
            </Button>
          </>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.age == value;
      },
    },
    {
      title: "Address",
      dataIndex: "address",
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => {
        return (
          <div style={{ display: "flex", flex: 1, justifyContent: "center" }}>
            <Input
              autoFocus
              placeholder="Type text here"
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                confirm({ closeDropdown: false });
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
            ></Input>
            <Button
              onClick={() => {
                confirm();
              }}
              type="primary"
            >
              Search
            </Button>
            <Button
              onClick={() => {
                clearFilters();
              }}
              type="danger"
            >
              Reset
            </Button>
          </div>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.address.toLowerCase().includes(value.toLowerCase());
      },
    },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <Table
          style={{ display: "flex", flex: 1, margin: 10 }}
          columns={columns}
          dataSource={dataSource}
        ></Table>
      </header>
    </div>
  );
}

export default App;
