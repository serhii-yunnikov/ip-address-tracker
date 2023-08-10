import { useRef } from 'react';
import { useApiData } from '../hooks/useApiData';

const Input = () => {
  const queryRef = useRef<HTMLInputElement>(null);
  const { updateData, data } = useApiData();

  const handleSubmitButton = () => {
    if (queryRef.current) {
      updateData(queryRef.current.value);
    }
  };

  return (
    <form
      className="form"
      method="post"
      onSubmit={event => event.preventDefault()}
    >
      <input
        className="form__input"
        type="text"
        placeholder="Search for any IP address or domain"
        ref={queryRef}
      />
      <button
        className="form__button"
        aria-label="Focus-search-query"
        type="submit"
        onClick={() => handleSubmitButton()}
      >
        <div className="search-bar__arrow"/>
      </button>
    </form>
  );
};

export default Input;
