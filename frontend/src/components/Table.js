import React, { useState } from "react";
import { Button, Table } from "semantic-ui-react";
import SearchFilter from "./Search";

const TableContainer = ({ posts, getPosts, deletePosts }) => {
  const [searchFilter, setSearchFilter] = useState("");

  const deletePost = (e, id) => {
    e.preventDefault();
    deletePosts(id);
  };

  return (
    <React.Fragment>
      <SearchFilter
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}
      ></SearchFilter>
      <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {posts
            .filter((post) => post.name.match(new RegExp(searchFilter, "i")))
            .map((post) => (
              <Table.Row>
                <Table.Cell>{post.name}</Table.Cell>
                <Table.Cell>{post.description}</Table.Cell>
                <Table.Cell>
                  <Button onClick={(e) => deletePost(e, post.id)}>
                    Delete
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table>
    </React.Fragment>
  );
};

export default TableContainer;
