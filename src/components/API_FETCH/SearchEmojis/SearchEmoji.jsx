import React, { useRef, useState } from 'react';

const SearchEmoji = () => {
  const [emojis, setEmojis] = useState([]);
  const inputField = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputVal = inputField.current.value;

    if (!inputVal.trim()) {
      alert('Please enter a search term');
      inputField.current.style.border = 'solid 2px red';
    } else {
      inputField.current.style.border = ''; // Remove the red border if input is valid
      const fetchApi = async () => {
        try {
          const response = await fetch(
            `https://emoji-api.com/emojis?search=${inputVal}&access_key=e643220a68da62bfca6a0e22ad5eca5a11e753a0`
          );
          const data = await response.json();
          setEmojis(data);
        } catch (error) {
          console.error('Error fetching emojis:', error);
        }
      };
      fetchApi();
    }
  };

  return (
    <div className="search-emoji-container">
<div className="api-header head-fix">Search Emoji</div>
      <form onSubmit={handleSubmit}>
        <input
          ref={inputField}
          type="text"
          placeholder="Enter a search term (e.g., 'smile')"
        />
        <button type="submit">Search</button>
       
      </form>
      <div className="emoji-results">
        {emojis.length > 0 ? (
          emojis.map((emojiObj) => (
            <div key={emojiObj.slug} className="emoji-item">
              <span>{emojiObj.character}</span>
              <span>{emojiObj.unicodeName}</span>
            </div>
          ))
        ) : (
          <p>No emojis found</p>
        )}
      </div>
      
    </div>
    
  );
};

export default SearchEmoji;
