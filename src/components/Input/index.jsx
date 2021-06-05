import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';

import { Container, Error } from './styles';

const Input = ({
  name,
  containerStyle = {},
  icon: Icon,
  enabled = true,
  customBgColor,
  customRadius,
  customWidth,
  callback,
  ...rest
}) => {
  const [focus, setFocus] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const inputReference = useRef(null);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handleInputBlur = useCallback(() => {
    setFocus(false);
    // o operador !! é pra ver se existe algum valor na variável
    setHasValue(!!inputReference.current?.value);
  }, []);

  const handleInputFocus = useCallback(() => {
    setFocus(true);
  }, []);

  const handleInputEnter = useCallback(
    (event) => {
      if (event.key === 'Enter') {
        if (inputReference.current !== undefined) {
          callback &&
            inputReference.current &&
            callback(inputReference.current);
        }
      }
    },
    [callback],
  );

  /**
   *  O defaultValue é uma prop passada la no Form chamada initialValue
   * pode ser passada assim:
   * initialData={{ name: 'Thiago' }}
   */

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputReference.current,
      path: 'value',
    });

    inputReference.current?.addEventListener('keypress', handleInputEnter);
  }, [fieldName, handleInputEnter, registerField]);

  return (
    <Container
      style={containerStyle}
      hasError={!!error}
      isFocused={focus}
      hasValue={hasValue}
      data-testid="input-container"
      enabled={enabled}
      customBgColor={customBgColor}
      customRadius={customRadius}
      customWidth={customWidth}
    >
      {Icon && <Icon size={20} />}
      <input
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
        defaultValue={defaultValue}
        ref={inputReference}
        {...rest}
      />
      {error && (
        <Error title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </Error>
      )}
    </Container>
  );
};

export default Input;
