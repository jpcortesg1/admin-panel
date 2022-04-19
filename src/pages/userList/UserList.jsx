import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./userList.css";

const UserList = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params?.row?.avatar} alt="" />
            {params?.row?.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params?.row?.id}`}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline className="userListDelete" />
          </>
        );
      },
    },
  ];

  const rows = [
    {
      id: 1,
      username: "Jon Snow",
      avatar:
        "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      email: "jon@mail.com",
      status: "active",
      transaction: "$120",
    },
    {
      id: 2,
      username: "Jane Smith",
      avatar:
        "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      email: "jane@mail.com",
      status: "active",
      transaction: "$452",
    },
    {
      id: 3,
      username: "Karla Real",
      avatar:
        "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      email: "karla@mail.com",
      status: "active",
      transaction: "$427",
    },
    {
      id: 4,
      username: "Paul Jhok",
      avatar:
        "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      email: "paul@mail.com",
      status: "active",
      transaction: "$150",
    },
    {
      id: 1,
      username: "Jon Snow",
      avatar:
        "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      email: "jon@mail.com",
      status: "active",
      transaction: "$120",
    },
    {
      id: 2,
      username: "Jane Smith",
      avatar:
        "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      email: "jane@mail.com",
      status: "active",
      transaction: "$452",
    },
    {
      id: 3,
      username: "Karla Real",
      avatar:
        "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      email: "karla@mail.com",
      status: "active",
      transaction: "$427",
    },
    {
      id: 4,
      username: "Paul Jhok",
      avatar:
        "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      email: "paul@mail.com",
      status: "active",
      transaction: "$150",
    },
    {
      id: 1,
      username: "Jon Snow",
      avatar:
        "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      email: "jon@mail.com",
      status: "active",
      transaction: "$120",
    },
    {
      id: 2,
      username: "Jane Smith",
      avatar:
        "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      email: "jane@mail.com",
      status: "active",
      transaction: "$452",
    },
    {
      id: 3,
      username: "Karla Real",
      avatar:
        "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      email: "karla@mail.com",
      status: "active",
      transaction: "$427",
    },
    {
      id: 4,
      username: "Paul Jhok",
      avatar:
        "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      email: "paul@mail.com",
      status: "active",
      transaction: "$150",
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={rows}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default UserList;
