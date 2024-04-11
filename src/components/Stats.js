function Stats({ items }) {
    if (!items.length)
      return (
        <footer className="stats">
          <em>Start adding some items to your packing list 📝</em>
        </footer>
      );
    const numItems = items.length;
    const numPacked = items.filter(items => items.packed).length;
    const percentage = Math.floor((numPacked / numItems) * 100);
    return (
      <footer className="stats">
        <em>
          {percentage === 100
            ? "You are good to go! ✈️"
            : `🧳 You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`}
        </em>
      </footer>
    );
  }

  export default Stats;