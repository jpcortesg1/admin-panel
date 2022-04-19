import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report
} from "@mui/icons-material";
import "./sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <LineStyle className="sideBarIcon" />
              Home
            </li>

            <li className="sidebarListItem">
              <Timeline className="sideBarIcon" />
              Analitycs
            </li>

            <li className="sidebarListItem">
              <TrendingUp className="sideBarIcon" />
              Sales
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <PermIdentity className="sideBarIcon" />
              Users
            </li>

            <li className="sidebarListItem">
              <Storefront className="sideBarIcon" />
              Products
            </li>

            <li className="sidebarListItem">
              <AttachMoney className="sideBarIcon" />
              Transactions
            </li>

            <li className="sidebarListItem">
              <BarChart className="sideBarIcon" />
              Reports
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sideBarIcon" />
              Mail
            </li>

            <li className="sidebarListItem">
              <DynamicFeed className="sideBarIcon" />
              Feedback
            </li>

            <li className="sidebarListItem">
              <ChatBubbleOutline className="sideBarIcon" />
              Messages
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <WorkOutline className="sideBarIcon" />
              Manage
            </li>

            <li className="sidebarListItem">
              <Timeline className="sideBarIcon" />
              Analitycs
            </li>

            <li className="sidebarListItem">
              <Report className="sideBarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
