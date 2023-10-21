import "./styles.css";

const data = {
  conversationList: [
    {
      id: 1,
      name: "GYM Buddies 💪",
      type: "group",
      participants: [
        { id: 1, name: "Tom" },
        { id: 2, name: "Jeff" },
        { id: 3, name: "Jimmy Neutron" }
      ]
    },
    {
      id: 2, // Corrected the ID to 2
      name: "New Year's Eve 🎉",
      type: "group",
      participants: [
        { id: 1, name: "Tom" },
        { id: 2, name: "Sally" },
        { id: 3, name: "Fred" }
      ],
      messages: [{ id: 1, message: "It will be a good night" }]
    },
    {
      id: 3,
      name: "Steve",
      type: "Individual",
      messages: [
        {
          id: 1,
          message: "How's it going?"
        }
      ]
    },
    {
      id: 4, // You can assign a new unique ID here
      name: "Bobby Jones",
      type: "Individual",
      messages: [
        {
          id: 1,
          message: "You have seen this message!",
          readReceipt: {
            date: "21st October 2023",
            markedAsRead: true
          }
        }
      ]
    }
  ]
};

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React JS Optional Chaining (ES2020)</h1>
        <div>
          {data.conversationList.map((c) => {
            // const read =
            //   !c.messages ||
            //   !c.messages.length ||
            //   (c.messages &&
            //     c.messages[0] &&
            //     c.messages[0].readReceipt &&
            //     c.messages[0].readReceipt.date);
            const read =
              !c.messages?.[0] || c.messages?.[0].readReceipt?.markedAsRead;
            return (
              <div key={c.id} className={`list-item${read ? "" : "unread"}`}>
                {c.name}
                <div>
                  {/* {!!c.participants && */}
                  {c.participants?.map((p) => {
                    return (
                      <span key={p.id} className="group-participants">
                        {`${p.name + " | "}`}
                      </span>
                    );
                  })}
                </div>
                <small>
                  {/* {!!c.messages &&
                    !!c.messages[0] &&
                    !!c.messages[0].readReceipt &&
                    c.messages[0].readReceipt.date} */}
                  {c.messages?.[0].readReceipt?.date}
                </small>
              </div>
            );
          })}
        </div>
      </header>
    </div>
  );
}
