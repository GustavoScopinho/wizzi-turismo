import { useForm } from 'react-hook-form'
import * as S from './Form.styled'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { yupResolver } from '@hookform/resolvers/yup'

import { object, string, date, number } from 'yup'

const schema = object({
  origem: string().required('Campo obrigatório.'),
  destino: string().required('Campo obrigatório.'),
  entrada: string('Escolha uma data válida').required('Campo obrigatório.'),
  saida: string('Escolha uma data válida').required('Campo obrigatório.'),
  adultos: string().required('Campo obrigatório.').integer(),
  criancas: string(),
  nome: string().required('Campo obrigatório.'),
  email: string()
    .email('Digite um e-mail válido.')
    .required('Campo obrigatório.')
})

export function Form() {
  const {
    register,
    handleSubmit: onSubmit,
    watch,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const handleSubmit = data => {
    console.log(data)
    toast.success('Viagem confirmada!', {
      position: 'top-center'
    })
  }

  return (
    <>
      <ToastContainer />
      <S.Form onSubmit={onSubmit(handleSubmit)}>
        <S.ContainerForm>
          <S.Legend></S.Legend>
          <S.Fieldset>
            <S.ContainerInput>
              <label htmlFor="origem">Origem</label>
              <input type="text" id="origem" {...register('origem')} />
              {errors?.origem && <span>{errors?.origem?.message}</span>}
            </S.ContainerInput>
            <S.ContainerInput>
              <label htmlFor="destino">Destino</label>
              <input type="text" id="destino" {...register('destino')} />
              {errors?.destino && <span>{errors?.destino?.message}</span>}
            </S.ContainerInput>
          </S.Fieldset>

          <S.Fieldset>
            <S.ContainerInput>
              <label htmlFor="entrada">Entrada</label>
              <input type="date" id="entrada" {...register('entrada')} />
              {errors?.entrada && <span>{errors?.entrada?.message}</span>}
            </S.ContainerInput>
            <S.ContainerInput>
              <label htmlFor="saida">Saída</label>
              <input type="date" id="saida" {...register('saida')} />
              {errors?.saida && <span>{errors?.saida?.message}</span>}
            </S.ContainerInput>
          </S.Fieldset>
          <S.Fieldset>
            <S.ContainerInput>
              <label htmlFor="adultos">Adultos</label>
              <input type="number" id="adultos" {...register('adultos')} />
              {errors?.adultos && <span>{errors?.adultos?.message}</span>}
            </S.ContainerInput>

            <S.ContainerInput>
              <label htmlFor="criancas">Crianças</label>
              <input type="number" id="criancas" {...register('criancas')} />
            </S.ContainerInput>
          </S.Fieldset>
          <S.Fieldset>
            <S.ContainerName>
              <label htmlFor="nome">Nome:</label>
              <input type="text" id="nome" {...register('nome')} />
              {errors?.nome && <span>{errors?.nome?.message}</span>}
            </S.ContainerName>
          </S.Fieldset>
          <S.Fieldset>
            <S.ContainerName>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" {...register('email')} />
              {errors?.email && <span>{errors?.email?.message}</span>}
            </S.ContainerName>
          </S.Fieldset>
          <S.ContainerButton>
            <input type="submit" value="Enviar" />
          </S.ContainerButton>
        </S.ContainerForm>
      </S.Form>
    </>
  )
}
