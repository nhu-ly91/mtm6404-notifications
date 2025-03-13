import React, {useState} from "react";
import notificationsData from "./notifications";
import NotificationList from "./NotificationList";
import './App.css'

function App() {
  const [notifications, setNotifications] = useState(notificationsData);

  const clearNotification = (id) => {
    setNotifications(notifications.filter((notification) => notification.id !== id));
  };

  const clearNotifications = () => {
    setNotifications([]);
  }

  return (
    <div className="app-container">
      <h1>Notifications({notifications.length})</h1>
      <p>You have {notifications.length} new notifications.</p>
      <button onClick={clearNotifications} className="clear-all">Clear All</button>
      <NotificationList>
        {notifications.map((notification) => (
          <li key={notification.id}>
            <strong>{notification.name}</strong>: {notification.message}
            <button onClick={() => clearNotification(notification.id)}>Clear</button>
          </li>
        ))}
      </NotificationList>
    </div>
  );
}

export default App;
