import { useRef, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiFileText, FiUser, FiChevronLeft } from 'react-icons/fi';
import { FaPager } from 'react-icons/fa';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import getValidationErrors from 'utils/getValidationErrors';
import { useBooks } from 'hooks/books';

import Input from 'components/Input';
import Loading from 'components/Loading';

import { Container, ActionWrapper, Heading, BackButton, Content, StyledButton, DeleteWrapper } from './styles';


const Alterar = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [id, setId] = useState('');
  const [showForm, setShowForm] = useState(false);

  const { goBack, push } = useHistory();

  const { editBook } = useBooks();

  const formRef = useRef(null);

  const handleSubmit = useCallback(
    async (data) => {
      setIsLoading(true);
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          bookName: Yup.string().required('Nome do livro obrigatório!').test('len', 'O nome do livro deve conter entre 5 e 50 caracteres', val => val.length >= 5 && val.length <= 50),
          author: Yup.string().required('Nome do autor obrigatório!').test('len', 'O nome do livro deve conter entre 3 e 100 caracteres', val => val.length >= 3 && val.length <= 100),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const response = await editBook(Number(id),{
          name: data.bookName,
          author: data.author,
          pages: data.totalPages.length > 0 ? data.totalPages : 0,
        });

        console.log(response);
        setIsLoading(false);
        alert("O livro foi inserido com sucesso!");

        push('/');

      } catch (err) {
        setIsLoading(false);
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }
      }
    },
    [push, editBook, id],
  );

  return (
    <Container>
      <ActionWrapper>
        <BackButton onClick={goBack}>
          <FiChevronLeft size={20} />
          <p>Voltar</p>
        </BackButton>
        <Heading>
          Beleza, vamos <strong>editar</strong> um novo livro:
        </Heading>
        {showForm ? (
          <Content>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <h3>Registro de livro:</h3>
              <Input
                name="bookName"
                icon={FiFileText}
                placeholder="Digite o nome do livro"
                style={{ width: 300 }}
                enabled={!isLoading}
              />
              <Input
                name="author"
                icon={FiUser}
                placeholder="Nome do autor"
                enabled={!isLoading}
              />
              <Input
                name="totalPages"
                icon={FaPager}
                placeholder="Número de páginas"
                enabled={!isLoading}
              />
              <StyledButton type="submit" enabled={!isLoading}>
                {isLoading ? <Loading size={2} /> : 'Atualizar livro'}
              </StyledButton>
            </Form>
          </Content>
        ) : (
          <DeleteWrapper>
            <div className="delete-input">
              <span>Digite o ID do livro a ser deletado:</span>
              <input type="number" value={id} placeholder="ID do livro" onChange={(e) => setId(e.target.value)} />
              <StyledButton type="button" onClick={() => setShowForm(true)}>Alterar livro</StyledButton>
            </div>
          </DeleteWrapper>
        )}
      </ActionWrapper>
    </Container>
  );
}

export default Alterar;