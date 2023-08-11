import { useEffect, useRef, useState } from 'react';
import { useApiData } from '../hooks/useApiData';
import ipValidator from '../utils/ipValidator';
import classNames from 'classnames';

const Input = () => {
  const queryRef = useRef<HTMLInputElement>(null);
  const { updateData } = useApiData();
  const [isTooltip, setIsTooltip] = useState(false);

  const handleSubmitButton = (event: React.FormEvent<HTMLButtonElement>) => {
    let { value } = queryRef.current || { value: undefined };
  
    if (value && ipValidator(value)) {
      setIsTooltip(false);
      updateData(value);
      queryRef.current!.value = '';
    } else {
      event.preventDefault();
      queryRef.current!.value = '';
      setIsTooltip(true);
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isTooltip) {
      timer = setTimeout(() => {
        setIsTooltip(false);
      }, 3000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isTooltip]);

  return (
    <form
      className="form"
      method="post"
      onSubmit={event => event.preventDefault()}
    >
      <input
        className={classNames(
          'form__input',
          {'form__input--no-valid': isTooltip}
        )}
        type="text"
        placeholder="Search for any IP address or domain"
        ref={queryRef}
      />
      <button
        className="form__button"
        aria-label="Focus-search-query"
        type="submit"
        onClick={handleSubmitButton}
      >
        <div className="search-bar__arrow"/>
      </button>
      {isTooltip && <div className="form__tooltip">Wrong IP address</div>}
    </form>
  );
};

export default Input;
